import previewUpdate from "./previewUpdate.js";
import { v4 as uuidv4 } from "uuid";

class BasicData {
  constructor(name, surname, dateOfBirth) {
    this.name = name;
    this.surname = surname;
    this.birth = dateOfBirth;
  }
}

class Residence {
  constructor(country, city) {
    this.country = country;
    this.city = city;
  }
}

class Contact {
  constructor(phone, email) {
    this.phone = phone;
    this.email = email;
  }
}

class Experience {
  constructor(
    id,
    position,
    company,
    location,
    startDate,
    endDate,
    description
  ) {
    this.id = id;
    this.position = position;
    this.company = company;
    this.location = location;
    this.startDate = startDate;
    this.endDate = endDate;
    this.description = description;
  }
}

class Education {
  constructor(educationLevel, school, spec, startDate, endDate, description) {
    this.educationLevel = educationLevel;
    this.school = school;
    this.spec = spec;
    this.startDate = startDate;
    this.endDate = endDate;
    this.description = description;
  }
}

class Language {
  constructor(language, level) {
    this.language = language;
    this.level = level;
  }
}

class Certification {
  constructor(name, organizer, participationDate, description) {
    this.name = name;
    this.organizer = organizer;
    this.participationDate = participationDate;
    this.description = description;
  }
}

class formUI {
  static basicData() {
    let name = document.getElementById("name-input").value;
    let surname = document.getElementById("surname-input").value;
    let birth = document.getElementById("date-of-birth").value;

    let basicData = new BasicData(name, surname, birth);

    localStorage.setItem("basicData", JSON.stringify(basicData));

    previewUpdate.basicUpdate();
  }

  static residenceData() {
    let country = document.getElementById("country-input").value;
    let city = document.getElementById("city-input").value;

    let residenceData = new Residence(country, city);

    localStorage.setItem("residenceData", JSON.stringify(residenceData));

    previewUpdate.residenceUpdate();
  }

  static contactData() {
    let phone = document.getElementById("phone-input").value;
    let email = document.getElementById("email-input").value;

    let contactData = new Contact(phone, email);

    localStorage.setItem("contactData", JSON.stringify(contactData));

    previewUpdate.contactUpdate();
  }

  static experienceData() {
    let id = uuidv4();
    let position = document.getElementById("position").value;
    let company = document.getElementById("company").value;
    let location = document.getElementById("location").value;
    let startDate = document.getElementById("exp-start-date").value;
    let endDate = document.getElementById("exp-end-date").value;
    let description = document.getElementById("exp-description").value;

    let experienceData = new Experience(
      id,
      position,
      company,
      location,
      startDate,
      endDate,
      description
    );

    previewUpdate.addNewJob(experienceData);
  }

  static educationData() {
    let id = uuidv4();
    let educationLevel = document.getElementById("education-level").value;
    let school = document.getElementById("school").value;
    let spec = document.getElementById("specialization").value;
    let startDate = document.getElementById("edu-start-date").value;
    let endDate = document.getElementById("edu-end-date").value;
    let description = document.getElementById("edu-description").value;

    console.log(id);

    let educationData = new Education(
      id,
      educationLevel,
      school,
      spec,
      startDate,
      endDate,
      description
    );

    localStorage.setItem("educationData", JSON.stringify(educationData));

    previewUpdate.educationUpdate();
  }

  static languageData() {
    let formLanguage = document.getElementById("language-input").value;
    let level = document.getElementById("language-level-input").value;

    let languageData = new Language(formLanguage, level);

    localStorage.setItem("languageData", JSON.stringify(languageData));

    previewUpdate.languageUpdate();
  }

  static certificationData() {
    let name = document.getElementById("certification-name").value;
    let organizer = document.getElementById("organizer").value;
    let participationDate = document.getElementById("participation-date").value;
    let description = document.getElementById("cer-description");

    let certificationData = new Certification(
      name,
      organizer,
      participationDate,
      description
    );

    localStorage.setItem(
      "certificationData",
      JSON.stringify(certificationData)
    );

    previewUpdate.certificationUpdate();
  }
}

export default formUI;
