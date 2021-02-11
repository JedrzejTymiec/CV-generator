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
    document.getElementById("position-input").value = "";
    document.getElementById("company-input").value = "";
    document.getElementById("location-input").value = "";
    document.getElementById("expstart-input").value = "";
    document.getElementById("expend-input").value = "";
    document.getElementById("expdescription-input").value = "";
  }

  static clearEducationInputs() {
    document.getElementById("edulevel-input").value = "";
    document.getElementById("school-input").value = "";
    document.getElementById("specialization-input").value = "";
    document.getElementById("edustart-input").value = "";
    document.getElementById("eduend-input").value = "";
    document.getElementById("edudescription-input").value = "";
  }

  static clearCertificationInputs() {
    document.getElementById("certname-input").value = "";
    document.getElementById("organizer-input").value = "";
    document.getElementById("certdate-input").value = "";
    document.getElementById("cerdescription-input").value = "";
  }

  static editExperienceInputs(
    id,
    position,
    company,
    location,
    startDate,
    endDate,
    expdescription
  ) {
    document.getElementById("experience-form").dataset.id = id;
    document.getElementById("position-input").value = position;
    document.getElementById("company-input").value = company;
    document.getElementById("location-input").value = location;
    document.getElementById("expstart-input").value = startDate;
    document.getElementById("expend-input").value = endDate;
    document.getElementById("expdescription-input").value = expdescription;
  }

  static editEducationInputs(
    id,
    educationLevel,
    school,
    spec,
    startDate,
    endDate,
    description
  ) {
    document.getElementById("education-form").dataset.id = id;
    document.getElementById("edulevel-input").value = educationLevel;
    document.getElementById("school-input").value = school;
    document.getElementById("specialization-input").value = spec;
    document.getElementById("edustart-input").value = startDate;
    document.getElementById("eduend-input").value = endDate;
    document.getElementById("edudescription-input").value = description;
  }

  static editCertificationInputs(
    id,
    name,
    organizer,
    participationDate,
    description
  ) {
    document.getElementById("certification-form").dataset.id = id;
    document.getElementById("certname-input").value = name;
    document.getElementById("organizer-input").value = organizer;
    document.getElementById("certdate-input").value = participationDate;
    document.getElementById("cerdescription-input").value = description;
  }
}

export default modalUI;
