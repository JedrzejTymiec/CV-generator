export default class {
  constructor() {}

  setTitle(title) {
    let formNumberDots = document.getElementsByClassName("form-number-dot");
    for (var i = 0; formNumberDots.length > i; i++) {
      formNumberDots[i].className = "form-number-dot";
    }
    document.title = title.charAt(0).toUpperCase() + title.slice(1);
    console.log(title);
    document.getElementById(title + "-form-dot").classList.add("current");
  }

  async getHtml() {
    return "";
  }
}
