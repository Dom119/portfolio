import checkNavbar from "./navbar.js";
import fillSkillSection from "./skillSet.js";
import setUpProjectFrontEnd from "./projectFE.js";
import setUpProjectBackEnd from "./projectBE.js";
import setUpStars from "./setupstars.js";
import setUpEmails from "./setUpEmail.js";

setUpStars();
setUpProjectFrontEnd();
setUpProjectBackEnd();
setUpEmails();

window.addEventListener("scroll", (event) => {
  checkNavbar();
  fillSkillSection();
});
