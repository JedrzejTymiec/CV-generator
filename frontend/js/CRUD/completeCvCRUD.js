import { v4 as uuidv4 } from "uuid";
import { navigateTo } from "../router.js";
import validation from "../validation.js";

class completeCV {
  constructor(
    id,
    photo,
    basic,
    residence,
    contact,
    experience,
    education,
    languages,
    skills,
    certification
  ) {
    this.id = id;
    this.photo = photo;
    this.basic = basic;
    this.residence = residence;
    this.contact = contact;
    this.experience = experience;
    this.education = education;
    this.languages = languages;
    this.skills = skills;
    this.certification = certification;
  }
}

class completeCvCRUD {
  static completeCvData(editId) {
    let id;
    if (editId) {
      id = editId;
    } else {
      id = uuidv4();
    }
    let photoData = JSON.parse(localStorage.getItem("photoData"));
    let basicData = JSON.parse(localStorage.getItem("basicData"));
    let residenceData = JSON.parse(localStorage.getItem("residenceData"));
    let contactData = JSON.parse(localStorage.getItem("contactData"));
    let experienceData = JSON.parse(localStorage.getItem("experienceData"));
    let educationData = JSON.parse(localStorage.getItem("educationData"));
    let languagesData = JSON.parse(localStorage.getItem("languagesData"));
    let skillsData = JSON.parse(localStorage.getItem("skillsData"));
    let certificationData = JSON.parse(
      localStorage.getItem("certificationData")
    );

    let newCv = new completeCV(
      id,
      photoData,
      basicData,
      residenceData,
      contactData,
      experienceData,
      educationData,
      languagesData,
      skillsData,
      certificationData
    );
    return newCv;
  }

  static addCv(data) {
    let cvData = JSON.parse(localStorage.getItem("completeCvList"));
    let nr;
    if (cvData) {
      for (let i = 0; cvData.length > i; i++) {
        if (cvData[i].id === data.id) {
          nr = i;
          break;
        }
      }
      if (nr >= 0) {
        cvData[nr] = data;
      } else {
        cvData.push(data);
      }
      localStorage.setItem("completeCvList", JSON.stringify(cvData));
    } else {
      localStorage.setItem("completeCvList", JSON.stringify([data]));
    }
    this.readCv();
  }

  static deleteCv(id) {
    let cvData = JSON.parse(localStorage.getItem("completeCvList"));
    let newCvData = cvData.filter((element) => {
      if (element.id != id) {
        return element;
      }
    });
    localStorage.setItem("completeCvList", JSON.stringify(newCvData));
  }

  static updateCv(id) {
    let cvData = JSON.parse(localStorage.getItem("completeCvList"));
    let cvToEdit = cvData.find((element) => element.id === id);
    localStorage.setItem("currentCvId", cvToEdit.id);
    localStorage.setItem("photoData", JSON.stringify(cvToEdit.photo));
    localStorage.setItem("basicData", JSON.stringify(cvToEdit.basic));
    localStorage.setItem("residenceData", JSON.stringify(cvToEdit.residence));
    localStorage.setItem("contactData", JSON.stringify(cvToEdit.contact));
    localStorage.setItem("experienceData", JSON.stringify(cvToEdit.experience));
    localStorage.setItem("educationData", JSON.stringify(cvToEdit.education));
    localStorage.setItem("languagesData", JSON.stringify(cvToEdit.languages));
    localStorage.setItem("skillsData", JSON.stringify(cvToEdit.skills));
    localStorage.setItem(
      "certificationData",
      JSON.stringify(cvToEdit.certification)
    );
  }

  static readCv() {
    let cvData = JSON.parse(localStorage.getItem("completeCvList"));
    let cvListContainer = document.getElementById("saved-cv-list");
    if (cvData && cvListContainer) {
      let cvList = cvData.map((element) => {
        let img = element.photo
          ? `<img src='${element.photo.path}' />`
          : '<img style="display:none;" />';

        return `
        <div class="entry-wrapper">
          <div class="cv-list-entry" data-id=${element.id}>
            <div class="entry-body-wrapper">
            ${img}
              <div class="cv-entry-desc">
                <h3>${element.basic.name.data} ${element.basic.surname.data}</h3>
                <h5>${element.basic.proffesion.data}</h5>
              </div>
            </div>
          </div>
          <div class="cv-action-icons">
            <i class="fas fa-trash-alt" data-cvdelete data-modal="warning" data-id=${element.id}></i>
          </div>
        </div>`;
      });
      cvListContainer.innerHTML = cvList.join("");
    }
    let cvEntriesList = document.getElementsByClassName("cv-list-entry");
    for (let i = 0; cvEntriesList.length > i; i++) {
      cvEntriesList[i].addEventListener("click", () => {
        this.updateCv(cvEntriesList[i].dataset.id);
        navigateTo("basic");
      });
    }
  }

  static saveCvHandle(id) {
    let newData;
    if (id) {
      newData = this.completeCvData(id);
    } else {
      newData = this.completeCvData();
      document.getElementById("form-container").dataset.id = newData.id;
    }
    let valid = validation.completeValidation(newData);
    if (valid) {
      this.addCv(newData);
    }
  }
}

export default completeCvCRUD;
