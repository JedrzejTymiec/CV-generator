import langSkillLevel from "../langSkillLevel.js";
import { v4 as uuidv4 } from "uuid";

class Language {
  constructor(id, language, level) {
    this.id = id;
    this.language = language;
    this.level = level;
  }
}

class Skill {
  constructor(id, skill, level) {
    this.id = id;
    this.skill = skill;
    this.level = level;
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
      if (element.id !== id) {
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

    if (languageData && languageListContainer) {
      let languageList = languageData.map((element) => {
        return `<li class="form-language-container" data-id=${element.id}>
              <span>${element.language}: ${element.level.substring(
          1
        )}</span> <i class="fas fa-times" data-landelete></i>
          </li>`;
      });
      languageListContainer.innerHTML = languageList.join("");
    }
    if (languageData) {
      let previewLanguageList = languageData.map((element) => {
        return `<div class="language-container">
        <h3 class="language">${element.language}</h3>
        <p class="language-level">${element.level.substring(1)}</p>
        <div class="language-level-dot">
          <div id="${element.language}i" class="inner-dot"></div>
          <div id="plo" data-lvl="1" class="outer-dot"></div>
        </div>
        <div id="Polish" class="language-level-scale" data-lvl="5">
          <div>
            <div class="inner"></div>
            <div id="${element.language}1" data-on="off" class="level"></div>
          </div>
          <div>
            <div class="inner"></div>
            <div id="${element.language}2" data-on="off" class="level"></div>
          </div>
          <div>
            <div class="inner"></div>
            <div id="${element.language}3" data-on="off" class="level"></div>
          </div>
          <div>
            <div class="inner"></div>
            <div id="${element.language}4" data-on="off" class="level"></div>
          </div>
          <div>
            <div class="inner"></div>
            <div id="${element.language}5" data-on="off" class="level"></div>
          </div>
        </div>
      </div>`;
      });
      previewlanguageListContainer.innerHTML = previewLanguageList.join("");
      languageData.forEach((element) => {
        langSkillLevel.creativeLanguageLevel(
          element.level.charAt(0),
          element.language
        );
        langSkillLevel.radioButtonSkills(
          element.language,
          element.level.charAt(0)
        );
      });
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
      if (element.id !== id) {
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

    if (skillData && formSkillContainer) {
      let skillList = skillData.map((element) => {
        return `
        <li class="form-skill-container" data-id=${element.id}>
              <span>${element.skill}: ${element.level.substring(
          1
        )}</span> <i class="fas fa-times" data-skidelete></i>
          </li>`;
      });
      formSkillContainer.innerHTML = skillList.join("");
    }
    if (skillData) {
      let previewSkillList = skillData.map((element) => {
        return `<li>
        ${element.skill}
        <div id="js" class="skill-level" data-level="3">
          <div>
            <input
              id="js-slider"
              class="slider"
              type="range"
              value="25"
              min="1"
              max="100"
            />
          </div>
          <div>
            <div class="inner"></div>
            <div id="${element.skill}1" data-on="off" class="level"></div>
          </div>
          <div>
            <div class="inner"></div>
            <div id="${element.skill}2" data-on="off" class="level"></div>
          </div>
          <div>
            <div class="inner"></div>
            <div id="${element.skill}3" data-on="off" class="level"></div>
          </div>
          <div>
            <div class="inner"></div>
            <div id="${element.skill}4" data-on="off" class="level"></div>
          </div>
          <div>
            <div class="inner"></div>
            <div id="${element.skill}5" data-on="off" class="level"></div>
          </div>
        </div>
      </li>`;
      });
      previewSkillContainer.innerHTML = previewSkillList.join("");
      skillData.forEach((element) => {
        langSkillLevel.radioButtonSkills(
          element.skill,
          element.level.charAt(0)
        );
      });
    }
  }
}

export default langSkillCRUD;
