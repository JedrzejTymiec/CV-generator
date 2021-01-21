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
}

export default modalUI;
