import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("download");
  }

  async getHtml() {
    return `
    <div class="download-wrapper">
          <h1>Congratulations!</h1>
          <h3>Your CV is reday!</h3>
          <h4>Download your CV as PDF file or save it</h4>
          <h4 id="complete-cv-warning">You need to fill required fields first</h4>
        </div>
        <div class="experience-form-footer">
          <div id="download-button" class="back next-button">
            <i class="fas fa-download"></i>Download
          </div>
          <div id="save-cv-button" class="back next-button"><i class="far fa-save"></i>Save</div>
        </div>
        <h1 class="cv-list-title">CV List:</h1>
        <div id="saved-cv-list"><p>No saved cv yet</p></div>
        `;
  }
}
