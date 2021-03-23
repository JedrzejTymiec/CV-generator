import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("experience");
  }

  async getHtml() {
    return `
    <h1 class="form-title">Experience</h1>
    <ul id="form-job-list">
    </ul>
    <button
      data-modal="experience"
      type="button"
      class="add-button open-modal"
    >
      <i data-modal="experience" class="fas fa-plus"></i>Add
    </button>
    <h1 class="form-title">Education</h1>
    <ul id="form-education-list">
    </ul>
    <button
      data-modal="education"
      type="button"
      class="add-button open-modal"
    >
      <i data-modal="education" class="fas fa-plus"></i>Add
    </button>
    <form class="language-form" id="language-form">
      <h1 class="form-title">Languages</h1>
      <ul id="form-languages-container"></ul>
      <div class="form-group">
        <label class="form-label" for="language-input">Language</label>
        <select id="language-input">
          <option selected="selected" value=""> - </option>
          <option value="Afrikaans">Afrikaans</option>
          <option value="Albanian">Albanian</option>
          <option value="Arabic">Arabic</option>
          <option value="Armenian">Armenian</option>
          <option value="Basque">Basque</option>
          <option value="Bengali">Bengali</option>
          <option value="Bulgarian">Bulgarian</option>
          <option value="Catalan">Catalan</option>
          <option value="Cambodian">Cambodian</option>
          <option value="Chinese (Mandarin)">Chinese (Mandarin)</option>
          <option value="Croatian">Croatian</option>
          <option value="Czech">Czech</option>
          <option value="Danish">Danish</option>
          <option value="Dutch">Dutch</option>
          <option value="English">English</option>
          <option value="Estonian">Estonian</option>
          <option value="Fiji">Fiji</option>
          <option value="Finnish">Finnish</option>
          <option value="French">French</option>
          <option value="Georgian">Georgian</option>
          <option value="German">German</option>
          <option value="Greek">Greek</option>
          <option value="Gujarati">Gujarati</option>
          <option value="Hebrew">Hebrew</option>
          <option value="Hindi">Hindi</option>
          <option value="Hungarian">Hungarian</option>
          <option value="Icelandic">Icelandic</option>
          <option value="Indonesian">Indonesian</option>
          <option value="Irish">Irish</option>
          <option value="Italian">Italian</option>
          <option value="Japanese">Japanese</option>
          <option value="Javanese">Javanese</option>
          <option value="Korean">Korean</option>
          <option value="Latin">Latin</option>
          <option value="Latvian">Latvian</option>
          <option value="Lithuanian">Lithuanian</option>
          <option value="Macedonian">Macedonian</option>
          <option value="Malay">Malay</option>
          <option value="Malayalam">Malayalam</option>
          <option value="Maltese">Maltese</option>
          <option value="Maori">Maori</option>
          <option value="Marathi">Marathi</option>
          <option value="Mongolian">Mongolian</option>
          <option value="Nepali">Nepali</option>
          <option value="Norwegian">Norwegian</option>
          <option value="Persian">Persian</option>
          <option value="Polish">Polish</option>
          <option value="Portuguese">Portuguese</option>
          <option value="Punjabi">Punjabi</option>
          <option value="Quechua">Quechua</option>
          <option value="Romanian">Romanian</option>
          <option value="Russian">Russian</option>
          <option value="Samoan">Samoan</option>
          <option value="Serbian">Serbian</option>
          <option value="Slovak">Slovak</option>
          <option value="Slovenian">Slovenian</option>
          <option value="Spanish">Spanish</option>
          <option value="Swahili">Swahili</option>
          <option value="Swedish">Swedish</option>
          <option value="Tamil">Tamil</option>
          <option value="Tatar">Tatar</option>
          <option value="Telugu">Telugu</option>
          <option value="Thai">Thai</option>
          <option value="Tibetan">Tibetan</option>
          <option value="Tonga">Tonga</option>
          <option value="Turkish">Turkish</option>
          <option value="Ukrainian">Ukrainian</option>
          <option value="Urdu">Urdu</option>
          <option value="Uzbek">Uzbek</option>
          <option value="Vietnamese">Vietnamese</option>
          <option value="Welsh">Welsh</option>
          <option value="Xhosa">Xhosa</option>
        </select>
        <span id="language-input-alert" class="input-alert"></span>
      </div>
      <div class="form-group">
        <label class="form-label" for="language-level-input">Level</label>
        <select id="language-level-input">
          <option selected="selected" value="1A1/A2 - Beginner">A1/A2 - Beginner</option>
          <option value="2B1 - Intermediate">B1 - Intermediate</option>
          <option value="3B2 - Upper Intermediate">B2 - Upper Intermediate</option>
          <option value="4C1 - Advanced">C1 - Advanced</option>
          <option value="5C2 - Proficient">C2 - Proficient</option>
        </select>
      </div>
      <button type="submit" class="add-language add-button">
        <i class="fas fa-plus"></i>Add
      </button>
    </form>
    <div class="experience-form-footer">
      <a href="/app/basic" data-link>
        <div class="back next-button">
          <i class="fas fa-arrow-left"></i>Back
        </div>
      </a>
      <a href="/app/skills" data-link>
        <div class="next-button">
          Next<i class="fas fa-arrow-right"></i>
        </div>
      </a>
    </div>
        `;
  }
}
