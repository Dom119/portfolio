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
    projectDisplay.classList.remove('single')

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

  //React Static
  function showProjectsReactStatic(projects) {
    const projectDisplay = document.getElementById("projectDisplay");
    projectDisplay.classList.remove('single')

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
    projectDisplay.classList.remove('single')

    let content = "";
    projectDisplay.innerHTML = content;
  }

  function showProjectsStaticWeb({ portfolio }) {
    
    const projectDisplay = document.getElementById("projectDisplay");
    projectDisplay.classList.add('single')
    
    let content = "";

    //portfolio
    content += `
      <div class='projectElement'>
        <a href= '${portfolio.linkURL}' target='_blank' class="project">
          <div class="head">
            <div class="projectTitle">${portfolio.projectName}</div>
          </div>
          <div class="main">
            <img src="images/${portfolio.projectName}.png" />
          </div>
        </a>
        <div class='projectElementContent'>
        </div>
      </div>
    s `;
  
  
    // projectDisplaySingle.innerHTML = content;
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

  buttonReactStatic.addEventListener("click", () => {
    checkButton();
    buttonReactStatic.classList.toggle("yellowBackground");
    showProjectsReactStatic([
      a.toDoList,
      a.githubFinder,
      a.shoppingList,
      a.caroGame
    ]);
  });

  //--------------

  buttonMERN.addEventListener("click", () => {
    checkButton();
    buttonMERN.classList.toggle("yellowBackground");
    showProjectsMERN()
  });

  
  buttonStatic.addEventListener("click", () => {
    checkButton();
    const {portfolio} = a
    buttonStatic.classList.toggle("yellowBackground");
    showProjectsStaticWeb({
      portfolio
    });
  });

}