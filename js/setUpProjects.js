import projectDatabase from "./projectDatabase.js";
const a = projectDatabase;

export default function setUpProjects() {
  const buttonMERN = document.getElementById("MERN");
  const buttonJavascript = document.getElementById("javascript");
  const buttonStatic = document.getElementById("static");
 

  //----------------------HTML part----------------
  // it is mainly for Javascript button
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
          <img src="projects/${projects[i].linkURL}/photo.png" />
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
    if (buttonStatic.classList.contains("yellowBackground")) {
      buttonWeb.classList.remove("yellowBackground");
    }
    if (buttonJavascript.classList.contains("yellowBackground")) {
      buttonJavascript.classList.remove("yellowBackground");
    }
    if (buttonMERN.classList.contains("yellowBackground")) {
      buttonReact.classList.remove("yellowBackground");
    }
  }
  // //--------------Initialization
  // buttonJavascript.classList.toggle("yellowBackground");
  // showProjects([
  //   a.formValidation,
  //   a.seatBooking,
  //   a.exchangeRateCalculator,
  //   a.hangManGame,
  //   a.mealFinder,
  //   a.expenseTracker,
  //   a.musicPlayer,
  //   a.speedTyping,
  //   a.SpeechToText,
  //   a.memoryCard,
  //   a.lyricSearching,
  //   a.breakingBall,
  //   a.speechRecognition,
  //   a.dragAndDropList,
  // ]);
  //----------------------Even Listener---------------------------

  buttonJavascript.addEventListener("click", () => {
    checkButton();
    buttonJavascript.classList.toggle("yellowBackground");
    showProjects([
      a.formValidation,
      a.seatBooking,
      a.exchangeRateCalculator,
      a.hangManGame,
      a.mealFinder,
      a.expenseTracker,
      a.musicPlayer,
      a.speedTyping,
      a.SpeechToText,
      a.memoryCard,
      a.lyricSearching,
      a.breakingBall,
      a.speechRecognition,
      a.dragAndDropList,
      a.countingDown,
      a.RelaxerApp,
    ]);
  });


  buttonMERN.addEventListener("click", () => {
    checkButton();
    buttonMERN.classList.toggle("yellowBackground");
    // show the project here
  });
  
  buttonStatic.addEventListener("click", () => {
    checkButton();
    buttonStatic.classList.toggle("yellowBackground");
    // show the project here
  });
}
