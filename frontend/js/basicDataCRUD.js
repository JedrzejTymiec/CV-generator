class basicDataUpdate {
  static readBasicData() {
    let basicData = JSON.parse(localStorage.getItem("basicData"));
    let currentPage = window.location.href.substring(
      window.location.href.lastIndexOf("/") + 1
    );

    if (basicData && currentPage === "basic") {
      document.getElementById("name-input").value = basicData.name;
      document.getElementById("surname-input").value = basicData.surname;
      document.getElementById("proffesion-input").value = basicData.proffesion;
      document.getElementById("about-input").value = basicData.about;
    }
    if (basicData) {
      document.getElementById("about").innerText = basicData.about;
      document.querySelector(".about h1").innerText =
        basicData.name + " " + basicData.surname;
      document.getElementById("proffesion").innerText = basicData.proffesion;
    }
  }

  static readResidenceData() {
    let residenceData = JSON.parse(localStorage.getItem("residenceData"));
    let currentPage = window.location.href.substring(
      window.location.href.lastIndexOf("/") + 1
    );

    if (residenceData && currentPage === "basic") {
      document.getElementById("country-input").value = residenceData.country;
      document.getElementById("city-input").value = residenceData.city;
    }
    if (residenceData) {
      document.getElementById("residence").innerText =
        residenceData.city + ", " + residenceData.country;
    }
  }

  static readContactData() {
    let contactData = JSON.parse(localStorage.getItem("contactData"));
    let currentPage = window.location.href.substring(
      window.location.href.lastIndexOf("/") + 1
    );

    if (contactData && currentPage === "basic") {
      document.getElementById("phone-input").value = contactData.phone;
      document.getElementById("email-input").value = contactData.email;
      document.getElementById("linkedin-input").value = contactData.linkedin;
      document.getElementById("github-input").value = contactData.github;
    }
    if (contactData) {
      document.getElementById("phone").innerText = contactData.phone;
      document.getElementById("email").innerText = contactData.email;
      document.getElementById("linkedin").innerText = contactData.linkedin;
      document.getElementById("github").innerText = contactData.github;
    }
  }

  static addBasicData(data) {
    let basicData = JSON.parse(localStorage.getItem("basicData"));

    basicData.name = data.name;
    basicData.surname = data.surname;
    basicData.proffesion = data.proffesion;
    basicData.about = data.about;

    localStorage.setItem("basicData", JSON.stringify(basicData));

    this.readBasicData();
  }

  static addResidenceData(data) {
    let residenceData = JSON.parse(localStorage.getItem("residenceData"));

    residenceData.country = data.country;
    residenceData.city = data.city;

    localStorage.setItem("residenceData", JSON.stringify(residenceData));

    this.readResidenceData();
  }

  static addContactData(data) {
    let contactData = JSON.parse(localStorage.getItem("contactData"));

    contactData.phone = data.phone;
    contactData.email = data.email;
    contactData.linkedin = data.linkedin;
    contactData.github = data.github;

    localStorage.setItem("contactData", JSON.stringify(contactData));

    this.readContactData();
  }
}

export default basicDataUpdate;
