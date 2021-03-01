import { click, dropHandle, updatePhoto } from "../photoUpload.js";

class PhotoData {
  constructor(showPhoto, name, path) {
    this.showPhoto = showPhoto;
    this.name = name;
    this.path = path;
  }
}

class photoCRUD {
  static photoData(data) {
    let showPhoto = "true";
    let name = data;
    let path = "../pictures/" + name;

    let photoData = new PhotoData(showPhoto, name, path);

    return photoData;
  }

  static readPhoto() {
    let photoData = JSON.parse(localStorage.getItem("photoData"));
    if (photoData) {
      updatePhoto(photoData.path);
      console.log(photoData.showPhoto);
      if (photoData.showPhoto === "true") {
        document.querySelector(".profile-photo").style.display = "block";
      } else {
        document.querySelector(".profile-photo").style.display = "none";
      }
      if (document.getElementById("image-field")) {
        document.getElementById("photo-display").dataset.toggle =
          photoData.showPhoto;
        document.getElementById("image-field").style.cursor = "auto";
        document.getElementById("save-photo-button").style.display = "none";
        document.getElementById("delete-photo-button").style.display = "flex";
        document
          .getElementById("image-field")
          .removeEventListener("click", click);
        document
          .getElementById("image-field")
          .removeEventListener("drop", dropHandle);
      }
      document.querySelector(".photo-container .profile-photo").src =
        photoData.path;
    } else {
      updatePhoto();
    }
  }

  static deletePhoto() {
    localStorage.removeItem("photoData");
  }

  static addPhoto(data) {
    localStorage.setItem("photoData", JSON.stringify(data));
  }
}

export default photoCRUD;
