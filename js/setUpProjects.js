import projectDatabase from "./projectDatabase.js";
const a = projectDatabase;

export default function setUpProjects() {
  const buttonMERN = document.getElementById("MERN");
  const buttonReactStatic = document.getElementById("react");
  const buttonJavascript = document.getElementById("javascript");
  const buttonStatic = document.getElementById("static");
 

  //----------------------HTML part----------------
  function showProjectsJavaScript(projects) {
    const projectDisplay = document.getElementById("projectDisplay");
    let content = "";
    for (let i = 0; i < projects.length; i++) {
      content += `
      <a href= '${projects[i].linkURL}' target='_blank' class="project">
        <div class="head">
          <div class="projectTitle">${projects[i].projectName}</div>
        </div>
        <div class="main">
          <img src="images/${projects[i].projectName}.png" />
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
  
  function showProjectsMERN() {
    const projectDisplay = document.getElementById("projectDisplay");
    let content = "";
    projectDisplay.innerHTML = content;
  }

  function showProjectsReactStatic() {
    console.log('Iam here');
    const projectDisplay = document.getElementById("projectDisplay");
    let content = "";
    projectDisplay.innerHTML = content;
  }

  function showProjectsStaticWeb() {
    const projectDisplay = document.getElementById("projectDisplay");
    let content = "";
    projectDisplay.innerHTML = content;
  }


  //--------Button Toggle------------------
  function checkButton() {
    if (buttonStatic.classList.contains("yellowBackground")) {
      buttonStatic.classList.remove("yellowBackground");
    }
    if (buttonJavascript.classList.contains("yellowBackground")) {
      buttonJavascript.classList.remove("yellowBackground");
    }
    if (buttonMERN.classList.contains("yellowBackground")) {
      buttonMERN.classList.remove("yellowBackground");
    }
    if (buttonReactStatic.classList.contains("yellowBackground")) {
      buttonReactStatic.classList.remove("yellowBackground");
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
    showProjectsJavaScript([
      a.formValidation,
      a.seatBooking,
      a.exchangeRateCalculator,
      a.hangManGame,
      a.mealFinder,
      a.expenseTracker,
      a.musicPlayer,
      a.speedTyping,
      a.SpeechToText,
      a.lyricSearching,
      a.breakingBall,
      a.dragAndDropList,
      a.countingDown,
      a.RelaxerApp,
    ]);
  });


  buttonMERN.addEventListener("click", () => {
    checkButton();
    buttonMERN.classList.toggle("yellowBackground");
    showProjectsMERN()
  });

  buttonReactStatic.addEventListener("click", () => {
    checkButton();
    buttonReactStatic.classList.toggle("yellowBackground");
    showProjectsReactStatic()
  });
  
  buttonStatic.addEventListener("click", () => {
    checkButton();
    buttonStatic.classList.toggle("yellowBackground");
    showProjectsStaticWeb();
  });
}
