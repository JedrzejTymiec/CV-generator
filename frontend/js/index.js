import UI from "./UI.js";
import modalUI from "./modalUI.js";
import { router, navigateTo } from "./router.js";
import completeCvCRUD from "./CRUD/completeCvCRUD.js";
import validation from "./validation.js";
import {
  switchMainPageLanguage,
  switchAppPageLanguage,
} from "./switchLanguage.js";
import CRUD from "./CRUD/CRUD.js";

let templateButtons = document.getElementsByClassName("mp template-button");
let colorDots = document.getElementsByClassName("mp color-dot");
let selectButtons = document.getElementsByClassName("select-button");
let appTemplateButtons = document.getElementsByClassName("ap template-button");
let appColorDots = document.getElementsByClassName("ap color-dot");
let currentPage = window.location.href.substring(
  window.location.href.lastIndexOf("/") + 1
);
let flagButtons = document.getElementsByClassName("flag");
let polishFlag = document.querySelector(
  ".flag-buttons .flag-container:first-child .flag"
);
let britishFlag = document.querySelector(
  ".flag-buttons .flag-container:nth-child(2) .flag"
);
let orderSelects = document.getElementsByClassName("order-input");

for (let i = 0; orderSelects.length > i; i++) {
  orderSelects[i].addEventListener("change", (e) => {
    let section = e.target.id.slice(0, -6);
    UI.changeSectionOrder(e.target.value, section);
  });
}

if (currentPage !== "") {
  router();
  let language = localStorage.getItem("language");
  if (!language) {
    switchAppPageLanguage("polish");
    UI.addCurrentClass(polishFlag);
  } else {
    switchAppPageLanguage(language);
    if (language === "polish") {
      UI.addCurrentClass(polishFlag);
    } else {
      UI.addCurrentClass(britishFlag);
    }
  }
} else {
  let language = localStorage.getItem("language");
  if (!language) {
    switchMainPageLanguage("polish");
    UI.addCurrentClass(polishFlag);
  } else {
    switchMainPageLanguage(language);
    if (language === "polish") {
      UI.addCurrentClass(polishFlag);
    } else {
      UI.addCurrentClass(britishFlag);
    }
  }
}

for (let i = 0; flagButtons.length > i; i++) {
  flagButtons[i].addEventListener("click", (e) => {
    currentPage = window.location.href.substring(
      window.location.href.lastIndexOf("/") + 1
    );
    UI.addCurrentClass(e.target);
    if (currentPage !== "") {
      router();
      switchAppPageLanguage(e.target.dataset.language, currentPage);
    } else {
      switchMainPageLanguage(e.target.dataset.language);
    }
  });
}

if (currentPage === "") {
  let template = localStorage.getItem("template");
  let color = localStorage.getItem("color");

  if (template && color) {
    UI.setMpTemplate(template + color);
    UI.addCurrentClass(document.getElementById(template));
  } else {
    UI.setMpTemplate("basic0");
    UI.addCurrentClass(document.getElementById("basic"));
  }
}

// texarea auto expand

document.addEventListener(
  "input",
  (e) => {
    if (e.target.tagName.toLowerCase() !== "textarea") return;
    modalUI.autoExpandTextarea(e.target);
    modalUI.countCharacters(e.target);
  },
  false
);

//daisable enddate input after checking still working

let checkbox = document.getElementsByClassName("checkbox");
for (let i = 0; checkbox.length > i; i++) {
  checkbox[i].addEventListener("change", (e) => {
    let checkType = e.target.id.slice(0, 3);
    let input = document.getElementById(checkType + "end-input");
    if (e.target.checked) {
      input.setAttribute("disabled", "");
      input.style.color = "#a3a3a3";
    } else {
      input.removeAttribute("disabled");
      input.style.color = "#000";
    }
  });
}

for (var i = 0; templateButtons.length > i; i++) {
  templateButtons[i].addEventListener("click", (e) => {
    let templateType = e.target.id;
    let color = localStorage.getItem("color");
    if (!templateType) {
      templateType = e.target.parentNode.id;
    }
    if (!color) {
      color = e.target.parentNode.parentNode.dataset.color;
    }

    var template = templateType + color;

    UI.addCurrentClass(e.target);
    UI.setMpTemplate(template);
  });
}

