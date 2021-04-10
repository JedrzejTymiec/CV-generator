function switchMainPageLanguage(language) {
  if (language === "polish") {
    //MAIN PAGE POLISH
    document.querySelector(".select-title").innerHTML =
      "Klon generatora CV</br>z Pracuj.pl";
    document.querySelector(
      "#new-button h5"
    ).innerHTML = `<i class="fas fa-check"></i>Stwórz nowe`;
    document.querySelector(
      "#edit-link h5"
    ).innerHTML = `<i class="fas fa-check"></i>Edytuj zapisane`;
    document.querySelector(".choose-title-container h4").innerText =
      "Wybierz szblon i kolor";
    document.querySelector("#basic div").innerText = "Podstawowy";
    document.querySelector("#simple div").innerText = "Prosty";
    document.querySelector("#executive div").innerText = "Wykonawczy";
    document.querySelector("#college div").innerText = "Studencki";
    document.querySelector("#creative div").innerText = "Kreatywny";
    document.querySelector("#professional div").innerText = "Profesjonalny";
    document.querySelector("#modern div").innerText = "Nowoczesny";
    document.querySelector("#functional div").innerText = "Funkcjonalny";
    document.querySelector(
      ".next-button h5"
    ).innerHTML = `Dalej<i class="fas fa-arrow-right"></i>`;
    document.querySelector(".footer-text").innerText = "Stworzone przez ";
  } else if (language === "english") {
    //MAIN PAGE ENGLISH
    document.querySelector(".select-title").innerHTML =
      "Pracuj.pl </br>CV generator clone";
    document.querySelector(
      "#new-button h5"
    ).innerHTML = `<i class="fas fa-check"></i>Create new`;
    document.querySelector(
      "#edit-link h5"
    ).innerHTML = `<i class="fas fa-check"></i>Edit saved`;
    document.querySelector(".choose-title-container h4").innerText =
      "Choose template & color";
    document.querySelector("#basic div").innerText = "Basic";
    document.querySelector("#simple div").innerText = "Simple";
    document.querySelector("#executive div").innerText = "Executive";
    document.querySelector("#college div").innerText = "College";
    document.querySelector("#creative div").innerText = "Creative";
    document.querySelector("#professional div").innerText = "Professional";
    document.querySelector("#modern div").innerText = "Modern";
    document.querySelector("#functional div").innerText = "Functional";
    document.querySelector(
      ".next-button h5"
    ).innerHTML = `Next<i class="fas fa-arrow-right"></i>`;
    document.querySelector(".footer-text").innerText = "Created by ";
  }
}

