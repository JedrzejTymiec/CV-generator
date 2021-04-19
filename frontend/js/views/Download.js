import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("download");
  }

  async getHtml() {
    return `
    <div class="download-wrapper">
          <h1></h1>
          <h3></h3>
          <h4></h4>
          <h4 id="complete-cv-warning"></h4>
        </div>
        <div class="experience-form-footer">
          <div id="download-button" class="back next-button">
          </div>
          <div id="save-cv-button" class="back next-button"></div>
        </div>
        <h1 class="cv-list-title"></h1>
        <div id="saved-cv-list"><p></p></div>
        `;
  }
}
