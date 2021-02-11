import mainPageUI from "./mainPageUI.js";
import appUI from "./appUI.js";
import modalUI from "./modalUI.js";
import { router, navigateTo } from "./router.js";
import experienceCRUD from "./experienceCRUD.js";
import educationCRUD from "./educationCRUD.js";
import certificationCRUD from "./certificationCRUD.js";
import langSkillCRUD from "./languageSkillsCRUD.js";
import completeCvCRUD from "./completeCvCRUD.js";

appUI.setTemplate();

let templateButtons = document.getElementsByClassName("mp template-button");
let colorDots = document.getElementsByClassName("mp color-dot");
let selectButtons = document.getElementsByClassName("select-button");
let appTemplateButtons = document.getElementsByClassName("ap template-button");
let appColorDots = document.getElementsByClassName("ap color-dot");

// texarea auto expand

document.addEventListener(
  "input",
  (e) => {
    if (e.target.tagName.toLowerCase() !== "textarea") return;
    modalUI.autoExpandTextarea(e.target);
  },
  false
);

for (var i = 0; templateButtons.length > i; i++) {
  templateButtons[i].addEventListener("click", (e) => {
    let templateType = e.target.id;
    let color = e.target.parentNode.dataset.color;
    if (!templateType) {
      templateType = e.target.parentNode.id;
    }
    if (!color) {
      color = e.target.parentNode.parentNode.dataset.color;
    }

    var template = templateType + color;

    for (var i = 0; templateButtons.length > i; i++) {
      templateButtons[i].className = "mp template-button";
    }
    mainPageUI.setTemplate(template, templateType);
  });
}

for (var i = 0; colorDots.length > i; i++) {
  colorDots[i].addEventListener("click", (e) => {
    let template = e.target.id;
    if (!template) {
      template = e.target.parentNode.id;
    }
    mainPageUI.setTemplateColor(template);
    let datasetEl = e.target.parentNode.parentNode;
    if (!datasetEl) {
      datasetEl = e.target.parentNode.parentNode.parentNode;
    }

    datasetEl.dataset.color = template.charAt(template.length - 1);
  });
}

for (var i = 0; selectButtons.length > i; i++) {
  selectButtons[i].addEventListener("click", (e) => {
    for (var i = 0; selectButtons.length > i; i++) {
      selectButtons[i].className = "select-button";
    }
    e.target.parentNode.classList.add("currents");
  });
}

for (var i = 0; appTemplateButtons.length > i; i++) {
  appTemplateButtons[i].addEventListener("click", (e) => {
    let template = e.target.id;
    appUI.changeTemplate(template, appTemplateButtons);
  });
}

for (var i = 0; appColorDots.length > i; i++) {
  appColorDots[i].addEventListener("click", (e) => {
    let id = e.target.id;
    appUI.changeColor(id);
  });
}

// MODAL SUBMIT liteners
let experienceForm = document.getElementById("experience-form");
if (experienceForm) {
  experienceForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let newJob;
    let editId = document.getElementById("experience-form").dataset.id;
    if (editId !== "") {
      newJob = experienceCRUD.experienceData(editId);
    } else {
      newJob = experienceCRUD.experienceData();
    }
    experienceCRUD.addExperience(newJob);
    modalUI.clearExperienceInputs();
    modalUI.closeModal(e.target);
  });
}
let educationForm = document.getElementById("education-form");
if (educationForm) {
  educationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let newEdu;
    let editId = document.getElementById("education-form").dataset.id;
    if (editId != "") {
      newEdu = educationCRUD.educationData(editId);
    } else {
      newEdu = educationCRUD.educationData();
    }
    educationCRUD.addEducation(newEdu);
    modalUI.clearEducationInputs();
    modalUI.closeModal(e.target);
  });
}

