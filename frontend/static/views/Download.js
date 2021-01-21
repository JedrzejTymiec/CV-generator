import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("download");
  }

  async getHtml() {
    return `
        <h1>Download view INCOMING</h1>
        `;
  }
}
