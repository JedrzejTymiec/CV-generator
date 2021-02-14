class photo {
  static addListeners() {
    let imageField = document.getElementById("image-field");
    let imageInput = document.getElementById("image-input");
    let fileName;

    [
      "drag",
      "dragstart",
      "dragend",
      "dragover",
      "dragenter",
      "dragleave",
      "drop",
    ].forEach((dragEvent) => {
      imageField.addEventListener(dragEvent, preventDragDefault);
    });

    ["dragover", "dragenter"].forEach((dragEvent) => {
      imageField.addEventListener(dragEvent, () => {
        imageField.classList.add("dragging");
      });
    });

    ["dragleave", "dragend", "drop"].forEach((dragEvent) => {
      imageField.addEventListener(dragEvent, () => {
        imageField.classList.remove("dragging");
      });
    });

    document.getElementById("image-input").onchange = (e) => {
      let file = e.target.files[0];

      if (checkFileProperties(file)) {
        handleUploadedFile(file);
      }
    };

    function preventDragDefault(e) {
      e.preventDefault();
      e.stopPropagation();
    }

    function checkFileProperties(file) {
      //   theErrorMessage.classList.add("hide");
      //   theSuccessMessage.classList.add("hide");

      if (file.type !== "image/png" && file.type !== "image/jpeg") {
        console.log("File type mismatch");
        // theErrorMessage.innerHTML = "File type should be png or jpg/jpeg...";
        // theErrorMessage.classList.remove("hide");
        return false;
      }

      if (file.size > 500000) {
        console.log("File too large");
        // theErrorMessage.innerHTML =
        //  "File too large, cannot be more than 500KB...";
        // theErrorMessage.classList.remove("hide");
        return false;
      }

      return true;
    }

    const handleUploadedFile = (file) => {
      fileName = file.name;
      clearImage();
      let img = document.createElement("img");
      img.setAttribute("id", "form-photo");
      img.file = file;
      imageField.appendChild(img);

      let reader = new FileReader();
      reader.onload = ((img) => {
        return (e) => {
          img.src = e.target.result;
        };
      })(img);
      reader.readAsDataURL(file);
    };

    const clearImage = (e) => {
      if (e) {
        e.preventDefault();
      }

      let img = document.getElementById("form-photo");

      if (img) {
        imageField.removeChild(img);
        imageInput.value = null;
      }
    };

    document
      .getElementById("save-photo-button")
      .addEventListener("click", () => {
        let img = document.getElementById("form-photo");
        let imgI = document.getElementById("image-input");
        let body = new FormData();

        body.append("file", imgI.files[0]);
        body.append("name", "name");

        console.log(body);

        fetch("/upload", {
          method: "POST",
          body: body,
        })
          .then((res) => {
            res.json();
          })
          .then((data) => {
            console.log(data);
          });
      });
  }
}

export default photo;
