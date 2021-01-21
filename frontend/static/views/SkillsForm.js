import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("skills");
  }

  async getHtml() {
    return `
        <h1>Skills form INCOMING!</h1>
        `;
  }
}
