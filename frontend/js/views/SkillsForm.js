import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("skills");
  }

  async getHtml() {
    return `
    <form id="skills-form">
    <h1 class="form-title">Skills</h1>
    <ul id="form-skills-container"></ul>
    <div class="form-group">
      <label class="form-label" for="skill-input"
        >Enter your skill</label
      >
      <input type="text" id="skill-input" />
    </div>
    <button type="submit" class="add-language add-button">
      <i class="fas fa-plus"></i>Add
    </button>
  </form>
  <h1 class="form-title">Certifications</h1>
  <ul id="form-certification-list">
    </ul>
    <button
      data-modal="certification"
      type="button"
      class="add-button open-modal"
    >
      <i data-modal="certification" class="fas fa-plus"></i>Add
    </button>
    <div class="experience-form-footer">
    <a href="/app/experience" data-link>
      <div class="back next-button">
        <i class="fas fa-arrow-left"></i>Back
      </div>
    </a>
    <a href="/app/download" data-link>
      <div class="next-button">
        Done<i class="fas fa-arrow-right"></i>
      </div>
    </a>
  </div>
        `;
  }
}
