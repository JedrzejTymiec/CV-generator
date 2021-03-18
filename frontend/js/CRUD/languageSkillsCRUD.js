import langSkillLevel from "../langSkillLevel.js";
import { v4 as uuidv4 } from "uuid";

class Language {
  constructor(id, language, level) {
    this.id = { data: id, isRequired: true };
    this.language = { data: language, isRequired: true };
    this.level = { data: level, isRequired: true };
  }
}

class Skill {
  constructor(id, skill, level) {
    this.id = { data: id, isRequired: true };
    this.skill = { data: skill, isRequired: true };
    this.level = { data: level, isRequired: true };
  }
}

class langSkillCRUD {
  static languageData() {
    let id = uuidv4();
    let formLanguage = document.getElementById("language-input").value;
    let level = document.getElementById("language-level-input").value;

    let languageData = new Language(id, formLanguage, level);

    return languageData;
  }

  static addLanguage(data) {
    let languageList = JSON.parse(localStorage.getItem("languagesData"));

    if (languageList) {
      languageList.push(data);
      localStorage.setItem("languagesData", JSON.stringify(languageList));
    } else {
      localStorage.setItem("languagesData", JSON.stringify([data]));
    }
    this.readLanguages();
  }

  static deleteLanguage(id) {
    let languageList = JSON.parse(localStorage.getItem("languagesData"));
    let newLangList = languageList.filter((element) => {
      if (element.id.data !== id) {
        return element;
      }
    });
    localStorage.setItem("languagesData", JSON.stringify(newLangList));
    this.readLanguages();
  }

  static readLanguages() {
    let languageData = JSON.parse(localStorage.getItem("languagesData"));
    let languageListContainer = document.getElementById(
      "form-languages-container"
    );
    let previewlanguageListContainer = document.getElementById(
      "preview-languages-container"
    );

    if (languageData && languageData.length !== 0) {
      if (languageListContainer) {
        let languageList = languageData.map((element) => {
          return `<li class="form-language-container" data-id=${
            element.id.data
          }>
              <span>${element.language.data}: ${element.level.data.substring(
            1
          )}</span> <i class="fas fa-times" data-landelete></i>
          </li>`;
        });
        languageListContainer.innerHTML = languageList.join("");
      }
      if (previewlanguageListContainer) {
        document.querySelector(".languages-container").style.display = "block";
        let previewLanguageList = languageData.map((element) => {
          return `<div class="language-container">
        <h3 class="language">${element.language.data}</h3>
        <p class="language-level">${element.level.data.substring(1)}</p>
        <div class="language-level-dot">
          <div id="${element.language.data}i" class="inner-dot"></div>
          <div id="plo" data-lvl="1" class="outer-dot"></div>
        </div>
        <div id="Polish" class="language-level-scale" data-lvl="5">
          <div>
            <div id="${element.language.data}1" class="inner"></div>
            <div class="level"></div>
          </div>
          <div>
            <div id="${element.language.data}2" class="inner"></div>
            <div class="level"></div>
          </div>
          <div>
            <div id="${element.language.data}3" class="inner"></div>
            <div class="level"></div>
          </div>
          <div>
            <div id="${element.language.data}4" class="inner"></div>
            <div class="level"></div>
          </div>
          <div>
            <div id="${element.language.data}5" class="inner"></div>
            <div class="level"></div>
          </div>
        </div>
      </div>`;
        });
        previewlanguageListContainer.innerHTML = previewLanguageList.join("");
        languageData.forEach((element) => {
          langSkillLevel.creativeLanguageLevel(
            element.level.data.charAt(0),
            element.language.data
          );
          langSkillLevel.radioButtonSkills(
            element.language.data,
            element.level.data.charAt(0)
          );
        });
      }
    } else {
      document.querySelector(".languages-container").style.display = "none";
      if (languageListContainer) {
        languageListContainer.innerHTML = "";
      }
    }
  }

  static skillData() {
    let id = uuidv4();
    let skill = document.getElementById("skill-input").value;
    let level = document.getElementById("skill-level-input").value;

    let skillData = new Skill(id, skill, level);

    return skillData;
  }

  static addSkill(data) {
    let skillData = JSON.parse(localStorage.getItem("skillsData"));

    if (skillData) {
      skillData.push(data);
      localStorage.setItem("skillsData", JSON.stringify(skillData));
    } else {
      localStorage.setItem("skillsData", JSON.stringify([data]));
    }
    this.readSkills();
  }

  static deleteSkill(id) {
    let skillData = JSON.parse(localStorage.getItem("skillsData"));

    let newSkillData = skillData.filter((element) => {
      if (element.id.data !== id) {
        return element;
      }
    });

    localStorage.setItem("skillsData", JSON.stringify(newSkillData));
    this.readSkills();
  }

  static readSkills() {
    let skillData = JSON.parse(localStorage.getItem("skillsData"));
    let formSkillContainer = document.getElementById("form-skills-container");
    let previewSkillContainer = document.getElementById(
      "preview-skills-container"
    );

    if (skillData && skillData.length !== 0) {
      if (formSkillContainer) {
        let skillList = skillData.map((element) => {
          return `
        <li class="form-skill-container" data-id=${element.id.data}>
              <span>${element.skill.data}: ${element.level.data.substring(
            1
          )}</span> <i class="fas fa-times" data-skidelete></i>
          </li>`;
        });
        formSkillContainer.innerHTML = skillList.join("");
      }
      if (previewSkillContainer) {
        document.querySelector(".skills-container").style.display = "block";
        let previewSkillList = skillData.map((element) => {
          let value;
          switch (element.level.data.charAt(0)) {
            case "1":
              value = 20;
              break;
            case "2":
              value = 40;
              break;
            case "3":
              value = 60;
              break;
            case "4":
              value = 80;
              break;
            case "5":
              value = 100;
              break;
          }
          return `<li>
        ${element.skill.data}
        <div id="js" class="skill-level">
          <div>
            <input
              disabled
              type="range"
              value="${value}"
              min="1"
              max="100"
              style = "background:
                linear-gradient(to right, var(--mainColor) 0%, var(--mainColor) ${value}%, #fff ${value}%, #fff 100%);"
            />
          </div>
          <div>
            <div id="${element.skill.data}1" class="inner"></div>
            <div class="level"></div>
          </div>
          <div>
            <div id="${element.skill.data}2" class="inner"></div>
            <div class="level"></div>
          </div>
          <div>
            <div id="${element.skill.data}3" class="inner"></div>
            <div class="level"></div>
          </div>
          <div>
            <div id="${element.skill.data}4" class="inner"></div>
            <div class="level"></div>
          </div>
          <div>
            <div id="${element.skill.data}5" class="inner"></div>
            <div class="level"></div>
          </div>
        </div>
      </li>`;
        });
        previewSkillContainer.innerHTML = previewSkillList.join("");
        skillData.forEach((element) => {
          langSkillLevel.radioButtonSkills(
            element.skill.data,
            element.level.data.charAt(0)
          );
        });
      }
    } else {
      document.querySelector(".skills-container").style.display = "none";
      if (formSkillContainer) {
        formSkillContainer.innerHTML = "";
      }
    }
  }
}

export default langSkillCRUD;
