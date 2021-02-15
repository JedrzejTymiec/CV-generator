import basicDataUpdate from "./CRUD/basicDataCRUD";
import photoCRUD from "./CRUD/photoCRUD";

function photoUpload() {
  const imageField = document.getElementById("image-field");
  const imageInput = document.getElementById("image-input");

  imageField.addEventListener("click", click);

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

  imageField.addEventListener("drop", dropHandle);

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
        let newPhoto = photoCRUD.photoData(imageInput.files[0].name);
        photoCRUD.addPhoto(newPhoto);
        photoCRUD.readPhoto();
        imageField.removeEventListener("click", click);
        imageField.removeEventListener("drop", dropHandle);
        imageField.style.cursor = "auto";
        document.getElementById("save-photo-button").style.display = "none";
        document.getElementById("delete-photo-button").style.display = "flex";
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

  document
    .getElementById("delete-photo-button")
    .addEventListener("click", () => {
      photoCRUD.deletePhoto();
      photoCRUD.readPhoto();
      imageField.addEventListener("click", click);
      imageField.addEventListener("drop", dropHandle);
      document.getElementById("image-input-alert").style.display = "block";
      document.getElementById("image-input-alert").style.color = "#ff0000";
      document.getElementById("image-input-alert").innerText = "Photo deleted!";
      setTimeout(() => {
        document.getElementById("image-input-alert").style.display = "none";
      }, 3000);
    });
}

function click() {
  const imageInput = document.getElementById("image-input");
  imageInput.click();
}

function dropHandle(e) {
  const imageField = document.getElementById("image-field");
  const imageInput = document.getElementById("image-input");
  e.preventDefault();

  imageField.classList.remove("dragging");

  if (e.dataTransfer.files.length == 1) {
    imageInput.files = e.dataTransfer.files;

    updatePhoto(e.dataTransfer.files[0]);
  } else {
    document.getElementById("image-input-alert").style.display = "block";
    document.getElementById("image-input-alert").style.color = "#ff0000";
    document.getElementById("image-input-alert").innerText =
      "Only one file can be uploaded";
    imageField.classList.remove("dragging");
    imageField.addEventListener("click", () => {
      document.getElementById("image-input-alert").style.display = "none";
    });
  }
}

function updatePhoto(file) {
  const imageField = document.getElementById("image-field");

  let photoElement = document.getElementById("photo");

  if (file) {
    if (typeof file === "object") {
      if (file.type.startsWith("image/")) {
        if (document.querySelector("#image-field span")) {
          document.querySelector("#image-field span").style.display = "none";
        }

        if (!photoElement) {
          photoElement = document.createElement("div");
          photoElement.setAttribute("id", "photo");
          imageField.appendChild(photoElement);
        }

        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = () => {
          photoElement.style.backgroundImage = `url('${reader.result}')`;
        };
      } else {
        document.getElementById("image-input-alert").style.display = "block";
        document.getElementById("image-input-alert").style.color = "#ff0000";
        document.getElementById("image-input-alert").innerText =
          "Only image files accepted";
        imageField.classList.remove("dragging");
        imageField.addEventListener("click", () => {
          document.getElementById("image-input-alert").style.display = "none";
        });
      }
    } else if (typeof file === "string") {
      if (document.querySelector("#image-field span")) {
        if (document.querySelector("#image-field span")) {
          document.querySelector("#image-field span").style.display = "none";
        }
        if (!photoElement) {
          photoElement = document.createElement("div");
          photoElement.setAttribute("id", "photo");
          imageField.appendChild(photoElement);
        }
        document.getElementById(
          "photo"
        ).style.backgroundImage = `url('${file}')`;
      }
    }
  } else {
    if (photoElement) {
      photoElement.remove();
    }
    document.querySelector("#image-field span").style.display = "inline";
    document.getElementById("image-field").style.cursor = "pointer";
    document.getElementById("save-photo-button").style.display = "flex";
    document.getElementById("delete-photo-button").style.display = "none";
  }
}

export { click, dropHandle, photoUpload, updatePhoto };
