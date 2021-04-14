import UI from "../UI";

export default class {
  constructor() {}

  setTitle(title) {
    document.title = title.charAt(0).toUpperCase() + title.slice(1);
    UI.addCurrentClass(document.getElementById(title + "-form-dot"));
  }

  async getHtml() {
    return "";
  }
}
