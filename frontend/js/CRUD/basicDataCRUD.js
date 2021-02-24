class BasicData {
  constructor(name, surname, proffesion, about) {
    this.name = name;
    this.surname = surname;
    this.proffesion = proffesion;
    this.about = about;
  }
}

class Residence {
  constructor(country, city) {
    this.country = country;
    this.city = city;
  }
}

class Contact {
  constructor(phone, email, linkedin, github) {
    this.phone = phone;
    this.email = email;
    this.linkedin = linkedin;
    this.github = github;
  }
}

class basicDataUpdate {
  static basicData() {
    let name = document.getElementById("name-input").value;
    let surname = document.getElementById("surname-input").value;
    let proffesion = document.getElementById("proffesion-input").value;
    let about = document.getElementById("about-input").value;

    let basicData = new BasicData(name, surname, proffesion, about);

    return basicData;
  }

  static residenceData() {
    let country = document.getElementById("country-input").value;
    let city = document.getElementById("city-input").value;

    let residenceData = new Residence(country, city);

    return residenceData;
  }

  static contactData() {
    let phone = document.getElementById("phone-input").value;
    let email = document.getElementById("email-input").value;
    let linkedin = document.getElementById("linkedin-input").value;
    let github = document.getElementById("github-input").value;

    let contactData = new Contact(phone, email, linkedin, github);

    return contactData;
  }

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
      document.getElementById("linkedin").parentNode.href =
        "https://www." + contactData.linkedin;
      document.getElementById("github").innerText = contactData.github;
      document.getElementById("github").parentNode.href =
        "https://www." + contactData.github;
    }
  }

  static addBasicData(data) {
    localStorage.setItem("basicData", JSON.stringify(data));

    this.readBasicData();
  }

  static addResidenceData(data) {
    localStorage.setItem("residenceData", JSON.stringify(data));

    this.readResidenceData();
  }

  static addContactData(data) {
    localStorage.setItem("contactData", JSON.stringify(data));

    this.readContactData();
  }
}

export default basicDataUpdate;
