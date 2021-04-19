import basicDataCRUD from "./CRUD/basicDataCRUD.js";

class validation {
  static checkForDuplicates(data) {
    let listData;
    if (data.skill) {
      listData = JSON.parse(localStorage.getItem("skillsData"));
      if (listData) {
        let contains = listData.filter((element) => {
          if (data.skill.data === element.skill.data) {
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
    } else if (data.language) {
      listData = JSON.parse(localStorage.getItem("languagesData"));
      if (listData) {
        let contains = listData.filter((element) => {
          if (data.language.data === element.language.data) {
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
  }

  static showAlert(input, text) {
    document.getElementById(input + "-input-alert").innerText = `${text}`;
    document.getElementById(input + "-input").style.borderBottom =
      "1px solid #ff0000";
    document.getElementById(input + "-input").addEventListener("focus", () => {
      document.getElementById(input + "-input-alert").innerText = "";
      document.getElementById(input + "-input").style.borderBottom =
        "1px solid #a0a0a0";
    });
  }

  static clearAlert(input) {
    document.getElementById(input + "-alert").innerText = "";
    document.getElementById(input).style.borderBottom = "1px solid #a0a0a0";
  }

  static validateData(data) {
    let invalidData = [];
    for (const prop in data) {
      if (data[prop].data === "" && data[prop].isRequired) {
        invalidData.push(prop);
      }
    }
    if (invalidData.length > 0) {
      for (let i = 0; invalidData.length > i; i++) {
        this.showAlert(invalidData[i], "Can't be empty!");
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
      document.getElementById("form-container").dataset.valid = "";
      return false;
    }
  }

  static dateValidation(data) {
    let today = new Date();
    let startDate;
    let endDate;
    let startInput;
    let endInput;
    if (data.company) {
      startDate = new Date(data.expstart.data);
      endDate = new Date(data.expend.data);
      startInput = "expstart";
      endInput = "expend";
    } else if (data.school) {
      startDate = new Date(data.edustart.data);
      endDate = new Date(data.eduend.data);
      startInput = "edustart";
      endInput = "eduend";
    } else if (data.certdate) {
      startDate = new Date(data.certdate.data);
      startInput = "certdate";
    }
    if (startDate && endDate) {
      if (startDate.getTime() > endDate.getTime()) {
        this.showAlert(
          startInput,
          "End date cannot be earlier than start date!"
        );
        this.showAlert(endInput, "End date cannot be earlier than start date!");
        return false;
      }
      if (
        endDate.getTime() > today.getTime() ||
        startDate.getTime() > today.getTime()
      ) {
        if (endDate.getTime() > today.getTime()) {
          this.showAlert(endInput, "Date cannot be from the future!");
        }
        if (startDate.getTime() > today.getTime()) {
          this.showAlert(startInput, "Date cannot be from the future!");
        }
        return false;
      }
    }
    if (startDate.getTime() > today.getTime()) {
      this.showAlert(startInput, "Date cannot be from the future!");
      return false;
    }

    return true;
  }
}

export default validation;
