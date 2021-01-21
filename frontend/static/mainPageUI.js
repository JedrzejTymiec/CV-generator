class MainPageUI {
  static setTemplate(templateType, id) {
    let dotLists = document.getElementsByClassName("dot-list");

    for (var i = 0; dotLists.length > i; i++) {
      dotLists[i].style.zIndex = "-1";
    }

    document.getElementById("template-type").src =
      "./static/pictures/CV templates/" + templateType + ".png";

    document.getElementById(id).classList.add("current");
    document.getElementById(id + "-dot-list").style.zIndex = "1";

    localStorage.setItem("template", templateType.slice(0, -1));
  }

  static setTemplateColor(template) {
    document.getElementById("template-type").src =
      "./static/pictures/CV templates/" + template + ".png";

    let templateType = template.slice(0, -1);

    if (template === templateType + "0") {
      document.getElementById(templateType + "1").className =
        "mp color-dot dot-2";
      document.getElementById(templateType + "2").className =
        "mp color-dot dot-3";
      localStorage.setItem("color", "0");
    }
    if (template === templateType + "1") {
      document.getElementById(templateType + "0").className =
        "mp color-dot dot-1";
      document.getElementById(templateType + "2").className =
        "mp color-dot dot-3";
      localStorage.setItem("color", "1");
    }
    if (template === templateType + "2") {
      document.getElementById(templateType + "1").className =
        "mp color-dot dot-2";
      document.getElementById(templateType + "0").className =
        "mp color-dot dot-1";
      localStorage.setItem("color", "2");
    }

    document.getElementById(template).classList.add("current");
  }
}

export default MainPageUI;
