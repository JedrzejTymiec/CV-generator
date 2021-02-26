import photoCRUD from "./CRUD/photoCRUD";
import { toggle } from "./router.js";

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
        toggle();
        // if (
        //   document.getElementById("photo-display").dataset.toggle === "false"
        // ) {
        //   document.querySelector(".slide-track").click();
        // }
        displayAlert(true, "Photo uploaded!");
      } catch (err) {
        console.log("Error!");
        console.log(err);
      }
    });

  document
    .getElementById("delete-photo-button")
    .addEventListener("click", async () => {
      let photoData = JSON.parse(localStorage.getItem("photoData"));
      let body = new FormData();

      body.append("name", photoData.name);
      try {
        let res = await fetch("/delete", {
          method: "DELETE",
          body: body,
        });
        photoCRUD.deletePhoto();
        photoCRUD.readPhoto();
        imageField.addEventListener("click", click);
        imageField.addEventListener("drop", dropHandle);
        imageInput.value = "";
        console.log(imageInput.files);
        displayAlert(false, "Photo deleted!");
      } catch (err) {
        console.log("Error!");
        console.log(err);
      }
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
    displayAlert(false, "Only one file can be uploaded");
    imageField.classList.remove("dragging");
  }
}

function displayAlert(type, text) {
  let color;
  if (type) {
    color = "#54AD67";
  } else {
    color = "#ff0000";
  }
  document.getElementById("image-input-alert").style.color = color;
  document.getElementById("image-input-alert").style.display = "block";
  document.getElementById("image-input-alert").innerText = `${text}`;
  setTimeout(() => {
    document.getElementById("image-input-alert").style.display = "none";
  }, 3000);
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
        displayAlert(false, "Only image files accepted");
        imageField.classList.remove("dragging");
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
    console.log("else");
    if (photoElement) {
      photoElement.remove();
    }
    if (imageField) {
      document.querySelector("#image-field span").style.display = "inline";
      document.getElementById("image-field").style.cursor = "pointer";
      document.getElementById("save-photo-button").style.display = "flex";
      document.getElementById("delete-photo-button").style.display = "none";
    }
    document.querySelector(".photo-container img").src =
      "../pictures/default-profile-icon-16.jpg";
  }
}

export { click, dropHandle, photoUpload, updatePhoto };
