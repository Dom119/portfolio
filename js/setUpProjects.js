import projectDatabase from "./projectDatabase.js";
const a = projectDatabase;

export default function setUpProjects() {
  const buttonWeb = document.getElementById("web");
  const buttonJavascript = document.getElementById("javascript");
  const buttonReact = document.getElementById("react");
  const buttonNodejs = document.getElementById("nodejs");
  const buttonDjango = document.getElementById("django");
  const buttonAll = document.getElementById("all");

  //----------------------HTML part----------------
  function showProjects(projects) {
    const projectDisplay = document.getElementById("projectDisplay");
    let content = "";
    for (let i = 0; i < projects.length; i++) {
      content += `
      <a href='${projects[i].linkToProjectPage}' target='_blank' class="project">
        <div class="head">
          <div class="icon">
            <div class="red"></div>
            <div class="yellow"></div>
            <div class="green"></div>
          </div>
          <div class="projectTitle">${projects[i].projectName}</div>
        </div>
        <div class="main">
          <img src="./projects/${projects[i].linkURL}/photo.png" />
        </div>
      </a>
      `;
    }
    projectDisplay.innerHTML = content;
  }

  //--------Event Listener------------------
  buttonWeb.addEventListener("click", () => {
    showProjects([
      a.countingDown,
      a.formValidation,
      a.memoryCard,
      a.seatBooking,
    ]);
  });

  buttonJavascript.addEventListener("click", () => {
    showProjects([
      a.breakingBall,
      a.mealFinder,
      a.SpeechToText,
      a.seatBooking,
      a.formValidation,
      a.exchangeRateCalculator,
    ]);
  });

  buttonReact.addEventListener("click", () => {
    showProjects([
      a.SpeechToText,
      a.breakingBall,
      a.seatBooking,
      a.speedTyping,
    ]);
  });
  buttonNodejs.addEventListener("click", () => {
    showProjects([
      a.exchangeRateCalculator,
      a.speedTyping,
      a.RelaxerApp,
      a.hangManGame,
    ]);
  });
  buttonDjango.addEventListener("click", () => {
    showProjects([
      a.musicPlayer,
      a.formValidation,
      a.exchangeRateCalculator,
      a.countingDown,
    ]);
  });
  buttonAll.addEventListener("click", () => {
    showProjects([
      a.breakingBall,
      a.dragAndDropList,
      a.countingDown,
      a.RelaxerApp,
      a.mealFinder,
    ]);
  });
}
