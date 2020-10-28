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
      <a href= 'projects/${projects[i].linkURL}/index.html' target='_blank' class="project">
        <div class="head">
          <div class="icon">
            <div class="red"></div>
            <div class="yellow"></div>
            <div class="green"></div>
          </div>
          <div class="projectTitle">${projects[i].projectName}</div>
        </div>
        <div class="main">
          <img src="projects/${projects[i].linkURL}/photo.webp" />
          <ul class="technologies">
      `;
      let keyWordList = "";
      for (let j = 0; j < projects[i].keyword.length; j++) {
        keyWordList += `<li>${projects[i].keyword[j]}</li>`;
      }
      content += keyWordList;
      content += ` </ul>
              <button class='learnMoreBtn' >Learn More</button>
            </div>
          </a>`;
    }
    projectDisplay.innerHTML = content;
  }

  //--------Button Toggle------------------
  function checkButton() {
    if (buttonWeb.classList.contains("yellowBackground")) {
      buttonWeb.classList.remove("yellowBackground");
    }
    if (buttonJavascript.classList.contains("yellowBackground")) {
      buttonJavascript.classList.remove("yellowBackground");
    }
    if (buttonReact.classList.contains("yellowBackground")) {
      buttonReact.classList.remove("yellowBackground");
    }
    if (buttonNodejs.classList.contains("yellowBackground")) {
      buttonNodejs.classList.remove("yellowBackground");
    }
    if (buttonDjango.classList.contains("yellowBackground")) {
      buttonDjango.classList.remove("yellowBackground");
    }
    if (buttonAll.classList.contains("yellowBackground")) {
      buttonAll.classList.remove("yellowBackground");
    }
  }
  //--------------Initialization
  buttonWeb.classList.toggle("yellowBackground");
  showProjects([a.countingDown, a.formValidation, a.memoryCard, a.seatBooking]);
  //----------------------Even Listener---------------------------
  buttonWeb.addEventListener("click", () => {
    checkButton();
    buttonWeb.classList.toggle("yellowBackground");
    showProjects([
      a.countingDown,
      a.formValidation,
      a.memoryCard,
      a.seatBooking,
    ]);
    // const projectsUI = document.querySelectorAll("project");
    // console.log("project UI");
    // console.log(projectsUI);
  });

  buttonJavascript.addEventListener("click", () => {
    checkButton();
    buttonJavascript.classList.toggle("yellowBackground");
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
    checkButton();
    buttonReact.classList.toggle("yellowBackground");
    showProjects([
      a.SpeechToText,
      a.breakingBall,
      a.seatBooking,
      a.speedTyping,
    ]);
  });
  buttonNodejs.addEventListener("click", () => {
    checkButton();
    buttonNodejs.classList.toggle("yellowBackground");
    showProjects([
      a.exchangeRateCalculator,
      a.speedTyping,
      a.RelaxerApp,
      a.hangManGame,
    ]);
  });
  buttonDjango.addEventListener("click", () => {
    checkButton();
    buttonDjango.classList.toggle("yellowBackground");
    showProjects([
      a.musicPlayer,
      a.formValidation,
      a.exchangeRateCalculator,
      a.countingDown,
    ]);
  });
  buttonAll.addEventListener("click", () => {
    checkButton();
    buttonAll.classList.toggle("yellowBackground");
    showProjects([
      a.breakingBall,
      a.dragAndDropList,
      a.countingDown,
      a.RelaxerApp,
      a.mealFinder,
    ]);
  });

  //----------------------------
}
