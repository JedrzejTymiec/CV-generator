class previewUpdate {
  static basicUpdate() {
    let basicData = JSON.parse(localStorage.getItem("basicData"));

    document.querySelector(".about h1").innerText =
      basicData.name + " " + basicData.surname;
  }

  static residenceUpdate() {
    let residenceData = JSON.parse(localStorage.getItem("residenceData"));

    document.getElementById("residence").innerText =
      residenceData.city + ", " + residenceData.country;
  }

  static contactUpdate() {
    let contantData = JSON.parse(localStorage.getItem("contactData"));

    document.getElementById("phone").innerText = contantData.phone;
    document.getElementById("email").innerText = contantData.email;
  }

  static addNewJob(job) {
    let experienceData = JSON.parse(localStorage.getItem("experienceDataList"));
    if (experienceData) {
      experienceData.push(job);
      localStorage.setItem(
        "experienceDataList",
        JSON.stringify(experienceData)
      );
      this.refreshExperience();
    } else {
      localStorage.setItem("experienceDataList", JSON.stringify([job]));
    }
  }

  static refreshExperience() {
    let experienceData = JSON.parse(localStorage.getItem("experienceDataList"));
    let jobListContainer = document.getElementById("form-job-list");
    let newLi = document.createElement("li");
    newLi.className = "form-job-container";

    let jobList = experienceData.map((element) => {
      return `
      <li class="form-job-container">
        <div class="job-action-icons">
          <i class="fas fa-edit"></i><i class="fas fa-trash-alt"></i>
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

  static educationUpdate() {
    console.log("FUNKCJA DO ZROBIENIA!!!");
  }

  static languageUpdate() {
    console.log("FUNKCJA DO ZROBIENIA!!!");
  }
}

export default previewUpdate;
