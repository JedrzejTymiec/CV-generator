import { v4 as uuidv4 } from "uuid";
import langSkillLevel from "../langSkillLevel.js";
import completeCvCRUD from "./completeCvCRUD.js";

class Experience {
  constructor(
    id,
    position,
    company,
    expstart,
    expend,
    stillWorking,
    expdescription
  ) {
    this.id = { data: id, isRequired: true };
    this.position = { data: position, isRequired: true };
    this.company = { data: company, isRequired: false };
    this.expstart = { data: expstart, isRequired: true };
    this.expend = { data: expend, isRequired: true };
    this.stillWorking = { data: stillWorking, isRequired: false };
    this.expdescription = { data: expdescription, isRequired: false };
  }
}

class Education {
  constructor(
    id,
    school,
    spec,
    startDate,
    endDate,
    stillLearning,
    description
  ) {
    this.id = { data: id, isRequired: true };
    this.school = { data: school, isRequired: true };
    this.specialization = { data: spec, isRequired: false };
    this.edustart = { data: startDate, isRequired: true };
    this.eduend = { data: endDate, isRequired: true };
    this.stillLearning = { data: stillLearning, isRequired: false };
    this.edudescription = { data: description, isRequired: false };
  }
}

class Certification {
  constructor(id, name, organizer, participationDate, description) {
    this.id = { data: id, isRequired: true };
    this.certname = { data: name, isRequired: true };
    this.organizer = { data: organizer, isRequired: true };
    this.certdate = { data: participationDate, isRequired: true };
    this.cerdescription = { data: description, isRequired: false };
  }
}

class Project {
  constructor(id, projectName, link, prodescription) {
    this.id = { data: id, isRequired: true };
    this.projectname = { data: projectName, isRequired: true };
    this.link = { data: link, isRequired: true };
    this.prodescription = { data: prodescription, isRequired: false };
  }
}

class Language {
  constructor(id, language, level) {
    this.id = { data: id, isRequired: true };
    this.language = { data: language, isRequired: true };
    this.level = { data: level, isRequired: true };
  }
}

class Skill {
  constructor(id, skill, level) {
    this.id = { data: id, isRequired: true };
    this.skill = { data: skill, isRequired: true };
    this.level = { data: level, isRequired: true };
  }
}

class CRUD {
  static newData(name, editId) {
    let id;
    if (editId) {
      id = editId;
    } else {
      id = uuidv4();
    }

    let listOfInputs = document.querySelectorAll(
      `#${name}-form .form-group input, #${name}-form .form-body textarea, #${name}-form .form-group select`
    );
    let values = new Array();
    let newData;

    for (let i = 0; listOfInputs.length > i; i++) {
      let value;
      if (listOfInputs[i].type === "checkbox") {
        if (listOfInputs[i].checked) {
          let polish = localStorage.getItem("language");
          values[i - 1] = `${polish ? "teraz" : "now"}`;
        }
        value = listOfInputs[i].checked;
      } else {
        value = listOfInputs[i].value;
      }
      values.push(value);
    }
    switch (name) {
      case "experience":
        newData = new Experience(
          id,
          values[0],
          values[1],
          values[2],
          values[3],
          values[4],
          values[5]
        );
        break;
      case "education":
        newData = new Education(
          id,
          values[0],
          values[1],
          values[2],
          values[3],
          values[4],
          values[5]
        );
        break;
      case "certification":
        newData = new Certification(
          id,
          values[0],
          values[1],
          values[2],
          values[3]
        );
        break;
      case "projects":
        newData = new Project(id, values[0], values[1], values[2]);
        break;
      case "language":
        newData = new Language(id, values[0], values[1]);
        break;
      case "skills":
        newData = new Skill(id, values[0], values[1]);
    }
    return newData;
  }

  static addData(name, data) {
    let dataList = JSON.parse(localStorage.getItem(`${name}Data`));
    let nr;

    //check if there is list to add to
    if (dataList) {
      //loop to check if list contains data (in case of edition)
      for (let i = 0; dataList.length > i; i++) {
        if (dataList[i].id.data === data.id.data) {
          nr = i;
          break;
        }
      }
      if (nr >= 0) {
        dataList[nr] = data;
      } else {
        if (name === "skills" || name === "languages") {
          dataList.push(data);
        } else {
          dataList.unshift(data);
        }
      }
      localStorage.setItem(`${name}Data`, JSON.stringify(dataList));
    } else {
      //create new list if there isn,t one
      localStorage.setItem(`${name}Data`, JSON.stringify([data]));
    }

    this.readData(`${name}`);
  }

  static deleteData(name, id) {
    let dataList = JSON.parse(localStorage.getItem(`${name}Data`));
    let newDataList = dataList.filter((element) => {
      if (element.id.data != id) {
        return element;
      }
    });
    localStorage.setItem(`${name}Data`, JSON.stringify(newDataList));
    if (localStorage.getItem("currentCvId")) {
      completeCvCRUD.saveCvHandle(localStorage.getItem("currentCvId"));
    }
    this.readData(name);
  }

