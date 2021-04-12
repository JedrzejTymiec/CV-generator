import { v4 as uuidv4 } from "uuid";

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

class educationCRUD {
  static educationData(editId) {
    let id;
    if (editId) {
      id = editId;
    } else {
      id = uuidv4();
    }
    let school = document.getElementById("school-input").value;
    let spec = document.getElementById("specialization-input").value;
    let startDate = document.getElementById("edustart-input").value;
    let endDate;
    let stillLearning = document.getElementById("educheck").checked;
    let description = document.getElementById("edudescription-input").value;

    if (stillLearning) {
      endDate = "now";
    } else {
      endDate = document.getElementById("eduend-input").value;
    }

    let educationData = new Education(
      id,
      school,
      spec,
      startDate,
      endDate,
      stillLearning,
      description
    );
    return educationData;
  }

  static addEducation(edu) {
    let educationDataList = JSON.parse(localStorage.getItem("educationData"));
    let nr;
    //checks if there is list of education to add to
    if (educationDataList) {
      //loop to check if educationList contains edu (in case of edition)
      for (let i = 0; educationDataList.length > i; i++) {
        if (educationDataList[i].id.data === edu.id.data) {
          nr = i;
          break;
        }
      }
      //if contains then replace if not then add
      if (nr >= 0) {
        educationDataList[nr] = edu;
      } else {
        educationDataList.unshift(edu);
      }
      localStorage.setItem("educationData", JSON.stringify(educationDataList));
    } else {
      //create new list if there isn't one
      localStorage.setItem("educationData", JSON.stringify([edu]));
    }
    this.readEducation();
  }

  static deleteEducation(id) {
    let eduList = JSON.parse(localStorage.getItem("educationData"));
    let newEducationList = eduList.filter((element) => {
      if (element.id.data != id) {
        return element;
      }
    });
    localStorage.setItem("educationData", JSON.stringify(newEducationList));
  }

  static updateEducation(id) {
    let eduList = JSON.parse(localStorage.getItem("educationData"));
    return eduList.find((element) => element.id.data === id);
  }

  static readEducation() {
    let educationData = JSON.parse(localStorage.getItem("educationData"));
    let formEducationListContainer = document.getElementById(
      "form-education-list"
    );
    let previewEducationListContainer = document.getElementById(
      "preview-education-list-container"
    );
    if (educationData && educationData.length !== 0) {
      //move still learning to the begining of list

      let stillLearning = [];
      let pastExperience = [];
      educationData.forEach((element) => {
        if (element.stillLearning.data) {
          stillLearning.push(element);
        } else {
          pastExperience.push(element);
        }
      });
      educationData = stillLearning.concat(pastExperience.reverse());

      if (formEducationListContainer) {
        let eduList = educationData.map((element) => {
          if (localStorage.getItem("language") === "polish") {
            return `
        <li class="form-entry-container">
        <div class="entry-action-icons" data-id=${element.id.data}>
          <i class="fas fa-edit" data-eduedit data-modal="education"></i><i class="fas fa-trash-alt" data-edudelete></i>
        </div>
        <ul class="entry-description">
          <li>Okres: <span>${element.edustart.data} - ${element.eduend.data}</span></li>
          <li>Kierunek: <span>${element.specialization.data}</span></li>
          <li>Nazwa szkoły: <span>${element.school.data}</span></li>
          <li>Opis: <span>${element.edudescription.data}</span>
        </ul>
      </li>`;
          } else if (localStorage.getItem("language") === "english") {
            return `
        <li class="form-entry-container">
        <div class="entry-action-icons" data-id=${element.id.data}>
          <i class="fas fa-edit" data-eduedit data-modal="education"></i><i class="fas fa-trash-alt" data-edudelete></i>
        </div>
        <ul class="entry-description">
          <li>Period of time: <span>${element.edustart.data} - ${element.eduend.data}</span></li>
          <li>Specialization: <span>${element.specialization.data}</span></li>
          <li>Shool: <span>${element.school.data}</span></li>
          <li>Description: <span>${element.edudescription.data}</span>
        </ul>
      </li>`;
          }
        });
        formEducationListContainer.innerHTML = eduList.join("");
      }
      if (previewEducationListContainer) {
        document.querySelector(".education-container").style.display = "block";
        let previewEduList = educationData.map((element) => {
          return `<div class="study-container">
        <div class="dash"></div>
        <div class="study">
          <h3 class="field-of-study">${element.specialization.data}</h3>
          <h4 class="school-name">${element.school.data}</h4>
          <p class="time-range">${element.edustart.data} - ${element.eduend.data}</p>
        </div>
      </div>`;
        });
        previewEducationListContainer.innerHTML = previewEduList.join("");
      }
    } else {
      document.querySelector(".education-container").style.display = "none";
      if (formEducationListContainer) {
        formEducationListContainer.innerHTML = "";
      }
    }
  }
}

export default educationCRUD;
