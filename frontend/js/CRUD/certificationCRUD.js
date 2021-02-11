import { v4 as uuidv4 } from "uuid";

class Certification {
  constructor(id, name, organizer, participationDate, description) {
    this.id = id;
    this.certname = name;
    this.organizer = organizer;
    this.certdate = participationDate;
    this.cerdescription = description;
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
        if (certificationDataList[i].id === cer.id) {
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
      if (element.id != id) {
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
    return cerList.find((element) => element.id === id);
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
    if (certificationDataList && formCertificationListContainer) {
      let cerList = certificationDataList.map((element) => {
        return `
          <li class="form-entry-container">
          <div class="entry-action-icons" data-id=${element.id}>
            <i class="fas fa-edit" data-ceredit data-modal="certification"></i><i class="fas fa-trash-alt" data-cerdelete></i>
          </div>
          <ul class="entry-description">
            <li>Okres: <span>${element.certdate}</span></li>
            <li>Nazwa: <span>${element.certname}</span></li>
            <li>Organizator: <span>${element.organizer}</span></li>
            <li>Opis: <span>${element.cerdescription}</span>
          </ul>
        </li>`;
      });
      formCertificationListContainer.innerHTML = cerList.join("");
    }
    if (certificationDataList && previewCertificationListContainer) {
      let previewCerList = certificationDataList.map((element) => {
        return `<div class="course-container">
        <h3 class="course-name">${element.certname}</h3>
        <h4 class="course-organizer">${element.organizer}</h4>
      </div>`;
      });
      previewCertificationListContainer.innerHTML = previewCerList.join("");
    }
  }
}

export default certificationCRUD;
