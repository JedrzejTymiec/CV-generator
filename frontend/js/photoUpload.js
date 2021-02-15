function photoUpload() {
  const imageField = document.getElementById("image-field");
  const imageInput = document.getElementById("image-input");

  imageField.addEventListener("click", () => {
    imageInput.click();
  });

  imageInput.addEventListener("change", () => {
    if (imageInput.isDefaultNamespace.length) {
      updatePhoto(imageInput.files[0]);
    }
  });

  imageField.addEventListener("dragover", (e) => {
    e.preventDefault();
    imageField.classList.add("dragging");
  });

  ["dragleave", "dragend"].forEach((drag) => {
    imageField.addEventListener(drag, () => {
      imageField.classList.remove("dragging");
    });
  });

  imageField.addEventListener("drop", (e) => {
    e.preventDefault();

    if (e.dataTransfer.files.length == 1) {
      imageInput.files = e.dataTransfer.files;

      updatePhoto(e.dataTransfer.files[0]);
    } else {
      document.getElementById("image-input-alert").style.display = "block";
      document.getElementById("image-input-alert").innerText =
        "Only one file can be uploaded";
      imageField.classList.remove("dragging");
      imageField.addEventListener("click", () => {
        document.getElementById("image-input-alert").style.display = "none";
      });
    }
  });

  document
    .getElementById("save-photo-button")
    .addEventListener("click", async () => {
      let body = new FormData();

      body.append("file", imageInput.files[0]);
      body.append("name", "name");
      try {
        let res = await fetch("/upload", {
          method: "POST",
          body: body,
        });
        console.log("Response:");
        console.log(await res.json());
        document.getElementById("image-input-alert").style.display = "block";
        document.getElementById("image-input-alert").style.color = "#54AD67";
        document.getElementById("image-input-alert").innerText =
          "Photo uploaded!";
        setTimeout(() => {
          document.getElementById("image-input-alert").style.display = "none";
        }, 3000);
      } catch (err) {
        console.log("Error!");
        console.log(err);
      }
    });
}

function updatePhoto(file) {
  const imageField = document.getElementById("image-field");

  if (file.type.startsWith("image/")) {
    if (document.querySelector("#image-field span")) {
      document.querySelector("#image-field span").remove();
    }
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      photoElement.style.backgroundImage = `url('${reader.result}')`;
    };

    let photoElement = document.getElementById("photo");

    if (!photoElement) {
      photoElement = document.createElement("div");
      photoElement.setAttribute("id", "photo");
      imageField.appendChild(photoElement);
    }
  } else {
    document.getElementById("image-input-alert").style.display = "block";
    document.getElementById("image-input-alert").innerText =
      "Only image files accepted";
    imageField.classList.remove("dragging");
    imageField.addEventListener("click", () => {
      document.getElementById("image-input-alert").style.display = "none";
    });
  }
}

export { photoUpload };
