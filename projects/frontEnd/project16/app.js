const draggableList = document.getElementById("draggable-list");
const checkBtn = document.getElementById("check");

const data = [
  "Jeff Bezos",
  "Bill Gates",
  "Warren Buffett",
  "Bernard Arnault",
  "Carlos Slim Helu",
  "Amancio Ortega",
  "Larry Ellison",
  "Mark Zuckerberg",
  "Michael Bloomberg",
  "Larry Page",
];

//unknown
const listItems = [];
let dragStartIndex;
//

//function
createList = function () {
  [...data]
    .map((a) => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .forEach((person, index) => {
      const listItem = document.createElement("li");
      listItem.setAttribute("data-index", index);
      listItem.innerHTML = `
    <span class='number'>${index + 1}</span>
    <div class='draggable' draggable='true'>
      <p class='person-name'>${person}</p>
      <i class='fas fa-grip-lines'></i>
    </div>
    `;
      listItems.push(listItem);
      draggableList.appendChild(listItem);

      addEventListener();
    });
};

//
dragStart = function () {
  // console.log("dragStart");
  dragStartIndex = +this.closest("li").getAttribute("data-index");
  // console.log(dragStartIndex);
};

dragOver = function (event) {
  // console.log("dragOver");
  event.preventDefault();
};

dragDrop = function () {
  // console.log("dragDrop");
  const dragEndIndex = +this.getAttribute("data-index");
  console.log(dragEndIndex);
  swapItems(dragStartIndex, dragEndIndex);
  this.classList.remove("over");
};

swapItems = function (from, to) {
  const itemOne = listItems[from].querySelector(".draggable");
  const itemTwo = listItems[to].querySelector(".draggable");

  listItems[from].appendChild(itemTwo);
  listItems[to].appendChild(itemOne);
  console.log(listItems[from]);
  console.log(listItems[to]);
};

dragEnter = function () {
  // console.log("dragEnter");
  this.classList.add("over");
};

dragLeave = function () {
  // console.log("dragLeave");
  this.classList.remove("over");
};

checkOrder = function () {
  listItems.forEach((item, index) => {
    const personName = item.querySelector(".draggable").innerText.trim();
    console.log(personName);
    if (personName !== data[index]) {
      item.classList.add("wrong");
    } else {
      item.classList.remove("wrong");
      item.classList.add("right");
    }
  });
};
//

addEventListener = function () {
  const draggables = document.querySelectorAll(".draggable");
  const dragListItems = document.querySelectorAll(".draggable-list li");

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", dragStart);
  });

  dragListItems.forEach((item) => {
    item.addEventListener("dragover", dragOver);
    item.addEventListener("drop", dragDrop);
    item.addEventListener("dragenter", dragEnter);
    item.addEventListener("dragleave", dragLeave);
  });
};

checkBtn.addEventListener("click", checkOrder);
//Main
createList();
