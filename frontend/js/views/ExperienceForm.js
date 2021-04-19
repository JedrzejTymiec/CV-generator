import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("experience");
  }

  async getHtml() {
    return `
    <h1 class="form-title"></h1>
    <ul id="form-job-list"></ul>
    <button data-modal="experience" type="button" class="add-button open-modal">
    </button>
    <h1 class="form-title"></h1>
    <ul id="form-education-list"></ul>
    <button data-modal="education" type="button" class="add-button open-modal">
    </button>
    <h1 class="form-title"></h1>
    <ul id="form-projects-list"></ul>
    <button data-modal="projects" type="button" class="add-button open-modal">
    </button>
    <div class="experience-form-footer">
      <a href="/app/basic" data-link>
        <div class="back next-button"></div>
      </a>
      <a href="/app/skills" data-link>
        <div class="next-button"></div>
      </a>
    </div>
        `;
  }
}
