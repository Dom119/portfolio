const msgEl = document.getElementById("msg");
const msg2 = document.getElementById("msg2");
const container = document.querySelector(".container");

const randomNum = getRandomNumber();

console.log("Correct Number:", randomNum);

window.SpeechRecognition = window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

function init() {
  recognition.start();
}

//
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function onSpeak(event) {
  writeMessage(event.results[0][0].transcript);
  checkNumber(event.results[0][0].transcript);
}

function writeMessage(message) {
  msgEl.innerHTML = `
  <div>You Said:</div>
  <span class='box'>${message}</span>`;
}

function checkNumber(message) {
  console.log(1);
  const number = parseInt(message);
  if (Number.isNaN(number)) {
    console.log("false");
    msg2.innerHTML = `<div>Please say a number</div>`;
  } else {
    if (number === randomNum) {
      console.log(2);
      container.innerHTML = `
      <div class='after'>
      <h5>Congratulation, you got the correct number!</h5>
      <h5>It's ${number}</h5>
      <button class='btn'>Play Again</button>
      </div>`;
    }
  }
}

recognition.addEventListener("result", onSpeak);
recognition.addEventListener("end", init);
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn")) {
    window.location.reload();
  }
});

//
init();
