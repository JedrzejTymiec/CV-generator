import { v4 as uuidv4 } from "uuid";

class Experience {
  constructor(
    id,
    position,
    company,
    location,
    startDate,
    endDate,
    description
  ) {
    this.id = id;
    this.position = position;
    this.company = company;
    this.location = location;
    this.startDate = startDate;
    this.endDate = endDate;
    this.description = description;
  }
}

class experienceCRUD {
  static experienceData(editId) {
    let id;
    if (editId) {
      id = editId;
    } else {
      id = uuidv4();
    }
    let position = document.getElementById("position").value;
    let company = document.getElementById("company").value;
    let location = document.getElementById("location").value;
    let startDate = document.getElementById("exp-start-date").value;
    let endDate = document.getElementById("exp-end-date").value;
    let description = document.getElementById("exp-description").value;

    let experienceData = new Experience(
      id,
      position,
      company,
      location,
      startDate,
      endDate,
      description
    );
    return experienceData;
  }

  static addExperience(job) {
    let experienceDataList = JSON.parse(localStorage.getItem("experienceData"));
    let nr;

    //checks if there is list of jobs to add to
    if (experienceDataList) {
      // loop to check if experienceList conatins job (in case of edition)
      for (var i = 0; experienceDataList.length > i; i++) {
        if (experienceDataList[i].id === job.id) {
          nr = i;
          break;
        }
      }
      // if contains then replace, if not then add
      if (nr >= 0) {
        experienceDataList[nr] = job;
      } else {
        experienceDataList.push(job);
      }
      localStorage.setItem(
        "experienceDataList",
        JSON.stringify(experienceDataList)
      );
    } else {
      //create new list if there isn't one
      localStorage.setItem("experienceData", JSON.stringify([job]));
    }
    this.readExperience();
  }

  static deleteExperience(id) {
    let jobList = JSON.parse(localStorage.getItem("experienceData"));
    let newJobList = jobList.filter((element) => {
      if (element.id != id) {
        return element;
      }
    });
    localStorage.setItem("experienceData", JSON.stringify(newJobList));
  }

  static updateExperience(id) {
    let jobList = JSON.parse(localStorage.getItem("experienceData"));
    return jobList.find((element) => element.id === id);
  }

  static readExperience() {
    let experienceData = JSON.parse(localStorage.getItem("experienceData"));
    let formJobListContainer = document.getElementById("form-job-list");
    let previewJobListContainer = document.getElementById(
      "preview-job-list-container"
    );
    if (experienceData && formJobListContainer) {
      let jobList = experienceData.map((element) => {
        return `
        <li class="form-entry-container">
          <div class="entry-action-icons" data-id=${element.id}>
            <i class="fas fa-edit" data-expEdit data-modal="experience"></i><i class="fas fa-trash-alt" data-expDelete></i>
          </div>
          <ul class="entry-description">
            <li>Okres: <span>${element.startDate} - ${element.endDate}</span></li>
            <li>Stanowisko: <span>${element.position}</span></li>
            <li>Firma: <span>${element.company}</span></li>
            <li>Opis: <span>${element.description}</span>
          </ul>
        </li>`;
      });
      formJobListContainer.innerHTML = jobList.join("");
    }
    if (experienceData) {
      let previewJobList = experienceData.map((element) => {
        return `<div class="job-container">
        <div class="dash"></div>
        <div class="job">
          <h3 class="job-title">${element.position}</h3>
          <h4 class="workplace">${element.company}</h4>
          <p class="time-range">${element.startDate} - ${element.endDate}</p>
          <p class="job-description">${element.description}</p>
        </div>
      </div>`;
      });

      previewJobListContainer.innerHTML = previewJobList.join("");

      if (experienceData.length > 0) {
        document
          .querySelector(
            "#preview-job-list-container .job-container:last-child"
          )
          .setAttribute("id", "first-job");
      }
    }
  }
}

export default experienceCRUD;
