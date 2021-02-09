class langSkillCRUD {
  static addLanguage(data) {
    let languageList = JSON.parse(localStorage.getItem("languageList"));

    if (languageList) {
      languageList.push(data);
      localStorage.setItem("languageList", JSON.stringify(languageList));
    } else {
      localStorage.setItem("languageList", JSON.stringify([data]));
    }
    this.readLanguages();
  }

  static deleteLanguage(id) {
    let languageList = JSON.parse(localStorage.getItem("languageList"));
    let newLangList = languageList.filter((element) => {
      if (element.id !== id) {
        return element;
      }
    });
    localStorage.setItem("languageList", JSON.stringify(newLangList));
    this.readLanguages();
  }

  static readLanguages() {
    let languageData = JSON.parse(localStorage.getItem("languageList"));

    if (languageData) {
      let languageListContainer = document.getElementById(
        "form-languages-container"
      );
      let languageList = languageData.map((element) => {
        return `<li class="form-language-container" data-id=${element.id}>
              <span>${element.language}: ${element.level}</span> <i class="fas fa-times" data-landelete></i>
          </li>`;
      });

      languageListContainer.innerHTML = languageList.join("");
    }
  }

  static addSkill(data) {
    let skillData = JSON.parse(localStorage.getItem("skillData"));

    console.log(data);

    if (skillData) {
      skillData.push(data);
      localStorage.setItem("skillData", JSON.stringify(skillData));
    } else {
      localStorage.setItem("skillData", JSON.stringify([data]));
    }
    this.readSkills();
  }

  static deleteSkill(id) {
    let skillData = JSON.parse(localStorage.getItem("skillData"));

    let newSkillData = skillData.filter((element) => {
      if (element.id !== id) {
        return element;
      }
    });

    localStorage.setItem("skillData", JSON.stringify(newSkillData));
    this.readSkills();
  }

  static readSkills() {
    let skillData = JSON.parse(localStorage.getItem("skillData"));

    if (skillData) {
      let skillContainer = document.getElementById("form-skills-container");

      let skillList = skillData.map((element) => {
        return `
        <li class="form-skill-container" data-id=${element.id}>
              <span>${element.skill}</span> <i class="fas fa-times" data-skidelete></i>
          </li>`;
      });
      skillContainer.innerHTML = skillList.join("");
    }
  }
}

export default langSkillCRUD;
