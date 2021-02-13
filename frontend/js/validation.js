import basicDataCRUD from "./CRUD/basicDataCRUD.js";

class validation {
  static checkForDuplicates(data) {
    let listData;
    if (data.skill) {
      listData = JSON.parse(localStorage.getItem("skillsData"));
    } else if (data.language) {
      listData = JSON.parse(localStorage.getItem("languagesData"));
    }
    if (listData) {
      let contains = listData.filter((element) => {
        if (data.skill === element.skill) {
          return element;
        }
      });
      if (contains.length !== 0) {
        return true;
      }
      return false;
    } else {
      return false;
    }
  }

  static showDoubleAlert(input) {
    document.getElementById(input + "-input-alert").innerText =
      input.charAt(0).toUpperCase() + input.slice(1) + " already on list!";
    document.getElementById(input + "-input").style.borderBottom =
      "1px solid #ff0000";
    document.getElementById(input + "-input").addEventListener("focus", () => {
      document.getElementById(input + "-input-alert").innerText = "";
      document.getElementById(input + "-input").style.borderBottom =
        "1px solid #a0a0a0";
    });
  }

  static showEmptyAlert(input) {
    document.getElementById(input + "-input-alert").innerText =
      "Can't be empty!";
    document.getElementById(input + "-input").style.borderBottom =
      "1px solid #ff0000";
    document.getElementById(input + "-input").addEventListener("focus", () => {
      document.getElementById(input + "-input-alert").innerText = "";
      document.getElementById(input + "-input").style.borderBottom =
        "1px solid #a0a0a0";
    });
  }

  static validateData(data) {
    let invalidData = [];
    for (const prop in data) {
      if (data[prop] === "") {
        invalidData.push(prop);
      }
    }
    if (invalidData.length > 0) {
      for (let i = 0; invalidData.length > i; i++) {
        this.showEmptyAlert(invalidData[i]);
      }
    } else {
      return true;
    }
  }

  static completeValidation(data) {
    if (
      data.basic === null ||
      data.contact === null ||
      data.residence === null
    ) {
      document.getElementById("complete-cv-warning").style.zIndex = "1";
      document.getElementById("form-container").dataset.valid = "false";
    } else {
      document.getElementById("form-container").dataset.valid = "true";
      return true;
    }
  }

  static validateBasicPage() {
    let basicData = basicDataCRUD.basicData();
    let contactData = basicDataCRUD.contactData();
    let residenceData = basicDataCRUD.residenceData();
    let basic = this.validateData(basicData);
    let contact = this.validateData(contactData);
    let residence = this.validateData(residenceData);
    if (basic && contact && residence) {
      return true;
    } else {
      return false;
    }
  }

  // static dateValidation(data) {
  //   let startDate;
  //   let endDate;

  // }
}

export default validation;
