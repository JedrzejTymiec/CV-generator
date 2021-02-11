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
    console.log(invalidData);
    if (invalidData.length > 0) {
      for (let i = 0; invalidData.length > i; i++) {
        this.showEmptyAlert(invalidData[i]);
      }
    } else {
      return true;
    }
  }
}

export default validation;