for (var i = 0; colorDots.length > i; i++) {
  colorDots[i].addEventListener("click", (e) => {
    let template = e.target.id;
    let target = e.target;
    if (!template) {
      template = e.target.parentNode.id;
      target = e.target.parentNode;
    }
    UI.setTemplateColor(template);
    UI.addCurrentClass(target);
  });
}

for (var i = 0; selectButtons.length > i; i++) {
  selectButtons[i].addEventListener("click", (e) => {
    UI.addCurrentClass(e.target.closest("div"));
  });
}

for (var i = 0; appTemplateButtons.length > i; i++) {
  appTemplateButtons[i].addEventListener("click", (e) => {
    let template = e.target.id;
    UI.changeTemplate(template);
  });
}

for (var i = 0; appColorDots.length > i; i++) {
  appColorDots[i].addEventListener("click", (e) => {
    UI.changeColor(e.target.id);
  });
}

function submitForm(e, name) {
  e.preventDefault();
  let newData;
  let form = document.getElementById(`${name}-form`);
  let editId = form.dataset.id;
  if (editId !== "") {
    newData = CRUD.newData(name, editId);
    form.dataset.id = "";
  } else {
    newData = CRUD.newData(name);
  }
  let valid = validation.validateData(newData);
  if (valid) {
    let validDate = validation.dateValidation(newData);
    if (validDate) {
      CRUD.addData(name, newData);
      let currentCvId = localStorage.getItem("currentCvId");
      if (currentCvId) {
        completeCvCRUD.saveCvHandle(currentCvId);
      }
      modalUI.clearInputs(name);
      modalUI.closeModal(e.target);
    }
  }
}

// MODAL SUBMIT liteners
let experienceForm = document.getElementById("experience-form");
if (experienceForm) {
  experienceForm.addEventListener("submit", (e) => submitForm(e, "experience"));
}
let educationForm = document.getElementById("education-form");
if (educationForm) {
  educationForm.addEventListener("submit", (e) => submitForm(e, "education"));
}

let certificationForm = document.getElementById("certification-form");
if (certificationForm) {
  certificationForm.addEventListener("submit", (e) =>
    submitForm(e, "certification")
  );
}

let projectsForm = document.getElementById("projects-form");
if (projectsForm) {
  projectsForm.addEventListener("submit", (e) => submitForm(e, "projects"));
}

let deleteCvButton = document.getElementById("delete-cv-button");
if (deleteCvButton) {
  deleteCvButton.addEventListener("click", (e) => {
    completeCvCRUD.deleteCv(e.target.dataset.id);
    modalUI.closeModal(e.target);
    completeCvCRUD.readCv();
  });
}

let newButton = document.getElementById("new-button");
if (newButton) {
  UI.clearLocalStorage();
  newButton.addEventListener("click", UI.clearLocalStorage);
}

