class basicData {
  constructor(name, surname, dateOfBirth) {
    this.name = name;
    this.surname = surname;
    this.birth = dateOfBirth;
  }
}

class residence {
  constructor(country, city) {
    this.country = country;
    this.city = city;
  }
}

class contact {
  constructor(phone, email) {
    this.phone = phone;
    this.email = email;
  }
}

class experience {
  constructor(position, company, location, startDate, endDate, description) {
    this.position = position;
    this.company = company;
    this.location = location;
    this.startDate = startDate;
    this.endDate = endDate;
    this.description = description;
  }
}

class education {
  constructor(educationLevel, school, spec, startDate, endDate, description) {
    this.educationLevel = educationLevel;
    this.school = school;
    this.spec = spec;
    this.startDate = startDate;
    this.endDate = endDate;
    this.description = description;
  }
}

class language {
  constructor(language, level) {
    this.language = language;
    this.level = level;
  }
}

class certification {
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

    let person = new basicData(name, surname, birth);
    console.log(person);
  }

  static residenceData() {
    let country = document.getElementById("country-input").value;
    let city = document.getElementById("city-input").value;

    let personsResidence = new residence(country, city);

    console.log(personsResidence);
  }

  static contactData() {
    let phone = document.getElementById("phone-input").value;
    let email = document.getElementById("email-input").value;

    let contactData = new contact(phone, email);

    console.log(contactData);
  }

  static experienceData() {
    let position = document.getElementById("position").value;
    let company = document.getElementById("company").value;
    let location = document.getElementById("location").value;
    let startDate = document.getElementById("exp-start-date").value;
    let endDate = document.getElementById("exp-end-date").value;
    let description = document.getElementById("exp-description").value;

    let experienceData = new experience(
      position,
      company,
      location,
      startDate,
      endDate,
      description
    );

    console.log(experienceData);
  }

  static educationData() {
    let educationLevel = document.getElementById("education-level").value;
    let school = document.getElementById("school").value;
    let spec = document.getElementById("specialization").value;
    let startDate = document.getElementById("edu-start-date").value;
    let endDate = document.getElementById("edu-end-date").value;
    let description = document.getElementById("edu-description").value;

    let educationData = new education(
      educationLevel,
      school,
      spec,
      startDate,
      endDate,
      description
    );

    console.log(educationData);
  }

  static languageData() {
    let formLanguage = document.getElementById("language-input").value;
    let level = document.getElementById("language-level-input").value;

    let languageData = new language(formLanguage, level);

    console.log(languageData);
  }

  static certificationData() {
    let name = document.getElementById("certification-name").value;
    let organizer = document.getElementById("organizer").value;
    let participationDate = document.getElementById("participation-date").value;
    let description = document.getElementById("cer-description");

    let certificationData = new certification(
      name,
      organizer,
      participationDate,
      description
    );

    console.log(certificationData);
  }
}

export default formUI;
