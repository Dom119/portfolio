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

  //Web Static
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
          <ul>
            <li>All functionalities of this portfolio is made by vanilla <span class='yellow'>Javascript</span>.</li>
            <li>The front page is generated <span class='yellow'>SCSS</span>. </li>
            <li>The form is run by <span class='yellow'>EmailJs</span>, it helps to collect data and generate email without deploying to server.</li>
            <li>All projects in this portfolio is deployed on <span class='yellow'>Github</span> and <span class='yellow'>Heroku</span>.  </li>
            <button>Visit <a href='https://github.com/Dom119/portfolio' target='_blank' class='yellow'>Github repo</a></button>
          </ul>
        </div>
      </div>
    s `;
    projectDisplay.innerHTML = content;
  }

  //Portfolio
  function showProjectsMERN({socialMedia}) {
    const projectDisplay = document.getElementById("projectDisplay");
    projectDisplay.classList.add('single')

    let content = "";

    //Social Media
    content += `
      <div class='projectElement'>
        <a href= '${socialMedia.linkURL}' target='_blank' class="project">
          <div class="head">
            <div class="projectTitle">${socialMedia.projectName}</div>
          </div>
          <div class="main">
            <img src="images/${socialMedia.projectName}.png" />
          </div>
        </a>
        <div class='projectElementContent'>
          <ul>
            <div class="title yellow">Front End</div>
            <li>Using <span class="yellow">React</span> and <span class="yellow">Redux</span> for state management. </li>
            <li>Redux is used together with <span class="yellow">Redux Chrome Extension</span> for debugging.</li>
            <li>All fetching are done by <span class="yellow">Axios</span></li>
            <li>Automatic generated Id for testing by <span class="yellow">UUID4</span> and Date formatting by <span class="yellow">Moment</span></li>
            <div class="title yellow">Back End</div>
            <li>Run by <span class="yellow">Nodejs</span> & <span class="yellow">Express</span></li>
            <li>Authentication by <span class="yellow">bcryptjs</span> & <span class="yellow">jsonwebtoken</span></li>
            <li>Back end API is independently tested by <span class="yellow">Postman</span></li>
            <li>Database is run by <span class="yellow">MongoDB</span> and integrated by <span class="yellow">Mongoose</span></li>
            <li>Please note that this is deployed on <span class="yellow">Heroku</span> free version so on the first time it will take a few second to load. Then it will be normal.</li>
            <button>Visit <a href='#' target='_blank' class='yellow'>Github repo</a></button>
          </ul>
        </div>
      </div>
    s `;

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
    const { socialMedia } = a;
    buttonMERN.classList.toggle("yellowBackground");
    showProjectsMERN({
      socialMedia
    })
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