let certificationForm = document.getElementById("certification-form");
if (certificationForm) {
  certificationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let newCer;
    let editId = document.getElementById("certification-form").dataset.id;
    if (editId != "") {
      newCer = certificationCRUD.certificationData(editId);
    } else {
      newCer = certificationCRUD.certificationData();
    }
    certificationCRUD.addCertification(newCer);
    modalUI.clearCertificationInputs();
    modalUI.closeModal(e.target);
  });
}

let deleteCvButton = document.getElementById("delete-cv-button");
if (deleteCvButton) {
  deleteCvButton.addEventListener("click", (e) => {
    completeCvCRUD.deleteCv(e.target.dataset.id);
    modalUI.closeModal(e.target);
    completeCvCRUD.readCv();
  });
}

let currentPage = window.location.href.substring(
  window.location.href.lastIndexOf("/") + 1
);

if (currentPage !== "") {
  window.addEventListener("popstate", router);
}

let newButton = document.getElementById("new-button");
if (newButton) {
  newButton.addEventListener("click", () => {
    localStorage.removeItem("basicData");
    localStorage.removeItem("residenceData");
    localStorage.removeItem("contactData");
    localStorage.removeItem("experienceData");
    localStorage.removeItem("educationData");
    localStorage.removeItem("languagesData");
    localStorage.removeItem("skillsData");
    localStorage.removeItem("certificationData");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    } else if (e.target.parentNode.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.parentNode.href);
    } else if (e.target.parentNode.parentNode.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.parentNode.parentNode.href);
    } else if (e.target.matches("[data-expdelete]")) {
      experienceCRUD.deleteExperience(e.target.parentNode.dataset.id);
      experienceCRUD.readExperience();
    } else if (e.target.matches("[data-expedit]")) {
      let jobToEdit = experienceCRUD.updateExperience(
        e.target.parentNode.dataset.id
      );
      modalUI.openModal(e.target);
      modalUI.editExperienceInputs(
        jobToEdit.id,
        jobToEdit.position,
        jobToEdit.company,
        jobToEdit.location,
        jobToEdit.startDate,
        jobToEdit.endDate,
        jobToEdit.description
      );
    } else if (e.target.matches("[data-edudelete]")) {
      educationCRUD.deleteEducation(e.target.parentNode.dataset.id);
      educationCRUD.readEducation();
    } else if (e.target.matches("[data-eduedit]")) {
      let eduToEdit = educationCRUD.updateEducation(
        e.target.parentNode.dataset.id
      );
      modalUI.openModal(e.target);
      modalUI.editEducationInputs(
        eduToEdit.id,
        eduToEdit.educationLevel,
        eduToEdit.school,
        eduToEdit.spec,
        eduToEdit.startDate,
        eduToEdit.endDate,
        eduToEdit.description
      );
    } else if (e.target.matches("[data-cerdelete]")) {
      certificationCRUD.deleteCertification(e.target.parentNode.dataset.id);
      certificationCRUD.readCertification();
    } else if (e.target.matches("[data-ceredit]")) {
      let cerToEdit = certificationCRUD.updateCertification(
        e.target.parentNode.dataset.id
      );
      modalUI.openModal(e.target);
      modalUI.editCertificationInputs(
        cerToEdit.id,
        cerToEdit.name,
        cerToEdit.organizer,
        cerToEdit.participationDate,
        cerToEdit.description
      );
    } else if (e.target.matches("[data-landelete]")) {
      langSkillCRUD.deleteLanguage(e.target.parentNode.dataset.id);
    } else if (e.target.matches("[data-skidelete]")) {
      langSkillCRUD.deleteSkill(e.target.parentNode.dataset.id);
    } else if (e.target.matches("[data-cvdelete]")) {
      modalUI.openModal(e.target);
      document.getElementById("delete-cv-button").dataset.id =
        e.target.dataset.id;
    }
  });
  let currentPage = window.location.href.substring(
    window.location.href.lastIndexOf("/") + 1
  );
  if (currentPage !== "") {
    router();
  }
});
