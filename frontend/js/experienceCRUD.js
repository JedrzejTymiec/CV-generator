class experienceCRUD {
  static addExperience(job) {
    let experienceDataList = JSON.parse(
      localStorage.getItem("experienceDataList")
    );
    let nr;
    // loop to check if experienceList conatins job (in case of edition)
    for (var i = 0; experienceDataList.length > i; i++) {
      if (experienceDataList[i].id === job.id) {
        nr = i;
        break;
      }
    }
    //checks if there is list of jobs to add to
    if (experienceDataList) {
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
      localStorage.setItem("experienceDataList", JSON.stringify([job]));
    }
    this.readExperience();
  }

  static deleteExperience(id) {
    let jobList = JSON.parse(localStorage.getItem("experienceDataList"));
    let newJobList = jobList.filter((element) => {
      if (element.id != id) {
        return element;
      }
    });
    localStorage.setItem("experienceDataList", JSON.stringify(newJobList));
  }

  static updateExperience(id) {
    let jobList = JSON.parse(localStorage.getItem("experienceDataList"));
    return jobList.find((element) => element.id === id);
  }

  static readExperience() {
    let experienceData = JSON.parse(localStorage.getItem("experienceDataList"));
    let jobListContainer = document.getElementById("form-job-list");
    let newLi = document.createElement("li");
    newLi.className = "form-job-container";

    let jobList = experienceData.map((element) => {
      return `
        <li class="form-job-container">
          <div class="job-action-icons" data-id=${element.id}>
            <i class="fas fa-edit" data-edit data-modal="experience"></i><i class="fas fa-trash-alt" data-delete></i>
          </div>
          <ul class="job-description">
            <li>Okres: <span>${element.startDate} - ${element.endDate}</span></li>
            <li>Stanowisko: <span>${element.position}</span></li>
            <li>Firma: <span>${element.company}</span></li>
            <li>Opis: <span>${element.description}</span>
          </ul>
        </li>`;
    });

    jobListContainer.innerHTML = jobList.join("");
  }
}

export default experienceCRUD;