let cvPreview = document.querySelector(".cv-preview");
if (cvPreview) {
  function showMessage() {
    document.querySelector(".cv-preview").style.backgroundColor = "#d2d2d2";
    document.querySelector(".cv-preview").style.opacity = "0.7";
  }
  function hideMessage() {
    document.querySelector(".cv-preview").style.backgroundColor = "#fff";
    document.querySelector(".cv-preview").style.opacity = "1";
  }
  cvPreview.addEventListener("mouseover", showMessage);
  cvPreview.addEventListener("mouseenter", showMessage);
  cvPreview.addEventListener("mouseleave", hideMessage);

  cvPreview.addEventListener("click", (e) => {
    let modalContent = document.querySelector(".cv-preview").innerHTML;
    hideMessage();
    document.querySelector(
      "#preview-modal .modal-content .preview"
    ).innerHTML = modalContent;
    modalUI.openModal(e.target);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  //disabled order options on page refresh
  if (currentPage !== "") {
    UI.setAppTemplate();
    // UI.setOrder();
    window.addEventListener("popstate", router);
  }
  document.body.addEventListener("click", (e) => {
    if (e.target.tagName !== "BODY") {
      if (e.target.matches("[data-link]")) {
        e.preventDefault();
        navigateTo(e.target.href);
      } else if (e.target.parentNode.matches("[data-link]")) {
        e.preventDefault();
        if (e.target.matches("[data-valid]")) {
          let valid = validation.validateBasicPage();
          if (valid) {
            navigateTo(e.target.parentNode.href);
          }
        } else {
          navigateTo(e.target.parentNode.href);
        }
      } else if (e.target.parentNode.parentNode.matches("[data-link]")) {
        e.preventDefault();
        if (e.target.parentNode.matches("[data-valid]")) {
          let valid = validation.validateBasicPage();
          if (valid) {
            navigateTo(e.target.parentNode.parentNode.href);
          }
        } else {
          navigateTo(e.target.parentNode.parentNode.href);
        }
      } else if (e.target.matches("[data-expdelete]")) {
        CRUD.deleteData("experience", e.target.parentNode.dataset.id);
      } else if (e.target.matches("[data-expedit]")) {
        let jobToEdit = CRUD.findData(
          "experience",
          e.target.parentNode.dataset.id
        );
        console.log(jobToEdit);
        modalUI.openModal(e.target);
        modalUI.editExperienceInputs(
          jobToEdit.id.data,
          jobToEdit.position.data,
          jobToEdit.company.data,
          jobToEdit.expstart.data,
          jobToEdit.expend.data,
          jobToEdit.stillWorking.data,
          jobToEdit.expdescription.data
        );
      } else if (e.target.matches("[data-edudelete]")) {
        CRUD.deleteData("education", e.target.parentNode.dataset.id);
      } else if (e.target.matches("[data-eduedit]")) {
        let eduToEdit = CRUD.findData(
          "education",
          e.target.parentNode.dataset.id
        );
        modalUI.openModal(e.target);
        modalUI.editEducationInputs(
          eduToEdit.id.data,
          eduToEdit.school.data,
          eduToEdit.specialization.data,
          eduToEdit.edustart.data,
          eduToEdit.eduend.data,
          eduToEdit.stillLearning.data,
          eduToEdit.edudescription.data
        );
      } else if (e.target.matches("[data-cerdelete]")) {
        CRUD.deleteData("certification", e.target.parentNode.dataset.id);
      } else if (e.target.matches("[data-ceredit]")) {
        let cerToEdit = CRUD.findData(
          "certification",
          e.target.parentNode.dataset.id
        );
        modalUI.openModal(e.target);
        modalUI.editCertificationInputs(
          cerToEdit.id.data,
          cerToEdit.certname.data,
          cerToEdit.organizer.data,
          cerToEdit.certdate.data,
          cerToEdit.cerdescription.data
        );
      } else if (e.target.matches("[data-landelete]")) {
        CRUD.deleteData("languages", e.target.parentNode.dataset.id);
      } else if (e.target.matches("[data-skidelete]")) {
        CRUD.deleteData("skills", e.target.parentNode.dataset.id);
      } else if (e.target.matches("[data-cvdelete]")) {
        modalUI.openModal(e.target);
        document.getElementById("delete-cv-button").dataset.id =
          e.target.dataset.id;
      } else if (e.target.matches("[data-proedit]")) {
        let projectToEdit = CRUD.findData(
          "projects",
          e.target.parentNode.dataset.id
        );
        modalUI.openModal(e.target);
        modalUI.editProjectInputs(
          projectToEdit.id.data,
          projectToEdit.projectname.data,
          projectToEdit.link.data,
          projectToEdit.prodescription.data
        );
      } else if (e.target.matches("[data-prodelete]")) {
        CRUD.deleteData("projects", e.target.parentNode.dataset.id);
        if (localStorage.getItem("currentCvId")) {
          completeCvCRUD.saveCvHandle(localStorage.getItem("currentCvId"));
        }
      }
    }
  });
  let currentPage = window.location.href.substring(
    window.location.href.lastIndexOf("/") + 1
  );
});
