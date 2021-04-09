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
    if (currentPage === "basic") {
    } else if (currentPage === "experience") {
    } else if (currentPage === "skills") {
    } else if (currentPage === "download") {
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
    if (currentPage === "basic") {
    } else if (currentPage === "experience") {
    } else if (currentPage === "skills") {
    } else if (currentPage === "download") {
    }
  }
}

export { switchMainPageLanguage, switchAppPageLanguage };
