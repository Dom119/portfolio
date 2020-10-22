//a function to load the word randomly automatically
//check if the word is correct => calculate score and calculate time left
const wordUI = document.getElementById("word");
const textUI = document.getElementById("text");
const scoreUI = document.getElementById("score");
const timeUI = document.getElementById("time");
const start = document.getElementById("start");
const endGame = document.getElementById("end-container");
const endGameText = document.getElementById("end-game-container");
const playAgain = document.getElementById("again");
const setting = document.getElementById("settings");
const settingBtn = document.getElementById("settings-btn");
const difficulty = document.getElementById("difficulty");

words = ["java", "python", "javascript", "ruby", "rail", "react", "angular"];
let score = 0;
var time = 3;
var timeBonus = 5;

randomWord = function () {
  word = words[Math.floor(Math.random() * words.length)];
  wordUI.innerText = word;
  textUI.value = "";
};

setTime = function () {
  var timing = setInterval(() => {
    if (time === 0) {
      clearInterval();
      showTimeUp();
    } else {
      time--;
      console.log(time);
      timeUI.innerText = `${time}s`;
    }
  }, 1000);
};

showTimeUp = function () {
  const message = `Your score is ${score}`;
  endGameText.innerText = `${message}`;
  endGame.style.display = "flex";
};

//Event Listener
textUI.addEventListener("input", (event) => {
  if (textUI.value === word) {
    score++;
    time = time + timeBonus;
    scoreUI.innerText = `${score}`;
    randomWord();
  }
});

playAgain.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.reload();
});

//init
start.addEventListener("click", (e) => {
  e.preventDefault();
  timeUI.innerText = `${time}s`;
  randomWord();
  setTime();
});

settingBtn.addEventListener("click", (e) => {
  e.preventDefault();
  setting.classList.toggle("hide");
});

difficulty.addEventListener("change", (e) => {
  if (difficulty.value === "easy") {
    timeBonus = 5;
  } else if (difficulty.value === "medium") {
    timeBonus = 3;
  } else if (difficulty.value === "hard") {
    timeBonus = 1;
  }
});
