// import checkNavbar from "./navbar.js";
import skillSet from "./skillSet.js";
import setUpStars from "./setupstars.js";
import setUpEmails from "./setUpEmail.js";
import setUpProjects from "./setUpProjects.js";


setUpStars();
setUpEmails();
setUpProjects();


window.addEventListener("scroll", (event) => {
  // // checkNavbar();
  skillSet();
});
