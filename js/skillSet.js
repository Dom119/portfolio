export default function skillSet() {
  const filler = document.querySelectorAll(".measurement-filler");
  const values = [
    "70%",
    "85%",
    "90%",
    "75%",
    "70%",
    "80%",
    "95%",
    "90%",
    "60%",
    "70%",
  ];
  if (window.scrollY < 1500) {
    filler.forEach((element) => (element.style.width = "0%"));
  } else {
    for (let i = 0; i < values.length; i++) {
      filler[i].style.width = values[i];
      filler[i].style.borderRadius = "10px";
    }
  }
}
