import checkNavbar from "./navbar.js";
import fillSkillSection from "./skillSet.js";
import setUpProjectFrontEnd from "./projectFE.js";
import setUpProjectBackEnd from "./projectBE.js";
import setUpStars from "./setupstars.js";

setUpStars();
setUpProjectFrontEnd();
setUpProjectBackEnd();

window.addEventListener("scroll", (event) => {
  checkNavbar();
  fillSkillSection();
});