  static findData(name, id) {
    let data = JSON.parse(localStorage.getItem(`${name}Data`));
    return data.find((element) => element.id.data === id);
  }

  static readData(name) {
    let data = JSON.parse(localStorage.getItem(`${name}Data`));
    let formContainer = document.getElementById(`form-${name}-list`);
    let previewContainer = document.getElementById(`preview-${name}-container`);

    if (data && data.length !== 0) {
      //move still working/learning to the begining of list
      let still = [];
      let past = [];
      data.forEach((element) => {
        switch (name) {
          case "experience":
            if (element.stillWorking.data) {
              still.push(element);
            } else {
              past.push(element);
            }
            data = still.concat(past);
            break;
          case "education":
            if (element.stillLearning.data) {
              still.push(element);
            } else {
              past.push(element);
            }
            data = still.concat(past);
            break;
        }
      });
      if (formContainer && formContainer != null) {
        let polish;
        if (localStorage.getItem("language") === "polish") {
          polish = true;
        } else {
          polish = false;
        }
        let formEntries;
        switch (name) {
          case "experience":
            formEntries = data.map((element) => {
              return `
                <li class="form-entry-container">
                    <div class="entry-action-icons" data-id=${element.id.data}>
                        <i class="fas fa-edit" data-expEdit data-modal="experience"></i><i class="fas fa-trash-alt" data-expDelete></i>
                    </div>
                    <ul class="entry-description">
                        <li>${polish ? "Okres" : "Period of time:"}: <span>${
                element.expstart.data
              } - ${element.expend.data}</span></li>
                        <li>${polish ? "Stanowisko" : "Position"}: <span>${
                element.position.data
              }</span></li>
                        <li>${polish ? "Firma" : "Company"}: <span>${
                element.company.data
              }</span></li>
                        <li>${polish ? "Opis" : "Description"}: <span>${
                element.expdescription.data
              }</span>
                    </ul>
                </li>`;
            });
            break;
          case "education":
            formEntries = data.map((element) => {
              return `
                <li class="form-entry-container">
                    <div class="entry-action-icons" data-id=${element.id.data}>
                        <i class="fas fa-edit" data-eduedit data-modal="education"></i><i class="fas fa-trash-alt" data-edudelete></i>
                    </div>
                    <ul class="entry-description">
                        <li>${polish ? "Okres" : "Period of time"}: <span>${
                element.edustart.data
              } - ${element.eduend.data}</span></li>
                        <li>${polish ? "Kierunek" : "Specialization"}: <span>${
                element.specialization.data
              }</span></li>
                        <li>${polish ? "Nazwa szkoły" : "Shool"}: <span>${
                element.school.data
              }</span></li>
                        <li>${polish ? "Opis" : "Description"}: <span>${
                element.edudescription.data
              }</span>
                    </ul>
                </li>`;
            });
            break;
          case "certification":
            formEntries = data.map((element) => {
              return `
              <li class="form-entry-container">
              <div class="entry-action-icons" data-id=${element.id.data}>
                <i class="fas fa-edit" data-ceredit data-modal="certification"></i><i class="fas fa-trash-alt" data-cerdelete></i>
              </div>
              <ul class="entry-description">
                <li>${
                  polish ? "Data uczestnictwa" : "Participation date"
                }: <span>${element.certdate.data}</span></li>
                <li>${polish ? "Nazwa" : "Name"}: <span>${
                element.certname.data
              }</span></li>
                <li>${polish ? "Organizator" : "Organizer"}: <span>${
                element.organizer.data
              }</span></li>
                <li>${polish ? "Opis" : "Description"}: <span>${
                element.cerdescription.data
              }</span>
              </ul>
            </li>`;
            });
            break;
          case "projects":
            formEntries = data.map((element) => {
              return `
                <li class="form-entry-container">
                    <div class="entry-action-icons" data-id=${element.id.data}>
                        <i class="fas fa-edit" data-proEdit data-modal="projects"></i><i class="fas fa-trash-alt" data-proDelete></i>
                    </div>
                    <ul class="entry-description">
                      <li>${polish ? "Nazwa" : "Name"}: <span>${
                element.projectname.data
              }</span></li>
                      <li>Link: <span>${element.link.data}</span></li>
                      <li>${polish ? "Opis" : "Description"}: <span>${
                element.prodescription.data
              }</span>
                    </ul>
                </li>`;
            });
            break;
          case "languages":
            formEntries = data.map((element) => {
              return `
              <li class="form-language-container" data-id=${element.id.data}>
                      <span>${
                        element.language.data
                      }: ${element.level.data.substring(1)}
                      </span> <i class="fas fa-times" data-landelete></i>
                  </li>`;
            });
            break;
          case "skills":
            formEntries = data.map((element) => {
              return `
              <li class="form-skill-container" data-id=${element.id.data}>
                    <span>${element.skill.data}: ${element.level.data.substring(
                1
              )}
                    </span> <i class="fas fa-times" data-skidelete></i>
                </li>`;
            });
            break;
        }
        formContainer.innerHTML = formEntries.join("");
      }
      if (previewContainer && previewContainer != null) {
        document.querySelector(`.${name}-container`).style.display = "block";
        let previewEntries;
        switch (name) {
          case "experience":
            previewEntries = data.map((element) => {
              return `
                <div class="job-container">
                    <div class="dash"></div>
                    <div class="job">
                        <h3 class="job-title">${element.position.data}</h3>
                        <h4 class="workplace">${element.company.data}</h4>
                        <p class="time-range">${element.expstart.data} - ${element.expend.data}</p>
                        <p class="job-description">${element.expdescription.data}</p>
                    </div>
                </div>`;
            });
            break;
          case "education":
            previewEntries = data.map((element) => {
              return `
                <div class="study-container">
                    <div class="dash"></div>
                    <div class="study">
                        <h3 class="field-of-study">${element.specialization.data}</h3>
                        <h4 class="school-name">${element.school.data}</h4>
                        <p class="time-range">${element.edustart.data} - ${element.eduend.data}</p>
                    </div>
                </div>`;
            });
            break;
          case "certification":
            previewEntries = data.map((element) => {
              return `
                <div class="course-container">
                    <h3 class="course-name">${element.certname.data}</h3>
                    <h4 class="course-organizer">${element.organizer.data}</h4>
                    <p class="course-description">${element.cerdescription.data}</p>
                </div>`;
            });

            break;
          case "projects":
            previewEntries = data.map((element) => {
              return `
                <div class="project-container">
                    <div class="project"">
                      <h3 class="project-name">${element.projectname.data}</h3>
                      <a href="${element.link.data}" target="_blank"><h4 class="project-link">${element.link.data}</h4></a>
                      <p class="project-description">${element.prodescription.data}</p>
                    </div>
                </div>`;
            });
            break;
          case "languages":
            previewEntries = data.map((element) => {
              return `<div class="language-container">
                  <h3 class="language">${element.language.data}</h3>
                  <p class="language-level">${element.level.data.substring(
                    1
                  )}</p>
                  <div class="language-level-dot">
                    <div id="${element.language.data}i" class="inner-dot"></div>
                    <div id="plo" data-lvl="1" class="outer-dot"></div>
                  </div>
                  <div id="Polish" class="language-level-scale" data-lvl="5">
                    <div>
                      <div id="${element.language.data}1" class="inner"></div>
                      <div class="level"></div>
                    </div>
                    <div>
                      <div id="${element.language.data}2" class="inner"></div>
                      <div class="level"></div>
                    </div>
                    <div>
                      <div id="${element.language.data}3" class="inner"></div>
                      <div class="level"></div>
                    </div>
                    <div>
                      <div id="${element.language.data}4" class="inner"></div>
                      <div class="level"></div>
                    </div>
                    <div>
                      <div id="${element.language.data}5" class="inner"></div>
                      <div class="level"></div>
                    </div>
                  </div>
                </div>`;
            });
            break;
          case "skills":
            previewEntries = data.map((element) => {
              let value;
              switch (element.level.data.charAt(0)) {
                case "1":
                  value = 20;
                  break;
                case "2":
                  value = 40;
                  break;
                case "3":
                  value = 60;
                  break;
                case "4":
                  value = 80;
                  break;
                case "5":
                  value = 100;
                  break;
              }
              return `<li>
                ${element.skill.data}
                <div id="js" class="skill-level">
                  <div>
                    <input
                      disabled
                      type="range"
                      value="${value}"
                      min="1"
                      max="100"
                      style = "background:
                        linear-gradient(to right, var(--mainColor) 0%, var(--mainColor) ${value}%, #fff ${value}%, #fff 100%);"
                    />
                  </div>
                  <div>
                    <div id="${element.skill.data}1" class="inner"></div>
                    <div class="level"></div>
                  </div>
                  <div>
                    <div id="${element.skill.data}2" class="inner"></div>
                    <div class="level"></div>
                  </div>
                  <div>
                    <div id="${element.skill.data}3" class="inner"></div>
                    <div class="level"></div>
                  </div>
                  <div>
                    <div id="${element.skill.data}4" class="inner"></div>
                    <div class="level"></div>
                  </div>
                  <div>
                    <div id="${element.skill.data}5" class="inner"></div>
                    <div class="level"></div>
                  </div>
                </div>
              </li>`;
            });
        }
        previewContainer.innerHTML = previewEntries.join("");
        // set language level scales
        if (name === "languages") {
          data.forEach((element) => {
            langSkillLevel.creativeLanguageLevel(
              element.level.data.charAt(0),
              element.language.data
            );
            langSkillLevel.radioButtonSkills(
              element.language.data,
              element.level.data.charAt(0)
            );
          });
        } else if (name === "skills") {
          data.forEach((element) => {
            langSkillLevel.radioButtonSkills(
              element.skill.data,
              element.level.data.charAt(0)
            );
          });
        }
        if (name === "experience" && data.length > 0) {
          document
            .querySelector(
              "#preview-experience-container .job-container:last-child"
            )
            .setAttribute("id", "first-job");
        }
      }
    } else {
      document.querySelector(`.${name}-container`).style.display = "none";
      if (formContainer) {
        formContainer.innerHTML = "";
      }
    }
  }
}

export default CRUD;
