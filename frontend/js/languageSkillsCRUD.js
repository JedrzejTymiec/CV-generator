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

      console.log(languageList);
      languageListContainer.innerHTML = languageList.join("");
    }
  }
}

export default langSkillCRUD;
