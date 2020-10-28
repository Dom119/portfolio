const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const year = document.getElementById("year");

//reasoning the time
const thisYear = new Date().getFullYear();
const nextYearFirstDay = new Date(`${thisYear + 1}`, 00, 01, 00, 00, 00, 00);
const saveTime = 1 * 60 * 60 * 1000;
console.log(nextYearFirstDay);

showTime = function () {
  const today = new Date();
  const timeInterval = nextYearFirstDay - today + saveTime;

  const s = Math.floor((timeInterval / 1000) % 60);
  const m = Math.floor((timeInterval / 1000 / 60) % 60);
  const h = Math.floor((timeInterval / 1000 / 60 / 60) % 24);
  const d = Math.floor(timeInterval / 1000 / 60 / 60 / 24);

  days.innerText = `${d}`;
  hours.innerText = `${h}`;
  minutes.innerText = `${m}`;
  seconds.innerText = `${s}`;

  year.innerText = `${thisYear + 1}`;
};

setInterval(showTime, 1000);
