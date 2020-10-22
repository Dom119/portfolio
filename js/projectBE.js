import data from "./backEndData.js";

export default function projectBE() {
  let backEndUI = document.getElementById("back-end");
  const numberOfProjects = 5;
  for (let i = 0; i < numberOfProjects; i++) {
    let newHTML = document.createElement("div");

    newHTML.innerHTML = `
      <a
        href="#"
        class="project"
        id="project${i + 1}"
        target="_blank"
      >
            <img src="images/projects/backEnd/project${
              i + 1
            }.png" alt="project ${i + 1}" />
            <div class="description">
              <p>${data[i].name}</p>
              <h4>${data[i].description}</h4>
            </div>
      </a>
    `;

    backEndUI.appendChild(newHTML);
  }
}

// href = "./projects/backEnd/project${i + 1}/index.html"
