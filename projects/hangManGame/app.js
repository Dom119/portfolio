//SVG: scalable vector markup

const notification = document.getElementById("notification-container");
const word = document.getElementById("word");
const parts = document.querySelectorAll(".figure-part");
const finalMessage = document.getElementById("final-message");
const playAgainBtn = document.getElementById("play-button");

const words = ["application", "programming"];
const correct = [];
const wrong = [];

var index = 0;

let selectedWord = words[Math.floor(Math.random() * words.length)];

displayWord = function () {
  word.innerHTML = `
  ${selectedWord
    .split("")
    .map(
      (element) => `
        <span class='letter'>
        ${correct.includes(element) ? element : ""}
        </span>
                  `
    )
    .join("")}
  `;
  //check if win or not
  console.log(word.innerText);
  const innerWord = word.innerText.replace(/\n/g, "");
  console.log(innerWord);
  if (innerWord === selectedWord) {
    showPopUp("Congatulation! You win!!!");
  }
};

showPopUp = function (message) {
  finalMessage.innerText = `${message}`;
  finalMessage.parentElement.parentElement.style.display = "flex";
};

displayWrong = function () {
  document.getElementById("wrong-letters").innerText = `${wrong}`;
};

showMessage = function (message, time) {
  notification.innerText = message;
  notification.style.bottom = "30px";
  setTimeout(() => {
    notification.style.bottom = "-50px";
  }, time);
};

hanging = function (index) {
  parts[index].style.display = "flex";
};

//Init
displayWord();

//Event Listeners
window.addEventListener("keydown", (event) => {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    //check if the key in the correct
    if (
      !correct.includes(event.key) &&
      selectedWord.split("").includes(event.key)
    ) {
      correct.push(event.key);
      displayWord();
    } else if (
      !selectedWord.split("").includes(event.key) &&
      wrong.includes(event.key)
    ) {
      showMessage("You entered it already!", 1000);
    } else if (
      !selectedWord.split("").includes(event.key) &&
      !wrong.includes(event.key)
    ) {
      wrong.push(event.key);
      displayWrong();
      hanging(index);
      if (index === 5) {
        showPopUp("You Loose!");
      }
      index += 1;
    }
  }
});

playAgainBtn.addEventListener("click", () => {
  window.location.reload();
});
