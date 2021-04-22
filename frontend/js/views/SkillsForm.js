import { englishLanguagesList, languageLevelsEn } from "../listOfCoutries.js";
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("skills");
  }

  async getHtml() {
    return `
    <form class="language-form" id="language-form">
      <h1 class="form-title"></h1>
      <ul id="form-languages-list"></ul>
      <div class="form-group">
        <label class="form-label" for="language-input"></label>
        <select id="language-input">
        ${englishLanguagesList}
        </select>
        <span id="language-input-alert" class="input-alert"></span>
      </div>
      <div class="form-group">
        <label class="form-label" for="language-level-input"></label>
        <select id="language-level-input">
          ${languageLevelsEn}
        </select>
      </div>
      <button type="submit" class="add-language add-button">
      </button>
    </form>
    <form class="language-form" id="skills-form">
      <h1 class="form-title"></h1>
      <ul id="form-skills-list"></ul>
      <div class="form-group">
      <label class="form-label" for="skill-input"
        ></label
      >
      <input type="text" id="skill-input" />
      <span id="skill-input-alert" class="input-alert"></span>
    </div>
      <div class="form-group">
        <label class="form-label" for="skill-level-input"></label>
        <select id="skill-level-input">
          <option value="1Trainee">Trainee</option>
          <option value="2Junior">Junior</option>
          <option value="3Mid">Mid</option>
          <option value="4Senior">Senior</option>
          <option value="5Expert">Expert</option>
        </select>
      </div>
      <button type="submit" class="add-language add-button">
      </button>
    </form>
  <h1 class="form-title"></h1>
  <ul id="form-certification-list">
    </ul>
    <button
      data-modal="certification"
      type="button"
      class="add-button open-modal"
    >
    </button>
    <div class="experience-form-footer">
    <a href="/app/experience" data-link>
      <div class="back next-button">
      </div>
    </a>
    <a href="/app/download" data-link>
      <div class="next-button">
      </div>
    </a>
  </div>
        `;
  }
}
