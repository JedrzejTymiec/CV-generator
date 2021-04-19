import { englishCountriesList } from "../listOfCoutries.js";
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("basic");
  }

  async getHtml() {
    return `
    <form id="basic-data-form">
    <h1 class="form-title"></h1>
    <div class="photo-toggle-container">
      <h4 class="form-label"></h4>
      <label class="switch">
        <input type="checkbox" id="photo-display" data-toggle="false">
        <div class="slide-track">
          <div class="slider"></div>
        </div>
      </label>
    </div>
    <div class="photo-container">
      <div class="photo-wrapper">
        <div id="image-field">
          <span class="input-placeholder"></span>
          <input type="file" id="image-input"> 
        </div>
        <div id="delete-photo-button">
        <i class="fas fa-trash-alt"></i>
      </div>
      <div id="save-photo-button">
        <i class="far fa-save"></i>
      </div>
      </div>
      <span id="image-input-alert"></span>
    </div>
    <h1 class="form-title"></h1>
    <div class="form-group">
      <label class="form-label" for="name-input" id="name-input-label"></label>
      <input type="text" id="name-input">
      <span id="name-input-alert" class="input-alert"></span>
    </div>
    <div class="form-group">
      <label class="form-label" for="surname-input" id="surname-input-label"></label>
      <input type="text" id="surname-input">
      <span id="surname-input-alert" class="input-alert"></span>
    </div>
    <div class="form-group">
      <label class="form-label" for="proffesion-input" id="proffesion-input-label"></label>
      <input type="text" id="proffesion-input">
      <span id="proffesion-input-alert" class="input-alert"></span>
    </div>
    <div class="form-group">
      <label class="form-label" for="about-input" id="about-input-label"></label>
      <textarea
          id="about-input"
          maxlength="1000"
        ></textarea>
        <div>
          <span id="about-input-characters-counter" class="characters-counter"></span>
          <span id="about-input-alert" class="input-alert"></span>
        </div>
    </div>
    <button type="submit" class="save-button"></button>
  </form>
  <form id="residence-form">
    <h1 class="form-title"></h1>
    <div class="form-group">
      <label class="form-label" for="country-input" id="country-input-label"></label>
      <select id="country-input">
      ${englishCountriesList}
      </select>
     <span id="country-input-alert" class="input-alert"></span>
    </div>
    <div class="form-group">
      <label class="form-label" for="city-input" id="city-input-label"></label>
      <input type="text" id="city-input">
      <span id="city-input-alert" class="input-alert"></span>
    </div>
    <button type="submit" class="save-button"></button>
  </form>
  <form id="contact-form">
    <h1 class="form-title"></h1>
    <div class="form-group">
      <label class="form-label" for="phone-input" id="phone-input-label"></label>
      <input type="tel" id="phone-input">
      <span id="phone-input-alert" class="input-alert"></span>
    </div>
    <div class="form-group">
      <label class="form-label" for="email-input"></label>
      <input type="email" id="email-input">
      <span id="email-input-alert" class="input-alert"></span>
    </div>
    <div class="form-group">
      <label class="form-label" for="linkedin-input" id="linkedin-input-label"></label>
      <input type="text" id="linkedin-input">
      <span id="linkedin-input-alert" class="input-alert"></span>
    </div>
    <div class="form-group">
      <label class="form-label" for="github-input" id="github-input-label"></label>
      <input type="text" id="github-input">
      <span id="github-input-alert" class="input-alert"></span>
    </div>
    <button type="submit" class="save-button"></button>
    <h4 class="form-label"></h4>
  </form>
  <a href="/app/experience" data-link>
    <div class="next-button" data-valid>
    </div>
  </a>
        `;
  }
}
