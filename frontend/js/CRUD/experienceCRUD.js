import { v4 as uuidv4 } from "uuid";

class Experience {
  constructor(
    id,
    position,
    company,
    location,
    expstart,
    expend,
    stillWorking,
    expdescription
  ) {
    this.id = { data: id, isRequired: true };
    this.position = { data: position, isRequired: true };
    this.company = { data: company, isRequired: false };
    this.location = { data: location, isRequired: false };
    this.expstart = { data: expstart, isRequired: true };
    this.expend = { data: expend, isRequired: true };
    this.stillWorking = { data: stillWorking, isRequired: false };
    this.expdescription = { data: expdescription, isRequired: false };
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
    let position = document.getElementById("position-input").value;
    let company = document.getElementById("company-input").value;
    let location = document.getElementById("location-input").value;
    let expStart = document.getElementById("expstart-input").value;
    let expEnd;
    let stillWorking = document.getElementById("expcheck").checked;
    let expDescription = document.getElementById("expdescription-input").value;

    if (stillWorking) {
      expEnd = "now";
    } else {
      expEnd = document.getElementById("expend-input").value;
    }

    let experienceData = new Experience(
      id,
      position,
      company,
      location,
      expStart,
      expEnd,
      stillWorking,
      expDescription
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
        if (experienceDataList[i].id.data === job.id.data) {
          nr = i;
          break;
        }
      }
      // if contains then replace, if not then add
      if (nr >= 0) {
        experienceDataList[nr] = job;
      } else {
        experienceDataList.unshift(job);
      }
      localStorage.setItem(
        "experienceData",
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
      if (element.id.data != id) {
        return element;
      }
    });
    localStorage.setItem("experienceData", JSON.stringify(newJobList));
  }

  static updateExperience(id) {
    let jobList = JSON.parse(localStorage.getItem("experienceData"));
    return jobList.find((element) => element.id.data === id);
  }

  static readExperience() {
    let experienceData = JSON.parse(localStorage.getItem("experienceData"));
    let formJobListContainer = document.getElementById("form-job-list");
    let previewJobListContainer = document.getElementById(
      "preview-job-list-container"
    );
    if (experienceData && experienceData.length !== 0) {
      //move still working to the begining of list
      let stillWorking = [];
      let pastExperience = [];
      experienceData.forEach((element) => {
        if (element.stillWorking.data) {
          stillWorking.push(element);
        } else {
          pastExperience.push(element);
        }
      });
      experienceData = stillWorking.concat(pastExperience);

      if (formJobListContainer) {
        let jobList = experienceData.map((element) => {
          if (localStorage.getItem("language") === "polish") {
            return `
        <li class="form-entry-container">
          <div class="entry-action-icons" data-id=${element.id.data}>
            <i class="fas fa-edit" data-expEdit data-modal="experience"></i><i class="fas fa-trash-alt" data-expDelete></i>
          </div>
          <ul class="entry-description">
            <li>Okres: <span>${element.expstart.data} - ${element.expend.data}</span></li>
            <li>Stanowisko: <span>${element.position.data}</span></li>
            <li>Firma: <span>${element.company.data}</span></li>
            <li>Opis: <span>${element.expdescription.data}</span>
          </ul>
        </li>`;
          } else if (localStorage.getItem("language") === "english") {
            return `
        <li class="form-entry-container">
          <div class="entry-action-icons" data-id=${element.id.data}>
            <i class="fas fa-edit" data-expEdit data-modal="experience"></i><i class="fas fa-trash-alt" data-expDelete></i>
          </div>
          <ul class="entry-description">
            <li>Period of time: <span>${element.expstart.data} - ${element.expend.data}</span></li>
            <li>Position: <span>${element.position.data}</span></li>
            <li>Company: <span>${element.company.data}</span></li>
            <li>Description: <span>${element.expdescription.data}</span>
          </ul>
        </li>`;
          }
        });
        formJobListContainer.innerHTML = jobList.join("");
      }
      if (previewJobListContainer) {
        document.querySelector(".experience-container").style.display = "block";
        let previewJobList = experienceData.map((element) => {
          return `<div class="job-container">
        <div class="dash"></div>
        <div class="job">
          <h3 class="job-title">${element.position.data}</h3>
          <h4 class="workplace">${element.company.data}</h4>
          <p class="time-range">${element.expstart.data} - ${element.expend.data}</p>
          <p class="job-description">${element.expdescription.data}</p>
        </div>
      </div>`;
        });

        previewJobListContainer.innerHTML = previewJobList.join("");
      }

      if (experienceData.length > 0) {
        document
          .querySelector(
            "#preview-job-list-container .job-container:last-child"
          )
          .setAttribute("id", "first-job");
      }
    } else {
      document.querySelector(".experience-container").style.display = "none";
      if (formJobListContainer) {
        formJobListContainer.innerHTML = "";
      }
    }
  }
}

export default experienceCRUD;
