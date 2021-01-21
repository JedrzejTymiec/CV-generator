let sliders = document.getElementsByClassName("slider");

for (var i = 0; sliders.length > i; i++) {
  let value = localStorage.getItem(sliders[i].id);
  let slider = document.getElementById(sliders[i].id);

  if (value != null || value != undefined) {
    slider.value = value;

    slider.style.background =
      "linear-gradient(to right, var(--mainColor) 0%, var(--mainColor)" +
      value +
      "%, #fff " +
      value +
      "%, #fff 100%)";
  }

  sliders[i].addEventListener("input", function (e) {
    let id = e.target.id;
    let slider = document.getElementById(id);
    let value = slider.value;
    let background =
      "linear-gradient(to right, var(--mainColor) 0%, var(--mainColor)" +
      value +
      "%, #fff " +
      value +
      "%, #fff 100%)";
    slider.style.background = background;
    localStorage.setItem(id, value);
  });
}
