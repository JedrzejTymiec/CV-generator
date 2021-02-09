import { v4 as uuidv4 } from "uuid";

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
  constructor(
    id,
    educationLevel,
    school,
    spec,
    startDate,
    endDate,
    description
  ) {
    this.id = id;
    this.educationLevel = educationLevel;
    this.school = school;
    this.spec = spec;
    this.startDate = startDate;
    this.endDate = endDate;
    this.description = description;
  }
}

class Language {
  constructor(id, language, level) {
    this.id = id;
    this.language = language;
    this.level = level;
  }
}

class Certification {
  constructor(id, name, organizer, participationDate, description) {
    this.id = id;
    this.name = name;
    this.organizer = organizer;
    this.participationDate = participationDate;
    this.description = description;
  }
}

class Skill {
  constructor(id, skill, level) {
    this.id = id;
    this.skill = skill;
    this.level = level;
  }
}

class formUI {
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

  static experienceData(editId) {
    let id;
    if (editId) {
      id = editId;
    } else {
      id = uuidv4();
    }
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
    return experienceData;
  }

  static educationData(editId) {
    let id;
    if (editId) {
      id = editId;
    } else {
      id = uuidv4();
    }
    let educationLevel = document.getElementById("education-level").value;
    let school = document.getElementById("school").value;
    let spec = document.getElementById("specialization").value;
    let startDate = document.getElementById("edu-start-date").value;
    let endDate = document.getElementById("edu-end-date").value;
    let description = document.getElementById("edu-description").value;

    let educationData = new Education(
      id,
      educationLevel,
      school,
      spec,
      startDate,
      endDate,
      description
    );
    return educationData;
  }

  static languageData() {
    let id = uuidv4();
    let formLanguage = document.getElementById("language-input").value;
    let level = document.getElementById("language-level-input").value;

    let languageData = new Language(id, formLanguage, level);

    return languageData;
  }

  static certificationData(editId) {
    let id;
    if (editId) {
      id = editId;
    } else {
      id = uuidv4();
    }
    let name = document.getElementById("certification-name").value;
    let organizer = document.getElementById("organizer").value;
    let participationDate = document.getElementById("participation-date").value;
    let description = document.getElementById("cer-description").value;

    let certificationData = new Certification(
      id,
      name,
      organizer,
      participationDate,
      description
    );
    return certificationData;
  }

  static skillData() {
    let id = uuidv4();
    let skill = document.getElementById("skill-input").value;
    let level = document.getElementById("skill-level-input").value;

    let skillData = new Skill(id, skill, level);

    return skillData;
  }
}

export default formUI;
