import checkNavbar from "./navbar.js";
import fillSkillSection from "./skillSet.js";
import setUpProjectFrontEnd from "./projectFE.js";
import setUpProjectBackEnd from "./projectBE.js";
import setUpStars from "./setupstars.js";
import setUpEmails from "./setUpEmail.js";
import setUpProjects from "./setUpProjects.js";

setUpStars();
setUpEmails();

setUpProjects();

// setUpProjectFrontEnd();
// setUpProjectBackEnd();

window.addEventListener("scroll", (event) => {
  checkNavbar();
  fillSkillSection();
});
