class langSkillLevel {
  static creativeLanguageLevel(level, language) {
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

  static radioButtonSkills(skill, level) {
    //obsługa przycisków poziomu umiejętności przyciski radio
    for (var i = 1; level >= i; i++) {
      document.getElementById(skill + i).style.backgroundColor =
        "rgba(255, 255, 255, 0)";
    }
  }
}

export default langSkillLevel;
