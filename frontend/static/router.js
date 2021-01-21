import BasicForm from "./views/BasicForm.js";
import ExperienceForm from "./views/ExperienceForm.js";
import SkillsForm from "./views/SkillsForm.js";
import Download from "./views/Download.js";
import modalUI from "./modalUI.js";

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
};

window.addEventListener("popstate", router);

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
    }
  });
  router();
});
