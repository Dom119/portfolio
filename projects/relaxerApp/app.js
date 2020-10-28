const container = document.getElementById("container");
const text = document.getElementById("text");

animation = function () {
  text.innerText = `Breathe In`;
  container.className = "container grow";
  setTimeout(() => {
    text.innerText = `Hold`;

    setTimeout(() => {
      text.innerText = `Breathe Out`;
      container.className = "container shrink";
    }, 1500);
  }, 3000);
};

animation();
setInterval(animation, 7500);
