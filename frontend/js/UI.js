import completeCvCRUD from "./CRUD/completeCvCRUD.js";

function setOrder(elements, values) {
  for (let i = 0; elements.length > i; i++) {
    if (typeof values[i] === "string") {
      elements[i].value = values[i];
    } else if (typeof values[i] === "boolean") {
      if (values[i]) {
        elements[i].disabled = "false";
      } else {
        elements[i].removeAttribute("disabled");
      }
    }
  }
}

function setColors(colors) {
  for (let i = 0; colors.length > i; i++) {
    document.documentElement.style.setProperty(
      colors[i].color,
      colors[i].value
    );
  }
}

class UI {
  static changeTemplate(template) {
    this.addCurrentClass(document.getElementById(template));
    document.getElementById("template-type").href =
      "./css/" + template + ".css";

    switch (template) {
      case "professional":
        document.getElementById("experience-order").disabled = "false";
        document.getElementById("education-order").disabled = "false";
        document.getElementById("languages-order").removeAttribute("disabled");
        document.getElementById("skills-order").removeAttribute("disabled");
        document.querySelector(".experience-container").style.order = "0";
        document.querySelector(".education-container").style.order = "0";
        document.getElementById("experience-order").value = "1";
        document.getElementById("education-order").value = "2";
        break;
      case "modern":
        document.getElementById("experience-order").disabled = "false";
        document.getElementById("education-order").removeAttribute("disabled");
        document.getElementById("languages-order").removeAttribute("disabled");
        document.getElementById("skills-order").removeAttribute("disabled");
        document.querySelector(".experience-container").style.order = "0";
        document.getElementById("experience-order").value = "1";
        break;
      case "functional":
        document.getElementById("experience-order").removeAttribute("disabled");
        document.getElementById("education-order").removeAttribute("disabled");
        document.getElementById("languages-order").disabled = "false";
        document.getElementById("skills-order").disabled = "false";
        document.querySelector(".skills-container").style.order = "0";
        document.querySelector(".languages-container").style.order = "0";
        document.getElementById("languages-order").value = "2";
        document.getElementById("skills-order").value = "1";
        break;
    }

    // setOrder(elementsList, values);

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
    let colors;

    if (id === "dot-1") {
      colors = [
        { color: "--mainColor", value: "#4758a8" },
        { color: "--secondaryColor", value: "#3bbeff" },
        { color: "--contactColor", value: "#15243d" },
        { color: "--creativeColor", value: "#42c2b9" },
        { color: "--headerBackground", value: "#4758a8" },
      ];
      localStorage.setItem("color", "0");
    }
    if (id === "dot-2") {
      colors = [
        { color: "--mainColor", value: "#051561" },
        { color: "--secondaryColor", value: "#7a84b3" },
        { color: "--contactColor", value: "#782270" },
        { color: "--creativeColor", value: "#370f33" },
        { color: "--headerBackground", value: "#808080" },
      ];
      localStorage.setItem("color", "1");
    }
    if (id === "dot-3") {
      colors = [
        { color: "--mainColor", value: "#616d84" },
        { color: "--secondaryColor", value: "#9fafce" },
        { color: "--contactColor", value: "#65df6f" },
        { color: "--creativeColor", value: "#80e588" },
        { color: "--headerBackground", value: "#051561" },
      ];
      localStorage.setItem("color", "2");
    }

    setColors(colors);
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

  static changeSectionOrder(order, section) {
    document.querySelector("." + section + "-container").style.order = order;
    document.getElementById(section + "-order").value = order;
    this.saveSectionsOrder();
    let currentCvId = localStorage.getItem("currentCvId");
    if (currentCvId) {
      completeCvCRUD.saveCvHandle(currentCvId);
    }
  }

  // do przerobienia

  static saveSectionsOrder() {
    let sectionOrder = {
      template: localStorage.getItem("template"),
      experience: document.getElementById("experience-order").value,
      education: document.getElementById("education-order").value,
      certifications: document.getElementById("certification-order").value,
      projects: document.getElementById("projects-order").value,
      languages: document.getElementById("languages-order").value,
      skills: document.getElementById("skills-order").value,
    };

    localStorage.setItem("templateOrder", JSON.stringify(sectionOrder));
  }

  static setOrder() {
    let order = JSON.parse(localStorage.getItem("templateOrder"));
    this.changeSectionOrder(order.experience, "experience");
    this.changeSectionOrder(order.education, "education");
    this.changeSectionOrder(order.certifications, "certification");
    this.changeSectionOrder(order.projects, "projects");
    this.changeSectionOrder(order.languages, "languages");
    this.changeSectionOrder(order.skills, "skills");
    // this.changeTemplate(order.template);
  }
}

export default UI;
