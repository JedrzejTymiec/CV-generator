import {
  englishCountriesList,
  polishCountriesList,
  englishLanguagesList,
  polishLanguagesList,
  languageLevelsPl,
  languageLevelsEn,
} from "./listOfCoutries";
import UI from "./UI.js";

function switchMainPageLanguage(language) {
  localStorage.setItem("language", language);
  let polish;
  if (language === "polish") {
    polish = true;
  } else {
    polish = false;
  }
  //MAIN PAGE POLISH
  document.querySelector(".select-title").innerText = `${
    polish ? "Generator CV" : "CV Generator"
  }`;
  document.querySelector(
    "#new-button h5"
  ).innerHTML = `<i class="fas fa-check"></i>${
    polish ? "Stwórz nowe" : "Create New"
  }`;
  document.querySelector(
    "#edit-link h5"
  ).innerHTML = `<i class="fas fa-check"></i>${
    polish ? "Edytuj zapisane" : "Edit saved"
  }`;
  document.querySelector(".choose-title-container h4").innerText = `${
    polish ? "Wybierz szblon i kolor" : "Choose template & color"
  }`;
  document.querySelector("#basic div").innerText = `${
    polish ? "Podstawowy" : "Basic"
  }`;
  document.querySelector("#simple div").innerText = `${
    polish ? "Prosty" : "Simple"
  }`;
  document.querySelector("#executive div").innerText = `${
    polish ? "Wykonawczy" : "Executive"
  }`;
  document.querySelector("#college div").innerText = `${
    polish ? "Studencki" : "College"
  }`;
  document.querySelector("#creative div").innerText = `${
    polish ? "Kreatywny" : "Creative"
  }`;
  document.querySelector("#professional div").innerText = `${
    polish ? "Profesjonalny" : "Professional"
  }`;
  document.querySelector("#modern div").innerText = `${
    polish ? "Nowoczesny" : "Modern"
  }`;
  document.querySelector("#functional div").innerText = `${
    polish ? "Funkcjonalny" : "Functional"
  }`;
  document.querySelector(".next-button h5").innerHTML = `${
    polish ? "Dalej" : "Next"
  }<i class="fas fa-arrow-right"></i>`;
  document.querySelector(".footer-text").innerText = `${
    polish ? "Stworzone przez " : "Created by "
  }`;
}

