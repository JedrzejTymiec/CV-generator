class UI {
  static changeTemplate(template) {
    this.addCurrentClass(document.getElementById(template));
    document.getElementById("template-type").href =
      "./css/" + template + ".css";

    localStorage.setItem("template", template);
  }

  static setAppTemplate() {
    let template = localStorage.getItem("template");
    let color = localStorage.getItem("color");

    if (template && color) {
      this.changeTemplate(template);
      this.changeColor("dot-" + (parseInt(color) + 1));
    } else {
      this.changeTemplate("basic");
      this.changeColor("dot-1");
    }
  }

  static changeColor(id) {
    this.addCurrentClass(document.getElementById(id));

    if (id === "dot-1") {
      document.documentElement.style.setProperty("--mainColor", "#4758a8");
      document.documentElement.style.setProperty("--secondaryColor", "#3bbeff");
      document.documentElement.style.setProperty("--contactColor", "#15243d");
      document.documentElement.style.setProperty("--creativeColor", "#42c2b9");
      document.documentElement.style.setProperty(
        "--headerBackground",
        "#4758a8"
      );
      localStorage.setItem("color", "0");
    }
    if (id === "dot-2") {
      document.documentElement.style.setProperty("--mainColor", "#051561");
      document.documentElement.style.setProperty("--secondaryColor", "#7a84b3");
      document.documentElement.style.setProperty("--contactColor", "#782270");
      document.documentElement.style.setProperty("--creativeColor", "#370f33");
      document.documentElement.style.setProperty(
        "--headerBackground",
        "#808080"
      );
      localStorage.setItem("color", "1");
    }
    if (id === "dot-3") {
      document.documentElement.style.setProperty("--mainColor", "#616d84");
      document.documentElement.style.setProperty("--secondaryColor", "#9fafce");
      document.documentElement.style.setProperty("--contactColor", "#65df6f");
      document.documentElement.style.setProperty("--creativeColor", "#80e588");
      document.documentElement.style.setProperty(
        "--headerBackground",
        "#051561"
      );
      localStorage.setItem("color", "2");
    }
  }

  static pagesDone(currentPage) {
    if (currentPage === "basic") {
      document.getElementById("basic-form-dot").innerHTML = `<p>1</p>`;
      document.getElementById("experience-form-dot").innerHTML = `<p>2</p>`;
      document.getElementById("skills-form-dot").innerHTML = `<p>3</p>`;
    } else if (currentPage === "experience") {
      document.getElementById(
        "basic-form-dot"
      ).innerHTML = `<p><i class="fas fa-check"></i></p>`;
      document.getElementById("experience-form-dot").innerHTML = `<p>2</p>`;
      document.getElementById("skills-form-dot").innerHTML = `<p>3</p>`;
    } else if (currentPage === "skills") {
      document.getElementById(
        "basic-form-dot"
      ).innerHTML = `<p><i class="fas fa-check"></i></p>`;
      document.getElementById(
        "experience-form-dot"
      ).innerHTML = `<p><i class="fas fa-check"></i></p>`;
      document.getElementById("skills-form-dot").innerHTML = `<p>3</p>`;
    } else if (currentPage === "download") {
      document.getElementById(
        "basic-form-dot"
      ).innerHTML = `<p><i class="fas fa-check"></i></p>`;
      document.getElementById(
        "experience-form-dot"
      ).innerHTML = `<p><i class="fas fa-check"></i></p>`;
      document.getElementById(
        "skills-form-dot"
      ).innerHTML = `<p><i class="fas fa-check"></i></p>`;
    }
  }

  static setMpTemplate(templateType) {
    let dotLists = document.getElementsByClassName("dot-list");

    for (var i = 0; dotLists.length > i; i++) {
      dotLists[i].style.zIndex = "-1";
    }

    document.getElementById("template-type").src =
      "../../pictures/CV templates/" + templateType + ".png";

    document.getElementById(
      templateType.slice(0, -1) + "-dot-list"
    ).style.zIndex = "1";
    let selector =
      "#" +
      templateType.slice(0, -1) +
      "-dot-list .color-dot:nth-child(" +
      (parseInt(localStorage.getItem("color")) + 1) +
      ")";
    UI.addCurrentClass(document.querySelector(selector));
    localStorage.setItem("template", templateType.slice(0, -1));
  }

  static setTemplateColor(template) {
    document.getElementById("template-type").src =
      "../../pictures/CV templates/" + template + ".png";
    localStorage.setItem("color", template.slice(template.length - 1));
  }

  static clearLocalStorage() {
    localStorage.removeItem("currentCvId");
    localStorage.removeItem("photoData");
    localStorage.removeItem("basicData");
    localStorage.removeItem("residenceData");
    localStorage.removeItem("contactData");
    localStorage.removeItem("experienceData");
    localStorage.removeItem("educationData");
    localStorage.removeItem("languagesData");
    localStorage.removeItem("skillsData");
    localStorage.removeItem("certificationData");
    localStorage.removeItem("projectsData");
  }

  static addCurrentClass(target) {
    let klasa;
    if (target.classList.length > 0) {
      klasa = target.classList;
      console.log(klasa);
    } else {
      klasa = target.parentNode.classList;
    }
    let buttons = document.getElementsByClassName(klasa);
    for (let i = 0; buttons.length > i; i++) {
      buttons[i].classList = klasa;
    }
    if (target.classList.length > 0) {
      target.classList.add("current");
    } else {
      target.parentNode.classList.add("current");
    }
  }
}

export default UI;
