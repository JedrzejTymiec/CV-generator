import { v4 as uuidv4 } from "uuid";

class Project {
  constructor(id, projectName, link, prodescription) {
    this.id = { data: id, isRequired: true };
    this.projectname = { data: projectName, isRequired: true };
    this.link = { data: link, isRequired: true };
    this.prodescription = { data: prodescription, isRequired: false };
  }
}

class projectsCRUD {
  static projectData(editId) {
    let id;
    if (editId) {
      id = editId;
    } else {
      id = uuidv4();
    }
    let projectName = document.getElementById("projectname-input").value;
    let link = document.getElementById("link-input").value;
    let description = document.getElementById("prodescription-input").value;

    let projectData = new Project(id, projectName, link, description);
    return projectData;
  }

  static addProject(project) {
    let projectsList = JSON.parse(localStorage.getItem("projectsData"));
    let nr;

    //checks if there is list of projects to add to
    if (projectsList) {
      //loop to check if projectList contains project in case of edition
      for (var i = 0; projectsList.length > i; i++) {
        if (projectsList[i].id.data === project.id.data) {
          nr = i;
          break;
        }
      }
      //if contains then replace, if not then add
      if (nr >= 0) {
        projectsList[nr] = project;
      } else {
        projectsList.unshift(project);
      }
      localStorage.setItem("projectsData", JSON.stringify(projectsList));
    } else {
      //create new list if there isn't one
      localStorage.setItem("projectsData", JSON.stringify([project]));
    }
    this.readProjects();
  }

  static deleteProject(id) {
    let projectsList = JSON.parse(localStorage.getItem("projectsData"));
    let newProjectsList = projectsList.filter((element) => {
      if (element.id.data != id) {
        return element;
      }
    });
    localStorage.setItem("projectsData", JSON.stringify(newProjectsList));
  }

  static updateProject(id) {
    let projectsList = JSON.parse(localStorage.getItem("projectsData"));
    return projectsList.find((element) => element.id.data === id);
  }

  static readProjects() {
    let projectsData = JSON.parse(localStorage.getItem("projectsData"));
    let formProjectsListContainer = document.getElementById(
      "form-projects-list"
    );
    let previewProjectsListContainer = document.getElementById(
      "preview-projects-container"
    );
    if (projectsData) {
      if (formProjectsListContainer) {
        let projectsList = projectsData.map((element) => {
          return `<li class="form-entry-container">
          <div class="entry-action-icons" data-id=${element.id.data}>
            <i class="fas fa-edit" data-proEdit data-modal="projects"></i><i class="fas fa-trash-alt" data-proDelete></i>
          </div>
          <ul class="entry-description">
            <li>Nazwa: <span>${element.projectname.data}</span></li>
            <li>Link: <span>${element.link.data}</span></li>
            <li>Opis: <span>${element.prodescription.data}</span>
          </ul>
        </li>`;
        });
        formProjectsListContainer.innerHTML = projectsList.join("");
      }
      document.querySelector(
        ".projects-container"
      ).getElementsByClassName.display = "block";
      let previewProjectsList = projectsData.map((element) => {
        return `<div class="project-container">
        <div class="project"">
          <h3 class="project-name">${element.projectname.data}</h3>
          <h4 class="project-link">${element.link.data}</h4>
          <p class="project-description">${element.prodescription.data}</p>
        </div>
      </div>`;
      });
      console.log(previewProjectsListContainer);
      previewProjectsListContainer.innerHTML = previewProjectsList.join("");
    } else {
      document.querySelector(".projects-container").style.display = "none";
      if (formProjectsListContainer) {
        formProjectsListContainer = "";
      }
    }
  }
}

export default projectsCRUD;
