import BasicForm from "./views/BasicForm.js";
import ExperienceForm from "./views/ExperienceForm.js";
import SkillsForm from "./views/SkillsForm.js";
import Download from "./views/Download.js";
import modalUI from "./modalUI.js";
import appUI from "./appUI.js";
import experienceCRUD from "./CRUD/experienceCRUD.js";
import educationCRUD from "./CRUD/educationCRUD.js";
import certificationCRUD from "./CRUD/certificationCRUD.js";
import basicDataCRUD from "./CRUD/basicDataCRUD.js";
import langSkillCRUD from "./CRUD/languageSkillsCRUD.js";
import completeCvCRUD from "./CRUD/completeCvCRUD.js";
import validation from "./validation.js";

const navigateTo = (url) => {
  history.pushState(null, null, url);
  window.scroll(0, 0);
  router();
};

const router = async () => {
  const routes = [
    { path: "/app/basic", view: BasicForm },
    { path: "/app/experience", view: ExperienceForm },
    { path: "/app/skills", view: SkillsForm },
    { path: "/app/download", view: Download },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  const view = new match.route.view();

  document.querySelector("#form-container").innerHTML = await view.getHtml();

  //Close modal

  let closeModalButtons = document.getElementsByClassName("close-modal");

  for (var i = 0; closeModalButtons.length > i; i++) {
    closeModalButtons[i].addEventListener("click", (e) => {
      modalUI.closeModal(e.target);
    });
  }

  //Open modal

  let openModalButtons = document.getElementsByClassName("open-modal");

  for (var i = 0; openModalButtons.length > i; i++) {
    openModalButtons[i].addEventListener("click", (e) => {
      modalUI.openModal(e.target);
    });
  }

  let basic = document.getElementById("basic-data-form");
  let residence = document.getElementById("residence-form");
  let contact = document.getElementById("contact-form");
  let language = document.getElementById("language-form");
  let skills = document.getElementById("skills-form");
  let saveCVButton = document.getElementById("save-cv-button");

  if (basic) {
    basic.addEventListener("submit", (e) => {
      e.preventDefault();
      let newData = basicDataCRUD.basicData();
      let valid = validation.validateData(newData);
      if (valid) {
        basicDataCRUD.addBasicData(newData);
      }
    });
  }
  if (residence) {
    residence.addEventListener("submit", (e) => {
      e.preventDefault();
      let newData = basicDataCRUD.residenceData();
      let valid = validation.validateData(newData);
      if (valid) {
        basicDataCRUD.addResidenceData(newData);
      }
    });
  }
  if (contact) {
    contact.addEventListener("submit", (e) => {
      e.preventDefault();
      let newData = basicDataCRUD.contactData();
      let valid = validation.validateData(newData);
      if (valid) {
        basicDataCRUD.addContactData(newData);
      }
    });
  }
  if (language) {
    language.addEventListener("submit", (e) => {
      e.preventDefault();
      let newData = langSkillCRUD.languageData();
      let valid = validation.validateData(newData);
      if (valid) {
        let contains = validation.checkForDuplicates(newData);
        if (contains) {
          validation.showDoubleAlert("language");
        } else {
          langSkillCRUD.addLanguage(newData);
        }
      }
    });
  }
  if (skills) {
    skills.addEventListener("submit", (e) => {
      e.preventDefault();
      let newData = langSkillCRUD.skillData();
      let valid = validation.validateData(newData);
      if (valid) {
        let contains = validation.checkForDuplicates(newData);
        if (contains) {
          validation.showDoubleAlert("skill");
        } else {
          langSkillCRUD.addSkill(newData);
          document.getElementById("skill-input").value = "";
        }
      }
    });
  }
  if (saveCVButton) {
    saveCVButton.addEventListener("click", () => {
      let id = document.getElementById("form-container").dataset.id;
      let newData;
      if (id !== "") {
        newData = completeCvCRUD.completeCvData(id);
      } else {
        newData = completeCvCRUD.completeCvData();
      }
      let valid = validation.completeValidation(newData);
      if (valid) {
        completeCvCRUD.addCv(newData);
      }
    });
  }

  let currentPage = window.location.href.substring(
    window.location.href.lastIndexOf("/") + 1
  );
  appUI.pagesDone(currentPage);

  basicDataCRUD.readBasicData();
  basicDataCRUD.readResidenceData();
  basicDataCRUD.readContactData();

  if (document.getElementById("form-container").dataset.valid === "false") {
    validation.validateBasicPage();
  }

  langSkillCRUD.readLanguages();
  langSkillCRUD.readSkills();
  experienceCRUD.readExperience();
  educationCRUD.readEducation();
  certificationCRUD.readCertification();

  completeCvCRUD.readCv();
};

export { router, navigateTo };
