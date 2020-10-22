import data from "./frontEndData.js";

export default function projectFE() {
  let frontEndUI = document.getElementById("front-end");
  const numberOfProjects = 16;
  for (let i = 0; i < numberOfProjects; i++) {
    let newHTML = document.createElement("div");

    newHTML.innerHTML = `
      <a
        href="./projects/frontEnd/project${i + 1}/index.html"
        class="project"
        id="project${i + 1}"
        target="_blank"
      >
            <img src="images/projects/frontEnd/project${
              i + 1
            }.png" alt="project ${i + 1}" />
            <div class="description">
              <p>${data[i].name}</p>
              <h4>${data[i].description}</h4>
            </div>
      </a>
    `;

    frontEndUI.appendChild(newHTML);
  }
}
