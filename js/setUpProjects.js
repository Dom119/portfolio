import projectDatabase from "./projectDatabase.js";

export default function setUpProjects() {
  const buttonWeb = document.getElementById("web");
  const buttonJavascript = document.getElementById("javascript");
  const buttonReact = document.getElementById("react");
  const buttonNodejs = document.getElementById("nodejs");
  const buttonDjango = document.getElementById("django");
  const buttonAll = document.getElementById("all");

  buttonWeb.addEventListener("click", (event) => {
    showProjects();
  });

  function showProjects(projects) {
    const projectDisplay = document.getElementById("projectDisplay");
    let content = "";
    for (let i = 0; i < projects.length; i++) {}
  }
}