function switchAppPageLanguage(language, currentPage) {
  localStorage.setItem("language", language);
  let polish;
  if (language === "polish") {
    polish = true;
  } else {
    polish = false;
  }
  //WARNING MODAL
  document.querySelector("#warning-modal h1").innerText = `${
    polish
      ? "Czy na pewno chcesz usunąć to CV?"
      : "Are you sure you want to delete this CV?"
  }`;
  document.querySelector("#warning-modal .close-modal").innerText = `${
    polish ? "Anuluj" : "Cancel"
  }`;
  document.querySelector("#delete-cv-button").innerText = `${
    polish ? "Usuń" : "Delete"
  }`;
  //EXPERIENCE MODAL
  document.querySelector(
    "#experience-modal .modal-header h1:first-child"
  ).innerText = `${
    polish
      ? "Doświadczenie zawodowe - nowa pozycja"
      : "Professional experience - new position"
  }`;
  document.getElementById("position-input-label").innerText = `${
    polish ? "Stanowisko*" : "Position*"
  }`;
  document.getElementById("company-input-label").innerText = `${
    polish ? "Firma*" : "Company*"
  }`;
  document.getElementById("expstart-input-label").innerText = `${
    polish ? "Data rozpoczęcia*" : "Start date*"
  }`;
  document.getElementById("expend-input-label").innerText = `${
    polish ? "Data zakończenia*" : "End date*"
  }`;
  document.getElementById("expcheck-label").innerText = `${
    polish ? "Ciągle pracuję" : "Still working"
  }`;
  document.getElementById("expdescription-input-label").innerText = `${
    polish ? "Opis" : "Description"
  }`;
  document.querySelector(
    "#experience-modal .modal-footer .close-modal"
  ).innerText = `${polish ? "Anuluj" : "Cancel"}`;
  document.querySelector(
    "#experience-modal .modal-footer button"
  ).innerText = `${polish ? "Zapisz" : "Save"}`;
  //EDUCATION MODAL
  document.querySelector(
    "#education-modal .modal-header h1:first-child"
  ).innerText = `${
    polish ? "Wykształcenie - nowa pozycja" : "Education - new position"
  }`;
  document.getElementById("school-input-label").innerText = `${
    polish ? "Nazwa szkoły*" : "School name*"
  }`;
  document.getElementById("specialization-input-label").innerText = `${
    polish ? "Kierunek" : "Specialization"
  }`;
  document.getElementById("edustart-input-label").innerText = `${
    polish ? "Data rozpoczęcia*" : "Start date*"
  }`;
  document.getElementById("eduend-input-label").innerText = `${
    polish ? "Data zakończenia*" : "End date*"
  }`;
  document.getElementById("educheck").innerText = `${
    polish ? "Ciągle się uczę" : "Still learning"
  }`;
  document.getElementById("edudescription-input-label").innerText = `${
    polish ? "Opis" : "Description"
  }`;
  document.querySelector(
    "#experience-modal .modal-footer .close-modal"
  ).innerText = `${polish ? "Anuluj" : "Cancel"}`;
  document.querySelector(
    "#experience-modal .modal-footer button"
  ).innerText = `${polish ? "Zapisz" : "Save"}`;
  //CERTIFICATION MODAL
  document.querySelector(
    "#certification-modal .modal-header h1:first-child"
  ).innerText = `${
    polish ? "Certyfikaty - nowa pozycja" : "Certification - new position"
  }`;
  document.getElementById("certname-label").innerText = `${
    polish ? "Nazwa*" : "Name*"
  }`;
  document.getElementById("organizer-label").innerText = `${
    polish ? "Organizator*" : "Organizer*"
  }`;
  document.getElementById("certdate-label").innerText = `${
    polish ? "Data uczestnictwa*" : "Participation date*"
  }`;
  document.getElementById("cerdescription-label").innerText = `${
    polish ? "Opis" : "Description"
  }`;
  document.querySelector(
    "#certification-modal .modal-footer .close-modal"
  ).innerText = `${polish ? "Anuluj" : "Cancel"}`;
  document.querySelector(
    "#certification-modal .modal-footer button"
  ).innerText = `${polish ? "Zapisz" : "Save"}`;
  //PROJECTS MODAL
  document.querySelector(
    "#projects-modal .modal-header h1:first-child"
  ).innerText = `${
    polish ? "Projekty - nowa pozycja" : "Projects - new position"
  }`;
  document.getElementById("projectname-label").innerText = `${
    polish ? "Nazwa*" : "Name*"
  }`;
  document.getElementById("prodescription-label").innerText = `${
    polish ? "Opis" : "Description"
  }`;
  document.querySelector(
    "#projects-modal .modal-footer .close-modal"
  ).innerText = `${polish ? "Anuluj" : "Cancel"}`;
  document.querySelector("#projects-modal .modal-footer button").innerText = `${
    polish ? "Zapisz" : "Save"
  }`;
  //APP
  document.querySelector(".header-text").innerText = `${
    polish ? "Generator CV" : "CV generator"
  }`;
  document.getElementById("basic-dot-label").innerText = `${
    polish ? "Podstawowe dane" : "Basic data"
  }`;
  document.getElementById("experience-dot-label").innerText = `${
    polish ? "Doświadczenie" : "Experience"
  }`;
  document.getElementById("skills-dot-label").innerText = `${
    polish ? "Umiejętności" : "Skills"
  }`;
  document.getElementById("download-dot-label").innerText = `${
    polish ? "Pobierz CV" : "Download CV"
  }`;
  document.querySelector(".templates-container h4:first-child").innerText = `${
    polish ? "Wybrany szablon" : "Choosen template"
  }`;
  document.getElementById("basic").innerText = `${
    polish ? "Podstawowy" : "Basic"
  }`;
  document.getElementById("simple").innerText = `${
    polish ? "Prosty" : "Simple"
  }`;
  document.getElementById("executive").innerText = `${
    polish ? "Wykonawczy" : "Executive"
  }`;
  document.getElementById("college").innerText = `${
    polish ? "Studencki" : "College"
  }`;
  document.getElementById("creative").innerText = `${
    polish ? "Kreatywny" : "Creative"
  }`;
  document.getElementById("professional").innerText = `${
    polish ? "Profesjonalny" : "Professional"
  }`;
  document.getElementById("modern").innerText = `${
    polish ? "Nowoczesny" : "Modern"
  }`;
  document.getElementById("functional").innerText = `${
    polish ? "Funkcjonalny" : "Functional"
  }`;
  document.querySelector(".templates-container h4:nth-child(3)").innerText = `${
    polish ? "Wybrany kolor" : "Choosen color"
  }`;
  document.querySelector(".templates-container h4:nth-child(5)").innerText = `${
    polish ? "Kolejność sekcji CV" : "Order of CV sections"
  }`;
  document.querySelector(".order-list li:first-child span").innerText = `${
    polish ? "Doświadczenie" : "Experience"
  }`;
  document.querySelector(".order-list li:nth-child(2) span").innerText = `${
    polish ? "Wykształcenie" : "Education"
  }`;
  document.querySelector(".order-list li:nth-child(3) span").innerText = `${
    polish ? "Certyfikaty" : "Certifications"
  }`;
  document.querySelector(".order-list li:nth-child(4) span").innerText = `${
    polish ? "Projekty" : "Projects"
  }`;
  document.querySelector(".order-list li:nth-child(5) span").innerText = `${
    polish ? "Języki" : "Languages"
  }`;
  document.querySelector(".order-list li:nth-child(6) span").innerText = `${
    polish ? "Umiejętności" : "Skills"
  }`;
  document.querySelector(".skills-container .section-title").innerText = `${
    polish ? "UMIEJĘTNOŚCI" : "SKILLS"
  }`;
  document.querySelector(".experience-container .section-title").innerText = `${
    polish ? "DOŚWIADCZENIE ZAWODOWE" : "WORK EXPERIENCE"
  }`;
  document.querySelector(".education-container .section-title").innerText = `${
    polish ? "WYKSZTAŁCENIE" : "EDUCATION"
  }`;
  document.querySelector(
    ".certification-container .section-title"
  ).innerText = `${polish ? "CERTYFIKATY" : "CERTIFICATIONS"}`;
  document.querySelector(".languages-container .section-title").innerText = `${
    polish ? "JĘZYKI" : "LANGUAGES"
  }`;
  document.querySelector(".projects-container .section-title").innerText = `${
    polish ? "PROJEKTY" : "PROJECTS"
  }`;
  document.querySelector(".footer-container .footer-text").innerText = `${
    polish ? "Stworzone przez " : "Created by "
  }`;
  //BASIC FORM
  if (currentPage === "basic") {
    document.querySelector("#basic-data-form h1:first-child").innerText = `${
      polish ? "Zdjęcie" : "Photo"
    }`;
    document.querySelector(".photo-toggle-container h4").innerText = `${
      polish ? "Pokaż zdjęcie w CV" : "Show photo in resume"
    }`;
    document.querySelector("#image-field .input-placeholder").innerHTML = `${
      polish
        ? `Upuść plik</br> lub kliknij aby przesłać`
        : `Drop file</br> or click to upload`
    }`;
    document.querySelector("#basic-data-form h1:nth-child(4)").innerText = `${
      polish ? "Podstawowe dane" : "Basic data"
    }`;
    document.getElementById("name-input-label").innerText = `${
      polish ? "Imię*" : "Name*"
    }`;
    document.getElementById("surname-input-label").innerText = `${
      polish ? "Nazwisko*" : "Surname*"
    }`;
    document.getElementById("proffesion-input-label").innerText = `${
      polish ? "Zawód" : "Proffesion"
    }`;
    document.getElementById("about-input-label").innerText = `${
      polish ? "O sobie" : "About yourself"
    }`;
    document.querySelector(
      "#basic-data-form .save-button"
    ).innerHTML = `<i class="far fa-save"></i>${polish ? "Zapisz" : "Save"}`;
    document.querySelector("#residence-form .form-title").innerText = `${
      polish ? "Miejsce zamieszkania" : "Place of residence"
    }`;
    document.getElementById("country-input-label").innerText = `${
      polish ? "Kraj*" : "Country*"
    }`;
    document.getElementById("city-input-label").innerText = `${
      polish ? "Miasto*" : "City*"
    }`;
    document.querySelector(
      "#residence-form .save-button"
    ).innerHTML = `<i class="far fa-save"></i>${polish ? "Zapisz" : "Save"}`;
    document.querySelector("#contact-form .form-title").innerText = `${
      polish ? "Dane kotaktowe" : "Contact data"
    }`;
    document.getElementById("phone-input-label").innerText = `${
      polish ? "Numer telefonu*" : "Phone number*"
    }`;
    document.getElementById("linkedin-input-label").innerText = `${
      polish ? "Link do linkedin" : "Linkedin link"
    }`;
    document.getElementById("github-input-label").innerText = `${
      polish ? "Link do github" : "Github link"
    }`;
    document.querySelector(
      "#contact-form .save-button"
    ).innerHTML = `<i class="far fa-save"></i>${polish ? "Zapisz" : "Save"}`;
    document.querySelector("#contact-form h4:last-child").innerText = `${
      polish ? "* Pola wymagane" : "* Required fields"
    }`;
    document.querySelector(".next-button").innerHTML = `${
      polish ? "Dalej" : "Next"
    }<i class="fas fa-arrow-right"></i>`;
    document.getElementById("country-input").innerHTML = `${
      polish ? polishCountriesList : englishCountriesList
    }
      `;
    //EXPERIENCE FORM
  } else if (currentPage === "experience") {
    document.querySelector("#form-container h1:first-child").innerText = `${
      polish ? "Doświadczenie zawodowe" : "Work experience"
    }`;
    document.querySelector(
      "#form-container button:nth-child(3)"
    ).innerHTML = `<i data-modal="experience" class="fas fa-plus"></i>${
      polish ? "Dodaj" : "Add"
    }`;
    document.querySelector("#form-container h1:nth-child(4)").innerText = `${
      polish ? "Wykształcenie" : "Education"
    }`;
    document.querySelector(
      "#form-container button:nth-child(6)"
    ).innerHTML = `<i data-modal="experience" class="fas fa-plus"></i>${
      polish ? "Dodaj" : "Add"
    }`;
    document.querySelector("#form-container h1:nth-child(7)").innerText = `${
      polish ? "Projekty" : "Projects"
    }`;
    document.querySelector(
      "#form-container button:nth-child(9)"
    ).innerHTML = `<i data-modal="experience" class="fas fa-plus"></i>${
      polish ? "Dodaj" : "Add"
    }`;
    document.querySelector(
      ".experience-form-footer .back"
    ).innerHTML = `<i class="fas fa-arrow-left"></i>${
      polish ? "Wróć" : "Back"
    }`;
    document.querySelector(
      ".experience-form-footer a:nth-child(2) .next-button"
    ).innerHTML = `${
      polish ? "Dalej" : "Next"
    }<i class="fas fa-arrow-right"></i>`;
    //SKILLS FORM
  } else if (currentPage === "skills") {
    document.querySelector("#language-form .form-title").innerText = `${
      polish ? "Języki" : "Languages"
    }`;
    document.querySelector(
      "#language-form .form-group:nth-child(3) label"
    ).innerText = `${polish ? "Język" : "Language"}`;
    document.querySelector(
      "#language-form .form-group:nth-child(4) label"
    ).innerText = `${polish ? "Poziom" : "Level"}`;
    document.querySelector(
      "#language-form button"
    ).innerHTML = `<i class="fas fa-plus"></i>Dodaj`;
    document.querySelector("#skills-form .form-title").innerText = `${
      polish ? "Umiejętności" : "Skills"
    }`;
    document.querySelector(
      "#skills-form .form-group:nth-child(3) label"
    ).innerText = `${polish ? "Umiejętność" : "Skill"}`;
    document.querySelector(
      "#skills-form .form-group:nth-child(4) label"
    ).innerText = `${polish ? "Poziom" : "Level"}`;
    document.querySelector(
      "#skills-form button"
    ).innerHTML = `<i class="fas fa-plus"></i>${polish ? "Dodaj" : "Add"}`;
    document.querySelector(
      "#form-container .form-title:nth-child(3)"
    ).innerText = `${polish ? "Certyfikaty" : "Certifications"}`;
    document.querySelector(
      "#form-container .open-modal"
    ).innerHTML = `<i data-modal="certification" class="fas fa-plus"></i>${
      polish ? "Dodaj" : "Add"
    }`;
    document.querySelector(
      ".experience-form-footer .back"
    ).innerHTML = `<i class="fas fa-arrow-left"></i>${
      polish ? "Wróć" : "Back"
    }`;
    document.querySelector(
      ".experience-form-footer a:nth-child(2) .next-button"
    ).innerHTML = `${
      polish ? "Gotowe" : "Done"
    }<i class="fas fa-arrow-right"></i>`;
    document.getElementById("language-input").innerHTML = `${
      polish ? polishLanguagesList : englishLanguagesList
    }
      `;
    document.getElementById("language-level-input").innerHTML = `${
      polish ? languageLevelsPl : languageLevelsEn
    }`;
    //DOWNLOAD VIEW
  } else if (currentPage === "download") {
    document.querySelector(".download-wrapper h1").innerText = `${
      polish ? "Gratulacje!" : "Congratulations!"
    }`;
    document.querySelector(".download-wrapper h3").innerText = `${
      polish ? "Twoje CV jest gotowe!" : "Your CV is ready!"
    }`;
    document.querySelector(".download-wrapper h4:nth-child(3)").innerText = `${
      polish
        ? "Pobierz swoje CV w formacie PDF lub je zapisz"
        : "Download your CV as PDF file or save it"
    }`;
    document.querySelector(".download-wrapper h4:nth-child(4)").innerText = `${
      polish
        ? "Wypełnij najpierw wymagane pola"
        : "You need to fill required fields first"
    }`;
    document.getElementById(
      "download-button"
    ).innerHTML = `<i class="fas fa-download"></i>${
      polish ? "Pobierz" : "Download"
    }`;
    document.getElementById(
      "save-cv-button"
    ).innerHTML = `<i class="far fa-save"></i>${polish ? "Zapisz" : "Save"}`;
    document.querySelector(".cv-list-title").innerText = `${
      polish ? "Lista CV:" : "CV List:"
    }`;
    document.querySelector("#saved-cv-list p").innerText = `${
      polish ? "Brak zapisanych CV" : "No saved CVs yet"
    }`;
  }
}

export { switchMainPageLanguage, switchAppPageLanguage };
