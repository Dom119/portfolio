const pre = document.getElementById("pre");
const play = document.getElementById("play");
const next = document.getElementById("next");

const audio = document.getElementById("audio");
const cover = document.getElementById("cover");
const title = document.getElementById("title");

const musicContainer = document.querySelector(".music-container");
const progressContainer = document.querySelector(".progress-container");

const progressBar = document.getElementById("progress");

const musicList = ["hey", "summer", "ukulele"];
let position = 2;
title.innerText = musicList[position];

//function
playMusic = function () {
  if (audio.paused) {
    audio.play();
    document.getElementById("play-btn").className = "fa fa-pause";
    musicContainer.classList.add("play");
  } else {
    audio.pause();
    document.getElementById("play-btn").className = "fa fa-play";
    musicContainer.classList.remove("play");
  }
};

setupMusic = function () {
  audio.src = `music/${musicList[position]}.mp3`;
  cover.src = `images/${musicList[position]}.jpg`;
  title.innerText = musicList[position];
  playMusic();
};

updateProgress = function () {
  progressBar.style.width = `${(audio.currentTime / audio.duration) * 100}%`;
};

updateMusic = function (x) {
  const change = x - 515;
  const ratio = (change / 275) * 100;
  progressBar.style.width = `${ratio}%`;
  audio.currentTime = audio.duration * (change / 275);
};

playNext = function () {
  if (position === musicList.length - 1) {
    position = 0;
  } else {
    position++;
  }
  setupMusic();
};

//play button
play.addEventListener("click", () => {
  playMusic();
});

//next button
next.addEventListener("click", () => {
  playNext();
});

pre.addEventListener("click", () => {
  if (position === 0) {
    position = musicList.length - 1;
  } else {
    position -= 1;
  }
  setupMusic();
});

audio.addEventListener("timeupdate", () => {
  updateProgress();
  console.log(audio.duration);
});

progressContainer.addEventListener("click", (event) => {
  updateMusic(event.x);
  console.log(event.x);
});

//continuous
audio.addEventListener("ended", () => {
  playNext();
});
//515 790
