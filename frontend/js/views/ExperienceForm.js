import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("experience");
  }

  async getHtml() {
    return `
    <h1 class="form-title">Work experience</h1>
<ul id="form-job-list"></ul>
<button data-modal="experience" type="button" class="add-button open-modal">
  <i data-modal="experience" class="fas fa-plus"></i>Add
</button>
<h1 class="form-title">Education</h1>
<ul id="form-education-list"></ul>
<button data-modal="education" type="button" class="add-button open-modal">
  <i data-modal="education" class="fas fa-plus"></i>Add
</button>
<h1 class="form-title">Projects</h1>
<ul id="form-projects-list"></ul>
<button data-modal="projects" type="button" class="add-button open-modal">
  <i data-modal="projects" class="fas fa-plus"></i>Add
</button>
<div class="experience-form-footer">
  <a href="/app/basic" data-link>
    <div class="back next-button"><i class="fas fa-arrow-left"></i>Back</div>
  </a>
  <a href="/app/skills" data-link>
    <div class="next-button">Next<i class="fas fa-arrow-right"></i></div>
  </a>
</div>
        `;
  }
}
