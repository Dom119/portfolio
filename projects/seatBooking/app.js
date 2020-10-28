const container = document.querySelector(".container");
const seats = document.querySelectorAll(".seat");
const selectedMovie = document.getElementById("movie");
const movies = document.querySelectorAll("option");
const count = document.querySelector(".count");
const total = document.querySelector(".total");
const clear = document.querySelector(".clear");

//get the price
currentPrice = function () {
  let currentPrice;
  const prices = [...movies].map((movie) => movie.value);
  let selectedIndex = selectedMovie.selectedIndex;
  currentPrice = prices[selectedIndex];
  return currentPrice;
};

calculatePrice = function () {
  // console.log(seats);
  // console.log(seats[0].classList);
  let count = 0;
  seats.forEach((seat) => {
    if (seat.classList.contains("selected")) {
      count += 1;
    }
  });
  let selectedSeats = count - 1; //they count the selected seat on top as well
  return {
    selectedSeats: selectedSeats,
    totalPrice: selectedSeats * currentPrice(),
  };
};

deleteSelected = function () {
  seats.forEach((seat) => {
    if (seat.classList.contains("selected")) {
      seat.classList.remove("selected");
    }
  });
  seats[1].classList.add("selected");
  total.innerText = 0;
  count.innerText = 0;
};

pushToLocalStorage = function (seats) {
  localStorage.clear();
  let selected = [...seats].map((seat) => seat.classList.contains("selected"));
  localStorage.setItem("myItem", JSON.stringify(selected));
  localStorage.setItem("selected", { ...seats }); //does not work
};
//event
document.addEventListener("DOMContentLoaded", () => {
  let storage = localStorage.getItem("myItem");
  // console.log(storage);
  let myArr = storage.split("[");
  myArr = myArr[1].split("]");
  myArr = myArr[0].split(",");
  for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] === "true") {
      seats[i].classList.add("selected");
    }
  }
  count.innerText = calculatePrice().selectedSeats;
  total.innerText = calculatePrice().totalPrice;
});

currentPrice();
selectedMovie.addEventListener("change", () => {
  currentPrice();
  deleteSelected();
});

container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    count.innerText = calculatePrice().selectedSeats;
    total.innerText = calculatePrice().totalPrice;
    pushToLocalStorage(seats);
    // console.log(localStorage.getItem("selected"));
  }
});

clear.addEventListener("click", () => {
  console.log(1);
  seats.forEach((seat) => {
    if (seat.classList.contains("selected")) {
      seat.classList.remove("selected");
    }
  });
  seats[1].classList.add("selected");
  count.innerText = 0;
  total.innerText = 0;
});
