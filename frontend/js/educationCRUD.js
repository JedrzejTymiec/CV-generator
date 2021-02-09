class educationCRUD {
  static addEducation(edu) {
    let educationDataList = JSON.parse(
      localStorage.getItem("educationDataList")
    );
    let nr;
    //checks if there is list of education to add to
    if (educationDataList) {
      //loop to check if educationList contains edu (in case of edition)
      for (let i = 0; educationDataList.length > i; i++) {
        if (educationDataList[i].id === edu.id) {
          nr = i;
          break;
        }
      }
      //if contains then replace if not then add
      if (nr >= 0) {
        educationDataList[nr] = edu;
      } else {
        educationDataList.push(edu);
      }
      localStorage.setItem(
        "educationDataList",
        JSON.stringify(educationDataList)
      );
    } else {
      //create new list if there isn't one
      localStorage.setItem("educationDataList", JSON.stringify([edu]));
    }
    this.readEducation();
  }

  static deleteEducation(id) {
    let eduList = JSON.parse(localStorage.getItem("educationDataList"));
    let newEducationList = eduList.filter((element) => {
      if (element.id != id) {
        return element;
      }
    });
    localStorage.setItem("educationDataList", JSON.stringify(newEducationList));
  }

  static updateEducation(id) {
    let eduList = JSON.parse(localStorage.getItem("educationDataList"));
    return eduList.find((element) => element.id === id);
  }

  static readEducation() {
    let educationData = JSON.parse(localStorage.getItem("educationDataList"));
    let formEducationListContainer = document.getElementById(
      "form-education-list"
    );
    let previewEducationListContainer = document.getElementById(
      "preview-education-list-container"
    );
    if (educationData && formEducationListContainer) {
      let eduList = educationData.map((element) => {
        return `
        <li class="form-entry-container">
        <div class="entry-action-icons" data-id=${element.id}>
          <i class="fas fa-edit" data-eduedit data-modal="education"></i><i class="fas fa-trash-alt" data-edudelete></i>
        </div>
        <ul class="entry-description">
          <li>Okres: <span>${element.startDate} - ${element.endDate}</span></li>
          <li>Kierunek: <span>${element.spec}</span></li>
          <li>Nazwa szkoły: <span>${element.school}</span></li>
          <li>Poziom: <span>${element.educationLevel}</span>
          <li>Opis: <span>${element.description}</span>
        </ul>
      </li>`;
      });
      formEducationListContainer.innerHTML = eduList.join("");
    }
    if (educationData && previewEducationListContainer) {
      let previewEduList = educationData.map((element) => {
        return `<div class="study-container">
        <div class="dash"></div>
        <div class="study">
          <h3 class="field-of-study">${element.spec}</h3>
          <h4 class="school-name">${element.school}</h4>
          <p class="time-range">${element.startDate} - ${element.endDate}</p>
        </div>
      </div>`;
      });
      previewEducationListContainer.innerHTML = previewEduList.join("");
    }
  }
}

export default educationCRUD;
