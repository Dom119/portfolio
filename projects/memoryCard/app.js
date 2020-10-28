//show data to UI
//activate all button
//add data from UI to database
//save data to local storage

var cards = document.querySelectorAll(".card");
const current = document.getElementById("current");
const pre = document.getElementById("pre");
const next = document.getElementById("next");
const addNew = document.getElementById("show");
const addContainer = document.getElementById("add");
const addData = document.getElementById("add-card");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const clear = document.getElementById("clear");

const dummyData = [
  {
    question: "What must a variable begin with?",
    answer: "A letter, $ or _",
    display: "yes",
  },
  {
    question: "What is a variable?",
    answer: "Container for a piece of data",
    display: "no",
  },
  {
    question: "Example of Case Sensitive Variable",
    answer: "thisIsAVariable",
    display: "no",
  },
];

var data = [];
var index = 0;

getData = function () {
  if (JSON.parse(localStorage.getItem("data")) === null) {
    data = dummyData;
  } else {
    data = JSON.parse(localStorage.getItem("data"));
    defaultedNumber = JSON.parse(localStorage.getItem("defaultedNumber"));
    console.log(2);
  }
};

showDataToUI = function () {
  data.forEach((memo, index) => {
    const div = document.createElement("div");
    div.classList.add("card");
    if (memo.display === "yes") {
      div.classList.add("active");
      current.innerText = `${index + 1}/${data.length}`;
    }
    div.innerHTML = `
        <div class="inner-card">
          <div class="inner-card-front">
            <p>${memo.question}</p>
          </div>
          <div class="inner-card-back">
            <p>${memo.answer}</p>
          </div>
        </div>`;
    document.getElementById("cards-container").appendChild(div);
    div.addEventListener("click", () => {
      div.classList.toggle("answer");
      console.log(1);
    });
  });
};

addDataToLocalStorage = function () {
  localStorage.clear();
  localStorage.setItem("data", JSON.stringify(data));
  localStorage.setItem("index", index);
};

//Main Init
getData();
showDataToUI();

next.addEventListener("click", () => {
  data[index].display = "no";
  if (index < data.length - 1) {
    index++;
  } else {
    index = 0;
  }
  data[index].display = "yes";
  showDataToUI();
});

pre.addEventListener("click", () => {
  data[index].display = "no";
  if (index > 0) {
    index--;
  } else {
    index = data.length - 1;
  }
  data[index].display = "yes";
  showDataToUI();
});

addNew.addEventListener("click", () => {
  addContainer.classList.add("show");
});

document.getElementById("hide").addEventListener("click", () => {
  addContainer.classList.remove("show");
});

addData.addEventListener("click", () => {
  if (question.value === "" || answer.value === "") {
    alert("Please enter both question and answer");
  } else {
    const newData = {
      question: `${question.value}`,
      answer: `${answer.value}`,
      display: "no",
    };
    data.push(newData);
    addDataToLocalStorage();
    addContainer.classList.remove("show");
    showDataToUI();
  }
});

clear.addEventListener("click", () => {
  data = [];
  index = 0;
  console.log(data);
  document.getElementById("cards-container").innerHTML = "";
  current.innerText = "0/0";
});
