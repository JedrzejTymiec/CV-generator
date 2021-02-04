function creativeLanguageLevel(level, language, target) {
  if (level == null || level == undefined) {
    level = 3;
  }
  if (level == "1") {
    document.getElementById(language + "i").style.width = "6px";
    document.getElementById(language + "i").style.height = "6px";

    target.dataset.lvl = "2";
    localStorage.setItem(language, level);
  }
  if (level == "2") {
    document.getElementById(language + "i").style.width = "12px";
    document.getElementById(language + "i").style.height = "12px";

    target.dataset.lvl = "3";
    localStorage.setItem(language, level);
  }
  if (level == "3") {
    document.getElementById(language + "i").style.width = "18px";
    document.getElementById(language + "i").style.height = "18px";

    target.dataset.lvl = "4";
    localStorage.setItem(language, level);
  }
  if (level == "4") {
    document.getElementById(language + "i").style.width = "22px";
    document.getElementById(language + "i").style.height = "22px";

    target.dataset.lvl = "5";
    localStorage.setItem(language, level);
  }
  if (level == "5") {
    document.getElementById(language + "i").style.width = "28px";
    document.getElementById(language + "i").style.height = "28px";

    target.dataset.lvl = "1";
    localStorage.setItem(language, level);
  }
}

function setCreativeLanguage(language) {
  const level = localStorage.getItem(language);
  if (level == null || level == undefined) {
    level = 3;
  }
  if (level == "1") {
    document.getElementById(language + "i").style.width = "6px";
    document.getElementById(language + "i").style.height = "6px";
  }
  if (level == "2") {
    document.getElementById(language + "i").style.width = "12px";
    document.getElementById(language + "i").style.height = "12px";
  }
  if (level == "3") {
    document.getElementById(language + "i").style.width = "18px";
    document.getElementById(language + "i").style.height = "18px";
  }
  if (level == "4") {
    document.getElementById(language + "i").style.width = "22px";
    document.getElementById(language + "i").style.height = "22px";
  }
  if (level == "5") {
    document.getElementById(language + "i").style.width = "28px";
    document.getElementById(language + "i").style.height = "28px";
  }
}

export { creativeLanguageLevel, setCreativeLanguage };
