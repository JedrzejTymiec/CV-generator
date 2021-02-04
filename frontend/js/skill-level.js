function radioButtonSkills(skill, level, on) {
  //obsługa przycisków poziomu umiejętności przyciski radio
  if (level == null || level == undefined) {
    level = document.getElementById(skill).dataset.level;
  }
  localStorage.setItem(skill, level);
  if (on == "off") {
    for (var i = 1; level >= i; i++) {
      document.getElementById(skill + i).style.backgroundColor =
        "rgba(255, 255, 255, 0)"; //zmiana przejżystości elementu na wierzchu na przeźroczysty
      document.getElementById(skill + i).dataset.on = "on";
    }
  } else {
    for (var i = 5; level < i; i--) {
      document.getElementById(skill + i).style.backgroundColor =
        "var(--langLevelColor)";
      document.getElementById(skill + i).dataset.on = "off";
    }
  }
}

export { radioButtonSkills };
