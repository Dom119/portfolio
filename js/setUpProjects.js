import projectDatabase from "./projectDatabase.js";
import createMERNProjects from './createMERNProjects.js'
import createStaticWeb from './createStaticWeb.js'
// import createReactStatics from './createReactStatics.js'
import createReactStatics2 from './createReactStatics2.js'
import createJavascriptProjects from './createJavascriptProjects.js'
const a = projectDatabase;

export default function setUpProjects() {
  const buttonMERN = document.getElementById("MERN");
  const buttonReactStatic = document.getElementById("react");
  const buttonJavascript = document.getElementById("javascript");
  const buttonStatic = document.getElementById("static");
  
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

  checkButton();
  buttonMERN.classList.toggle("yellowBackground");

  const projectDisplay = document.getElementById("projectDisplay");
  projectDisplay.classList.add('single') //switch to GID 1, it's so messy here, will change that late
  
  let content = "";
  content = createMERNProjects();
  projectDisplay.innerHTML = content;


  //----------------------Even Listener---------------------------

  buttonJavascript.addEventListener("click", () => {
    checkButton();
    buttonJavascript.classList.toggle("yellowBackground");
    createJavascriptProjects([
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

    const projectDisplay = document.getElementById("projectDisplay");
    projectDisplay.classList.add('single') //switch to GID 1, it's so messy here, will change that late
    
    let content = "";
    content = createReactStatics2();
    projectDisplay.innerHTML = content;
  });

  //--------------

  buttonMERN.addEventListener("click", () => {
    checkButton();
    buttonMERN.classList.toggle("yellowBackground");

    const projectDisplay = document.getElementById("projectDisplay");
    projectDisplay.classList.add('single') //switch to GID 1, it's so messy here, will change that late
    
    let content = "";
    content = createMERNProjects();
    projectDisplay.innerHTML = content;
  });

  
  buttonStatic.addEventListener("click", () => {
    checkButton();
    const {portfolio} = a
    buttonStatic.classList.toggle("yellowBackground");
    
    const projectDisplay = document.getElementById("projectDisplay");
    projectDisplay.classList.add('single')
    
    let content = "";
    content += createStaticWeb({portfolio});
    projectDisplay.innerHTML = content;
  });

}