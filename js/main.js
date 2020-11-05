// import checkNavbar from "./navbar.js";
import fillSkillSection from "./skillSet.js";
import setUpStars from "./setupstars.js";
import setUpEmails from "./setUpEmail.js";
import setUpProjects from "./setUpProjects.js";

setUpStars();
setUpEmails();
setUpProjects();

// setUpProjectFrontEnd();
// setUpProjectBackEnd();

window.addEventListener("scroll", (event) => {
  // checkNavbar();
  fillSkillSection();
});
