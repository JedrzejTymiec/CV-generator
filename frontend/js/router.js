import BasicForm from "./views/BasicForm.js";
import ExperienceForm from "./views/ExperienceForm.js";
import SkillsForm from "./views/SkillsForm.js";
import Download from "./views/Download.js";
import modalUI from "./modalUI.js";
import appUI from "./appUI.js";
import formUI from "./formUI.js";
import experienceCRUD from "./experienceCRUD.js";
import educationCRUD from "./educationCRUD.js";
import certificationCRUD from "./certificationCRUD.js";
import basicDataCRUD from "./basicDataCRUD.js";
import langSkillCRUD from "./languageSkillsCRUD.js";

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

  if (basic) {
    basic.addEventListener("submit", (e) => {
      e.preventDefault();
      let newData = formUI.basicData();
      console.log(newData);
      basicDataCRUD.addBasicData(newData);
    });
  }
  if (residence) {
    residence.addEventListener("submit", (e) => {
      e.preventDefault();
      let newData = formUI.residenceData();
      basicDataCRUD.addResidenceData(newData);
    });
  }
  if (contact) {
    contact.addEventListener("submit", (e) => {
      e.preventDefault();
      let newData = formUI.contactData();
      basicDataCRUD.addContactData(newData);
    });
  }
  if (language) {
    language.addEventListener("submit", (e) => {
      e.preventDefault();
      let newData = formUI.languageData();
      langSkillCRUD.addLanguage(newData);
    });
  }
  if (skills) {
    skills.addEventListener("submit", (e) => {
      e.preventDefault();
      let newData = formUI.skillData();
      langSkillCRUD.addSkill(newData);
      document.getElementById("skill-input").value = "";
    });
  }

  let currentPage = window.location.href.substring(
    window.location.href.lastIndexOf("/") + 1
  );

  appUI.pagesDone(currentPage);

  if (currentPage === "experience") {
    langSkillCRUD.readLanguages();
  } else if (currentPage === "skills") {
    langSkillCRUD.readSkills();
  } else if (currentPage === "basic") {
  }

  experienceCRUD.readExperience();
  educationCRUD.readEducation();
  certificationCRUD.readCertification();
  basicDataCRUD.readBasicData();
  basicDataCRUD.readResidenceData();
  basicDataCRUD.readContactData();
};

export { router, navigateTo };