function switchAppPageLanguage(language, currentPage) {
  if (language === "polish") {
    //WARNING MODAL
    document.querySelector("#warning-modal h1").innerText =
      "Czy na pewno chcesz usunąć to CV?";
    document.querySelector("#warning-modal .close-modal").innerText = "Anuluj";
    document.querySelector("#delete-cv-button").innerText = "Usuń";
    //EXPERIENCE MODAL
    document.querySelector(
      "#experience-modal .modal-header h1:first-child"
    ).innerText = "Doświadczenie zawodowe - nowa pozycja";
    document.getElementById("position-input-label").innerText = "Stanowisko*";
    document.getElementById("company-input-label").innerText = "Firma*";
    document.getElementById("location-input-label").innerText = "Lokalizacja";
    document.getElementById("expstart-input-label").innerText =
      "Data rozpoczęcia*";
    document.getElementById("expend-input-label").innerText =
      "Data zakończenia*";
    document.getElementById("expcheck-label").innerText = "Ciągle pracuję";
    document.getElementById("expdescription-input-label").innerText = "Opis";
    document.querySelector(
      "#experience-modal .modal-footer .close-modal"
    ).innerText = "Anuluj";
    document.querySelector("#experience-modal .modal-footer button").innerText =
      "Zapisz";
    //EDUCATION MODAL
    document.querySelector(
      "#education-modal .modal-header h1:first-child"
    ).innerText = "Wykształcenie - nowa pozycja";
    document.getElementById("school-input-label").innerText = "Nazwa szkoły*";
    document.getElementById("specialization-input-label").innerText =
      "Kierunek";
    document.getElementById("edustart-input-label").innerText =
      "Data rozpoczęcia*";
    document.getElementById("eduend-input-label").innerText =
      "Data zakończenia*";
    document.getElementById("educheck").innerText = "Ciągle się uczę";
    document.getElementById("edudescription-input-label").innerText = "Opis";
    document.querySelector(
      "#experience-modal .modal-footer .close-modal"
    ).innerText = "Anuluj";
    document.querySelector("#experience-modal .modal-footer button").innerText =
      "Zapisz";
    //CERTIFICATION MODAL
    document.querySelector(
      "#certification-modal .modal-header h1:first-child"
    ).innerText = "Certyfikaty - nowa pozycja";
    document.getElementById("certname-label").innerText = "Nazwa*";
    document.getElementById("organizer-label").innerText = "Organizator*";
    document.getElementById("certdate-label").innerText = "Data uczestnictwa*";
    document.getElementById("cerdescription-label").innerText = "Opis";
    document.querySelector(
      "#certification-modal .modal-footer .close-modal"
    ).innerText = "Anuluj";
    document.querySelector(
      "#certification-modal .modal-footer button"
    ).innerText = "Zapisz";
    //PROJECTS MODAL
    document.querySelector(
      "#projects-modal .modal-header h1:first-child"
    ).innerText = "Projekty - nowa pozycja";
    document.getElementById("projectname-label").innerText = "Nazwa*";
    document.getElementById("prodescription-label").innerText = "Opis";
    document.querySelector(
      "#projects-modal .modal-footer .close-modal"
    ).innerText = "Anuluj";
    document.querySelector("#projects-modal .modal-footer button").innerText =
      "Zapisz";
    //APP
    document.querySelector(".header h1").innerText =
      "Klon generatora CV z Pracuj.pl";
    document.getElementById("basic-dot-label").innerText = "Podstawowe dane";
    document.getElementById("experience-dot-label").innerText = "Doświadczenie";
    document.getElementById("skills-dot-label").innerText = "Umiejętności";
    document.getElementById("download-dot-label").innerText = "Pobierz CV";
    document.querySelector(".templates-container h4:first-child").innerText =
      "Wybrany szablon";
    document.getElementById("basic").innerText = "Podstawowy";
    document.getElementById("simple").innerText = "Prosty";
    document.getElementById("executive").innerText = "Wykonawczy";
    document.getElementById("college").innerText = "Studencki";
    document.getElementById("creative").innerText = "Kreatywny";
    document.getElementById("professional").innerText = "Profesjonalny";
    document.getElementById("modern").innerText = "Nowoczesny";
    document.getElementById("functional").innerText = "Funkcjonalny";
    document.querySelector(".templates-container h4:nth-child(3)").innerText =
      "Wybrany kolor";
    document.querySelector(".skills-container .section-title").innerText =
      "UMIEJĘTNOŚCI";
    document.querySelector(".experience-container .section-title").innerText =
      "DOŚWIADCZENIE ZAWODOWE";
    document.querySelector(".education-container .section-title").innerText =
      "WYKSZTAŁCENIE";
    document.querySelector(
      ".certifications-container .section-title"
    ).innerText = "CERTYFIKATY";
    document.querySelector(".languages-container .section-title").innerText =
      "JĘZYKI";
    document.querySelector(".projects-container .section-title").innerText =
      "PROJEKTY";
    document.querySelector(".footer-container .footer-text").innerText =
      "Stworzone przez ";
    //BASIC FORM
    if (currentPage === "basic") {
      document.querySelector("#basic-data-form h1:first-child").innerText =
        "Zdjęcie";
      document.querySelector(".photo-toggle-container h4").innerText =
        "Pokaż zdjęcie w CV";
      document.querySelector(
        "#image-field .input-placeholder"
      ).innerHTML = `Upuść plik</br> lub kliknij aby przesłać`;
      document.querySelector("#basic-data-form h1:nth-child(4)").innerText =
        "Podstawowe dane";
      document.getElementById("name-input-label").innerText = "Imię*";
      document.getElementById("surname-input-label").innerText = "Nazwisko*";
      document.getElementById("proffesion-input-label").innerText = "Zawód";
      document.getElementById("about-input-label").innerText = "O sobie";
      document.querySelector(
        "#basic-data-form .save-button"
      ).innerHTML = `<i class="far fa-save"></i>Zapisz`;
      document.querySelector("#residence-form .form-title").innerText =
        "Miejsce zamieszkania";
      document.getElementById("country-input-label").innerText = "Kraj*";
      document.getElementById("city-input-label").innerText = "Miasto*";
      document.querySelector(
        "#residence-form .save-button"
      ).innerHTML = `<i class="far fa-save"></i>Zapisz`;
      document.querySelector("#contact-form .form-title").innerText =
        "Dane kotaktowe";
      document.getElementById("phone-input-label").innerText =
        "Numer telefonu*";
      document.getElementById("linkedin-input-label").innerText =
        "Link do linkedin";
      document.getElementById("github-input-label").innerText =
        "Link do github";
      document.querySelector(
        "#contact-form .save-button"
      ).innerHTML = `<i class="far fa-save"></i>Zapisz`;
      document.querySelector("#contact-form h4:last-child").innerText =
        "* Pola wymagane";
      document.querySelector(
        ".next-button"
      ).innerHTML = `Dalej<i class="fas fa-arrow-right"></i>`;
      //EXPERIENCE FORM
    } else if (currentPage === "experience") {
      document.querySelector("#form-container h1:first-child").innerText =
        "Doświadczenie zawodowe";
      document.querySelector(
        "#form-container button:nth-child(3)"
      ).innerHTML = `<i data-modal="experience" class="fas fa-plus"></i>Dodaj`;
      document.querySelector("#form-container h1:nth-child(4)").innerText =
        "Wykształcenie";
      document.querySelector(
        "#form-container button:nth-child(6)"
      ).innerHTML = `<i data-modal="experience" class="fas fa-plus"></i>Dodaj`;
      document.querySelector("#form-container h1:nth-child(7)").innerText =
        "Projekty";
      document.querySelector(
        "#form-container button:nth-child(9)"
      ).innerHTML = `<i data-modal="experience" class="fas fa-plus"></i>Dodaj`;
      document.querySelector(
        ".experience-form-footer .back"
      ).innerHTML = `<i class="fas fa-arrow-left"></i>Wróć`;
      document.querySelector(
        ".experience-form-footer a:nth-child(2) .next-button"
      ).innerHTML = `Dalej<i class="fas fa-arrow-right"></i>`;
      //SKILLS FORM
    } else if (currentPage === "skills") {
      document.querySelector("#language-form .form-title").innerText = "Języki";
      document.querySelector(
        "#language-form .form-group:nth-child(3) label"
      ).innerText = "Język";
      document.querySelector(
        "#language-form .form-group:nth-child(4) label"
      ).innerText = "Poziom";
      document.querySelector(
        "#language-form button"
      ).innerHTML = `<i class="fas fa-plus"></i>Dodaj`;
      document.querySelector("#skills-form .form-title").innerText =
        "Umiejętności";
      document.querySelector(
        "#skills-form .form-group:nth-child(3) label"
      ).innerText = "Umiejętność";
      document.querySelector(
        "#skills-form .form-group:nth-child(4) label"
      ).innerText = "Poziom";
      document.querySelector(
        "#skills-form button"
      ).innerHTML = `<i class="fas fa-plus"></i>Dodaj`;
      document.querySelector(
        "#form-container .form-title:nth-child(3)"
      ).innerText = "Certyfikaty";
      document.querySelector(
        "#form-container .open-modal"
      ).innerHTML = `<i data-modal="certification" class="fas fa-plus"></i>Dodaj`;
      document.querySelector(
        ".experience-form-footer .back"
      ).innerHTML = `<i class="fas fa-arrow-left"></i>Wróć`;
      document.querySelector(
        ".experience-form-footer a:nth-child(2) .next-button"
      ).innerHTML = `Gotowe<i class="fas fa-arrow-right"></i>`;
      //DOWNLOAD VIEW
    } else if (currentPage === "download") {
      document.querySelector(".download-wrapper h1").innerText = "Gratulacje!";
      document.querySelector(".download-wrapper h3").innerText =
        "Twoje CV jest gotowe!";
      document.querySelector(".download-wrapper h4:nth-child(3)").innerText =
        "Pobierz swoje CV w formacie PDF lub je zapisz";
      document.querySelector(".download-wrapper h4:nth-child(4)").innerText =
        "Wypełnij najpierw wymagane pola";
      document.getElementById(
        "download-button"
      ).innerHTML = `<i class="fas fa-download"></i>Pobierz`;
      document.getElementById(
        "save-cv-button"
      ).innerHTML = `<i class="far fa-save"></i>Zapisz`;
      document.querySelector(".cv-list-title").innerText = "Lista CV:";
      document.querySelector("#saved-cv-list p").innerText =
        "Brak zapisanych CV";
    }
  } else if (language === "english") {
    //WARNING MODAL
    document.querySelector("#warning-modal h1").innerText =
      "Are you sure you want to delete this CV?";
    document.querySelector("#warning-modal .close-modal").innerText = "Cancel";
    document.querySelector("#delete-cv-button").innerText = "Delete";
    //EXPERIENCE MODAL
    document.querySelector(
      "#experience-modal .modal-header h1:first-child"
    ).innerText = "Professional experience - new position";
    document.getElementById("position-input-label").innerText = "Position*";
    document.getElementById("company-input-label").innerText = "Company*";
    document.getElementById("location-input-label").innerText = "Location";
    document.getElementById("expstart-input-label").innerText = "Start date*";
    document.getElementById("expend-input-label").innerText = "End date*";
    document.getElementById("expcheck-label").innerText = "Still working";
    document.getElementById("expdescription-input-label").innerText =
      "Description";
    document.querySelector(
      "#experience-modal .modal-footer .close-modal"
    ).innerText = "Cancel";
    document.querySelector("#experience-modal .modal-footer button").innerText =
      "Save";
    //EDUCATION MODAL
    document.querySelector(
      "#education-modal .modal-header h1:first-child"
    ).innerText = "Education - new position";
    document.getElementById("school-input-label").innerText = "School name*";
    document.getElementById("specialization-input-label").innerText =
      "Specialization";
    document.getElementById("edustart-input-label").innerText = "Start date*";
    document.getElementById("eduend-input-label").innerText = "End date*";
    document.getElementById("educheck").innerText = "Still learning";
    document.getElementById("edudescription-input-label").innerText =
      "Description";
    document.querySelector(
      "#experience-modal .modal-footer .close-modal"
    ).innerText = "Cancel";
    document.querySelector("#experience-modal .modal-footer button").innerText =
      "Save";
    //CERTIFICATION MODAL
    document.querySelector(
      "#certification-modal .modal-header h1:first-child"
    ).innerText = "Certification - new position";
    document.getElementById("certname-label").innerText = "Name*";
    document.getElementById("organizer-label").innerText = "Organizer*";
    document.getElementById("certdate-label").innerText = "Participation date*";
    document.getElementById("cerdescription-label").innerText = "Description";
    document.querySelector(
      "#certification-modal .modal-footer .close-modal"
    ).innerText = "Cancel";
    document.querySelector(
      "#certification-modal .modal-footer button"
    ).innerText = "Save";
    document.querySelector(
      "#projects-modal .modal-header h1:first-child"
    ).innerText = "Projects - new position";
    document.getElementById("projectname-label").innerText = "Name*";
    document.getElementById("prodescription-label").innerText = "Description";
    document.querySelector(
      "#projects-modal .modal-footer .close-modal"
    ).innerText = "Cancel";
    document.querySelector("#projects-modal .modal-footer button").innerText =
      "Save";
    //APP
    document.querySelector(".header h1").innerText =
      "Pracuj.pl CV generator clone";
    document.getElementById("basic-dot-label").innerText = "Basic data";
    document.getElementById("experience-dot-label").innerText = "Experience";
    document.getElementById("skills-dot-label").innerText = "Skills";
    document.getElementById("download-dot-label").innerText = "Download CV";
    document.querySelector(".templates-container h4:first-child").innerText =
      "Choosen template";
    document.getElementById("basic").innerText = "Basic";
    document.getElementById("simple").innerText = "Simple";
    document.getElementById("executive").innerText = "Executive";
    document.getElementById("college").innerText = "College";
    document.getElementById("creative").innerText = "Creative";
    document.getElementById("professional").innerText = "Professional";
    document.getElementById("modern").innerText = "Modern";
    document.getElementById("functional").innerText = "Functional";
    document.querySelector(".templates-container h4:nth-child(3)").innerText =
      "Choosen color";
    document.querySelector(".skills-container .section-title").innerText =
      "SKILLS";
    document.querySelector(".experience-container .section-title").innerText =
      "WORK EXPERIENCE";
    document.querySelector(".education-container .section-title").innerText =
      "EDUCATION";
    document.querySelector(
      ".certifications-container .section-title"
    ).innerText = "CERTIFICATION";
    document.querySelector(".languages-container .section-title").innerText =
      "LANGUAGES";
    document.querySelector(".projects-container .section-title").innerText =
      "PROJECTS";
    document.querySelector(".footer-container .footer-text").innerText =
      "Created by ";
    //BASIC FORM
    if (currentPage === "basic") {
      document.querySelector("#basic-data-form h1:first-child").innerText =
        "Photo";
      document.querySelector(".photo-toggle-container h4").innerText =
        "Show photo in resume";
      document.querySelector(
        "#image-field .input-placeholder"
      ).innerHTML = `Drop file</br> or click to upload`;
      document.querySelector("#basic-data-form h1:nth-child(4)").innerText =
        "Basic data";
      document.getElementById("name-input-label").innerText = "Name*";
      document.getElementById("surname-input-label").innerText = "Surname*";
      document.getElementById("proffesion-input-label").innerText =
        "Proffesion";
      document.getElementById("about-input-label").innerText = "About yourself";
      document.querySelector(
        "#basic-data-form .save-button"
      ).innerHTML = `<i class="far fa-save"></i>Save`;
      document.querySelector("#residence-form .form-title").innerText =
        "Place of residence";
      document.getElementById("country-input-label").innerText = "Country*";
      document.getElementById("city-input-label").innerText = "City*";
      document.querySelector(
        "#residence-form .save-button"
      ).innerHTML = `<i class="far fa-save"></i>Save`;
      document.querySelector("#contact-form .form-title").innerText =
        "Contact data";
      document.getElementById("phone-input-label").innerText = "Phone number*";
      document.getElementById("linkedin-input-label").innerText =
        "Linkedin link";
      document.getElementById("github-input-label").innerText = "Github link";
      document.querySelector(
        "#contact-form .save-button"
      ).innerHTML = `<i class="far fa-save"></i>Save`;
      document.querySelector("#contact-form h4:last-child").innerText =
        "* Required fields";
      document.querySelector(
        ".next-button"
      ).innerHTML = `Next<i class="fas fa-arrow-right"></i>`;
    } else if (currentPage === "experience") {
      document.querySelector("#form-container h1:first-child").innerText =
        "Work experience";
      document.querySelector(
        "#form-container button:nth-child(3)"
      ).innerHTML = `<i data-modal="experience" class="fas fa-plus"></i>Add`;
      document.querySelector("#form-container h1:nth-child(4)").innerText =
        "Education";
      document.querySelector(
        "#form-container button:nth-child(6)"
      ).innerHTML = `<i data-modal="experience" class="fas fa-plus"></i>Add`;
      document.querySelector("#form-container h1:nth-child(7)").innerText =
        "Projects";
      document.querySelector(
        "#form-container button:nth-child(9)"
      ).innerHTML = `<i data-modal="experience" class="fas fa-plus"></i>Add`;
      document.querySelector(
        ".experience-form-footer .back"
      ).innerHTML = `<i class="fas fa-arrow-left"></i>Back`;
      document.querySelector(
        ".experience-form-footer a:nth-child(2) .next-button"
      ).innerHTML = `Next<i class="fas fa-arrow-right"></i>`;
    } else if (currentPage === "skills") {
      document.querySelector("#language-form .form-title").innerText =
        "Languages";
      document.querySelector(
        "#language-form .form-group:nth-child(3) label"
      ).innerText = "Language";
      document.querySelector(
        "#language-form .form-group:nth-child(4) label"
      ).innerText = "Level";
      document.querySelector(
        "#language-form button"
      ).innerHTML = `<i class="fas fa-plus"></i>Add`;
      document.querySelector("#skills-form .form-title").innerText = "Skills";
      document.querySelector(
        "#skills-form .form-group:nth-child(3) label"
      ).innerText = "Skill";
      document.querySelector(
        "#skills-form .form-group:nth-child(4) label"
      ).innerText = "Level";
      document.querySelector(
        "#skills-form button"
      ).innerHTML = `<i class="fas fa-plus"></i>Add`;
      document.querySelector(
        "#form-container .form-title:nth-child(3)"
      ).innerText = "Certifications";
      document.querySelector(
        "#form-container .open-modal"
      ).innerHTML = `<i data-modal="certification" class="fas fa-plus"></i>Add`;
      document.querySelector(
        ".experience-form-footer .back"
      ).innerHTML = `<i class="fas fa-arrow-left"></i>Back`;
      document.querySelector(
        ".experience-form-footer a:nth-child(2) .next-button"
      ).innerHTML = `Done<i class="fas fa-arrow-right"></i>`;
    } else if (currentPage === "download") {
      document.querySelector(".download-wrapper h1").innerText =
        "Congratulations!";
      document.querySelector(".download-wrapper h3").innerText =
        "Your CV is ready!";
      document.querySelector(".download-wrapper h4:nth-child(3)").innerText =
        "Download your CV as PDF file or save it";
      document.querySelector(".download-wrapper h4:nth-child(4)").innerText =
        "You need to fill required fields first";
      document.getElementById(
        "download-button"
      ).innerHTML = `<i class="fas fa-download"></i>Download`;
      document.getElementById(
        "save-cv-button"
      ).innerHTML = `<i class="far fa-save"></i>Save`;
      document.querySelector(".cv-list-title").innerText = "CV List:";
      document.querySelector("#saved-cv-list p").innerText = "No saved CV yet";
    }
  }
}

export { switchMainPageLanguage, switchAppPageLanguage };
