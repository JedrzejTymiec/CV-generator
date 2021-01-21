import mainPageUI from "./mainPageUI.js";
import appUI from "./appUI.js";
import modalUI from "./modalUI.js";

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

//UTWORZYĆ FUNKCJĘ STARTOWĄ DODAJĄCĄ EventListenery

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
    e.target.parentNode.classList.add("current");
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

// //ustawienie nasłuchu do ustawiania template
// for (var i = 0; templateButtons.length > i; i++) {
//   templateButtons[i].addEventListener("click", function func(e) {
//     let template = e.target.id;
//     if (!template) {
//       template = e.target.parentNode.id;
//     }
//     for (var i = 0; templateButtons.length > i; i++) {
//       templateButtons[i].className = "template-button";
//     }
//     setTemplate(template);
//   });
// }

// for (var i = 0; templateColorDots.length > i; i++) {
//   templateColorDots[i].addEventListener("click", (e) => {
//     let template = e.target.id;
//     console.log(template);
//   });
// }

// for (var i = 0; creativeSkillLevelButtons.length > i; i++) {
//   //ustawienie nasłuchu kliknięcia dla przycisków radio
//   creativeSkillLevelButtons[i].addEventListener("click", (e) => {
//     let clickId = e.target.id;
//     let skill = clickId.charAt(0) + clickId.charAt(1);
//     let level = clickId.charAt(2);
//     let on = e.target.dataset.on;
//     radioButtonSkills(skill, level, on, e); //wywołanie obsługi przycisków radio
//   });
// }

// for (var i = 0; creativeLanguageLevelButtons.length > i; i++) {
//   //ustawienie nasłuchu przycisków poziomu języka creative template
//   creativeLanguageLevelButtons[i].addEventListener("click", (e) => {
//     let language = e.target.id.charAt(0) + e.target.id.charAt(1);
//     let level = e.target.dataset.lvl;
//     let target = e.target;
//     creativeLanguageLevel(level, language, target);
//   });
// }
