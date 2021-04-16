import validation from "./validation";

class modalUI {
  static autoExpandTextarea(field) {
    field.style.height = "inherit";
    var computed = window.getComputedStyle(field);
    var height =
      parseInt(computed.getPropertyValue("border-top-width"), 10) +
      parseInt(computed.getPropertyValue("padding-top"), 10) +
      field.scrollHeight +
      parseInt(computed.getPropertyValue("padding-bottom"), 10) +
      parseInt(computed.getPropertyValue("border-bottom-width"), 10);

    field.style.height = height + "px";
  }

  static countCharacters(field) {
    document.getElementById(field.id + "-characters-counter").innerText =
      field.value.length + "/1000";
  }

  static closeModal(button) {
    let modal = button.dataset.modal;
    document.getElementById(modal + "-modal").style.display = "none";
    document.body.style.overflowY = "scroll";
    let id = button.dataset.modal.slice(0, 3);
    if (id !== "war" && id !== "pre") {
      document.getElementById(id + "description-input").style.height = "31px";
    }
    if (id === "pre") {
      document.querySelector(".preview").innerHTML = "";
    }
  }

  static openModal(button) {
    let modal = button.closest("[data-modal]").dataset.modal;
    document.getElementById(modal + "-modal").style.display = "block";
    document.body.style.overflowY = "hidden";
  }

  static clearInputs(inputs) {
    let inputsList = document.querySelectorAll(
      `#${inputs}-form input, #${inputs}-form textarea`
    );
    for (let i = 0; inputsList.length > i; i++) {
      if (inputsList[i].type !== "checkbox") {
        inputsList[i].value = "";
        validation.clearAlert(inputsList[i].id);
      }
      if (inputsList[i].type === "checkbox" && inputsList[i].checked) {
        inputsList[i].click();
      }
    }
  }

  static editExperienceInputs(
    id,
    position,
    company,
    startDate,
    endDate,
    stillWorking,
    expdescription
  ) {
    if (stillWorking) {
      document.getElementById("expcheck").click();
    } else {
      document.getElementById("expend-input").value = endDate;
    }
    document.getElementById("experience-form").dataset.id = id;
    document.getElementById("position-input").value = position;
    document.getElementById("company-input").value = company;
    document.getElementById("expstart-input").value = startDate;
    document.getElementById("expdescription-input").value = expdescription;
    this.countCharacters(document.getElementById("expdescription-input"));
    this.autoExpandTextarea(document.getElementById("expdescription-input"));
  }

  static editEducationInputs(
    id,
    school,
    spec,
    startDate,
    endDate,
    stillLearning,
    description
  ) {
    if (stillLearning) {
      document.getElementById("educheck").click();
    } else {
      document.getElementById("eduend-input").value = endDate;
    }
    document.getElementById("education-form").dataset.id = id;
    document.getElementById("school-input").value = school;
    document.getElementById("specialization-input").value = spec;
    document.getElementById("edustart-input").value = startDate;
    document.getElementById("edudescription-input").value = description;
    this.countCharacters(document.getElementById("edudescription-input"));
    this.autoExpandTextarea(document.getElementById("edudescription-input"));
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
    this.countCharacters(document.getElementById("cerdescription-input"));
    this.autoExpandTextarea(document.getElementById("cerdescription-input"));
  }

  static editProjectInputs(id, name, link, description) {
    document.getElementById("projects-form").dataset.id = id;
    document.getElementById("projectname-input").value = name;
    document.getElementById("link-input").value = link;
    document.getElementById("prodescription-input").value = description;
    this.countCharacters(document.getElementById("prodescription-input"));
    this.autoExpandTextarea(document.getElementById("prodescription-input"));
  }
}

export default modalUI;
