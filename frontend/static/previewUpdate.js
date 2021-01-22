class previewUpdate {
  static basicUpdate() {
    let basicData = JSON.parse(localStorage.getItem("basicData"));

    document.querySelector(".about h1").innerText =
      basicData.name + " " + basicData.surname;
  }

  static residenceUpdate() {
    let residenceData = JSON.parse(localStorage.getItem("residenceData"));

    document.getElementById("residence").innerText =
      residenceData.city + ", " + residenceData.country;
  }

  static contactUpdate() {
    let contantData = JSON.parse(localStorage.getItem("contactData"));

    document.getElementById("phone").innerText = contantData.phone;
    document.getElementById("email").innerText = contantData.email;
  }
}

export default previewUpdate;
