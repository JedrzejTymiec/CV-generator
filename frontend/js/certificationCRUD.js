class certificationCRUD {
  static addCertification(cer) {
    let certificationDataList = JSON.parse(
      localStorage.getItem("certificationDataList")
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
        "certificationDataList",
        JSON.stringify(certificationDataList)
      );
    } else {
      //create new list if there isn't one
      localStorage.setItem("certificationDataList", JSON.stringify([cer]));
    }
    this.readCertification();
  }

  static deleteCertification(id) {
    let cerList = JSON.parse(localStorage.getItem("certificationDataList"));
    let newCertificationList = cerList.filter((element) => {
      if (element.id != id) {
        return element;
      }
    });
    localStorage.setItem(
      "certificationDataList",
      JSON.stringify(newCertificationList)
    );
  }

  static updateCertification(id) {
    let cerList = JSON.parse(localStorage.getItem("certificationDataList"));
    return cerList.find((element) => element.id === id);
  }

  static readCertification() {
    let certificationDataList = JSON.parse(
      localStorage.getItem("certificationDataList")
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
            <li>Okres: <span>${element.participationDate}</span></li>
            <li>Nazwa: <span>${element.name}</span></li>
            <li>Organizator: <span>${element.organizer}</span></li>
            <li>Opis: <span>${element.description}</span>
          </ul>
        </li>`;
      });
      formCertificationListContainer.innerHTML = cerList.join("");
    }
    if (certificationDataList && previewCertificationListContainer) {
      let previewCerList = certificationDataList.map((element) => {
        return `<div class="course-container">
        <h3 class="course-name">${element.name}</h3>
        <h4 class="course-organizer">${element.organizer}</h4>
      </div>`;
      });
      previewCertificationListContainer.innerHTML = previewCerList.join("");
    }
  }
}

export default certificationCRUD;
