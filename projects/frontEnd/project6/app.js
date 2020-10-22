//show ui based on data
//take the data in by add transaction
//link that data to local storage

//variable
const list = document.getElementById("list");
const submitBtn = document.querySelector(".btn");
const text = document.getElementById("text");
const amount = document.getElementById("amount");
const balance = document.getElementById("balance");
const income = document.getElementById("money-plus");
const expense = document.getElementById("money-minus");
const container = document.querySelector(".container");

//example data
const dummyData = [
  { id: 1, text: "Di Choi", amount: -100 },
  { id: 2, text: "Mua may tinh", amount: -500 },
  { id: 3, text: "Lanh luong", amount: +3000 },
];

//assign data
var data;

if (localStorage.getItem("tracking")) {
  data = JSON.parse(localStorage.getItem("tracking"));
} else {
  data = dummyData;
}

//show data
showData = function (data) {
  const html = data
    .map((element) => {
      let tracking;
      let tracking_class;
      if (element.amount > 0) {
        tracking = "+";
        tracking_class = "plus";
      } else {
        tracking = "-";
        tracking_class = "minus";
      }
      return `
        <li class="${tracking_class} ${element.id}">
          ${element.text} 
          <span>${tracking}$${Math.abs(element.amount)}</span>
          <button class="delete-btn">x</button>
        </li>
      `;
    })
    .join("");

  list.innerHTML = html;

  //show the balance, income, expense
  const dataCalculate = data.map((element) => +element.amount);
  balance.innerText = dataCalculate.reduce(
    (acc, currentValue) => acc + currentValue,
    0
  );

  income.innerText = `+${dataCalculate
    .filter((element) => element > 0)
    .reduce((acc, cur) => acc + cur, 0)}`;

  expense.innerText = `${dataCalculate
    .filter((element) => element < 0)
    .reduce((acc, cur) => acc + cur, 0)}`;
};

addData = function (idEl, textEl, amountEl) {
  data.push({
    id: idEl,
    text: textEl,
    amount: amountEl,
  });
  console.log(data);
};

randomID = function () {
  let id = Math.floor(Math.random() * 10000000);
  return id;
};

pushDataToLocalStorage = function (data) {
  localStorage.clear();
  localStorage.setItem("tracking", JSON.stringify(data));
};

showData(data);

//enter data from submit button
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(1);
  if (text.value === "" || amount.value === "") {
    alert("Please enter both Text and Amount.");
  } else {
    addData(randomID(), text.value, +amount.value);
    showData(data);
    pushDataToLocalStorage(data);
    text.value = "";
    amount.value = "";
  }
});

//delete button
container.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    const idElement = event.target.parentElement.classList[1];
    data = data.filter((element) => element.id != idElement);
    console.log(idElement);
    console.log(data);
    //show data again
    showData(data);
    pushDataToLocalStorage(data);
  }
});
