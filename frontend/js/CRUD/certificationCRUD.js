import { v4 as uuidv4 } from "uuid";

class Certification {
  constructor(id, name, organizer, participationDate, description) {
    this.id = { data: id, isRequired: true };
    this.certname = { data: name, isRequired: true };
    this.organizer = { data: organizer, isRequired: true };
    this.certdate = { data: participationDate, isRequired: true };
    this.cerdescription = { data: description, isRequired: false };
  }
}

class certificationCRUD {
  static certificationData(editId) {
    let id;
    if (editId) {
      id = editId;
    } else {
      id = uuidv4();
    }
    let name = document.getElementById("certname-input").value;
    let organizer = document.getElementById("organizer-input").value;
    let participationDate = document.getElementById("certdate-input").value;
    let description = document.getElementById("cerdescription-input").value;

    let certificationData = new Certification(
      id,
      name,
      organizer,
      participationDate,
      description
    );
    return certificationData;
  }

  static addCertification(cer) {
    let certificationDataList = JSON.parse(
      localStorage.getItem("certificationData")
    );
    let nr;
    //checks if there is list of certifications to add to
    if (certificationDataList) {
      //loop to check if certificationList contains cer (in case of edition)
      for (let i = 0; certificationDataList.length > i; i++) {
        if (certificationDataList[i].id.data === cer.id.data) {
          nr = i;
          break;
        }
      }
      //if contains then replace if not then add
      if (nr >= 0) {
        certificationDataList[nr] = cer;
      } else {
        certificationDataList.push(cer);
      }
      localStorage.setItem(
        "certificationData",
        JSON.stringify(certificationDataList)
      );
    } else {
      //create new list if there isn't one
      localStorage.setItem("certificationData", JSON.stringify([cer]));
    }
    this.readCertification();
  }

  static deleteCertification(id) {
    let cerList = JSON.parse(localStorage.getItem("certificationData"));
    let newCertificationList = cerList.filter((element) => {
      if (element.id.data != id) {
        return element;
      }
    });
    localStorage.setItem(
      "certificationData",
      JSON.stringify(newCertificationList)
    );
  }

  static updateCertification(id) {
    let cerList = JSON.parse(localStorage.getItem("certificationData"));
    return cerList.find((element) => element.id.data === id);
  }

  static readCertification() {
    let certificationDataList = JSON.parse(
      localStorage.getItem("certificationData")
    );
    let formCertificationListContainer = document.getElementById(
      "form-certification-list"
    );
    let previewCertificationListContainer = document.getElementById(
      "preview-certification-container"
    );
    if (certificationDataList && certificationDataList.length !== 0) {
      if (formCertificationListContainer) {
        let cerList = certificationDataList.map((element) => {
          if (localStorage.getItem("language") === "polish") {
            return `
          <li class="form-entry-container">
          <div class="entry-action-icons" data-id=${element.id.data}>
            <i class="fas fa-edit" data-ceredit data-modal="certification"></i><i class="fas fa-trash-alt" data-cerdelete></i>
          </div>
          <ul class="entry-description">
            <li>Data uczestnictwa: <span>${element.certdate.data}</span></li>
            <li>Nazwa: <span>${element.certname.data}</span></li>
            <li>Organizator: <span>${element.organizer.data}</span></li>
            <li>Opis: <span>${element.cerdescription.data}</span>
          </ul>
        </li>`;
          } else if (localStorage.getItem("language") === "english") {
            return `
            <li class="form-entry-container">
            <div class="entry-action-icons" data-id=${element.id.data}>
              <i class="fas fa-edit" data-ceredit data-modal="certification"></i><i class="fas fa-trash-alt" data-cerdelete></i>
            </div>
            <ul class="entry-description">
              <li>Participation date: <span>${element.certdate.data}</span></li>
              <li>Name: <span>${element.certname.data}</span></li>
              <li>Organizer: <span>${element.organizer.data}</span></li>
              <li>Description: <span>${element.cerdescription.data}</span>
            </ul>
          </li>`;
          }
        });
        formCertificationListContainer.innerHTML = cerList.join("");
      }
      if (previewCertificationListContainer) {
        document.querySelector(".certifications-container").style.display =
          "block";
        let previewCerList = certificationDataList.map((element) => {
          return `<div class="course-container">
        <h3 class="course-name">${element.certname.data}</h3>
        <h4 class="course-organizer">${element.organizer.data}</h4>
      </div>`;
        });
        previewCertificationListContainer.innerHTML = previewCerList.join("");
      }
    } else {
      document.querySelector(".certifications-container").style.display =
        "none";
      if (formCertificationListContainer) {
        formCertificationListContainer.innerHTML = "";
      }
    }
  }
}

export default certificationCRUD;
