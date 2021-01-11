const skillSet = () => {
  const filler = document.querySelectorAll(".progress-bar");
  const values = [
    "70%",
    "85%",
    "90%",
    "75%",
    "80%",
    "95%",
    "80%",
    "45%",
    "40%"
  ];
  
  if (window.scrollY < 1500) {
    filler.forEach((element) => (element.style.width = "10%"));
  } else {
    for (let i = 0; i < values.length; i++) {
      filler[i].style.width = values[i];
      // filler[i].style.borderRadius = "10px";
    }
  }
}

export default skillSet