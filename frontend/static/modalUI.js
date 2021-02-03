class modalUI {
  static autoExpandTextarea = (field) => {
    field.style.height = "inherit";
    var computed = window.getComputedStyle(field);
    var height =
      parseInt(computed.getPropertyValue("border-top-width"), 10) +
      parseInt(computed.getPropertyValue("padding-top"), 10) +
      field.scrollHeight +
      parseInt(computed.getPropertyValue("padding-bottom"), 10) +
      parseInt(computed.getPropertyValue("border-bottom-width"), 10);

    field.style.height = height + "px";
  };

  static closeModal = (button) => {
    let modal = button.dataset.modal;
    document.getElementById(modal + "-modal").style.display = "none";
    document.body.style.overflow = "visible";
  };

  static openModal = (button) => {
    let modal = button.dataset.modal;
    document.getElementById(modal + "-modal").style.display = "block";
    document.body.style.overflow = "hidden";
  };

  static clearExperienceInputs() {
    document.getElementById("position").value = "";
    document.getElementById("company").value = "";
    document.getElementById("location").value = "";
    document.getElementById("exp-start-date").value = "";
    document.getElementById("exp-end-date").value = "";
    document.getElementById("exp-description").value = "";
  }

  static clearEducationInputs() {
    document.getElementById("education-level").value = "";
    document.getElementById("shool").value = "";
    document.getElementById("specialization").value = "";
    document.getElementById("edu-start-date").value = "";
    document.getElementById("edu-end-date").value = "";
    document.getElementById("edu-description").value = "";
  }

  static clearCertificationInputs() {
    document.getElementById("certification-name").value = "";
    document.getElementById("organizer").value = "";
    document.getElementById("participation-date").value = "";
    document.getElementById("cer-description").value = "";
  }
}

export default modalUI;
