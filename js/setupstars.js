export default function setUpStars() {
  //set up sky with 300 stars
  const starNumber = 300;
  const sky = document.querySelector(".sky");
  let skyFullOfStars = "";
  for (let i = 0; i < starNumber; i++) {
    skyFullOfStars = skyFullOfStars + '<div class="star"></div>';
  }
  sky.innerHTML = skyFullOfStars;

  var screen_width = window.screen.availWidth;
  var screen_height = window.screen.availHeight;
  const stars = document.querySelectorAll(".star");
  console.log(stars);
  for (let i = 0; i < stars.length; i++) {
    stars[i].style.marginLeft = Math.floor(Math.random() * screen_width) + "px";
    stars[i].style.marginTop = Math.floor(Math.random() * screen_height) + "px";
  }
}
