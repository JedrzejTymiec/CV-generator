class langSkillCRUD {
  static addLanguage(data) {
    let languageList = JSON.parse(localStorage.getItem("languageList"));

    if (languageList) {
      languageList.push(data);
      localStorage.setItem("languageList", JSON.stringify(languageList));
    } else {
      localStorage.setItem("languageList", JSON.stringify([data]));
    }
  }

  static readLanguages() {
    let languageData = JOSN.parse(localStorage.getItem("languageList"));

    if (languageList) {
      let languageListContainer = document.getElementById(
        "form-languages-container"
      );

      let languageList = languageData.map((element) => {
        `<li class="form-language-container" data-id=${element.id}>
              ${element.language} - ${element.level}
          </li>`;
      });
      languageListContainer.innerHTML = languageList.join("");
    }
  }
}

export default langSkillCRUD;
