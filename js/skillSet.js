export default function skillSet() {
  const filler = document.querySelectorAll(".measurement-filler");
  const values = [
    "100%",
    "85%",
    "90%",
    "75%",
    "70%",
    "80%",
    "70%",
    "90%",
    "70%",
  ];
  if (window.scrollY < 1500) {
    filler.forEach((element) => (element.style.width = "0%"));
  } else {
    for (let i = 0; i < 9; i++) {
      filler[i].style.width = values[i];
      filler[i].style.borderRadius = "10px";
    }
  }
}
