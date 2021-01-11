function showProjectsJavaScript(projects) {
    const projectDisplay = document.getElementById("projectDisplay");
    projectDisplay.classList.remove('single')

    let content = "";
    for (let i = 0; i < projects.length; i++) {
      content += `
      <a href= '${projects[i].linkURL}' target='_blank' class="project">
        <div class="head">
          <div class="projectTitle">${projects[i].projectName}</div>
        </div>
        <div class="main">
          <img src="images/${projects[i].projectName}.png" />
          <ul class="technologies">
      `;
      let keyWordList = "";
      for (let j = 0; j < projects[i].keyword.length; j++) {
        keyWordList += `<li>${projects[i].keyword[j]}</li>`;
      }
      content += keyWordList;
      content += ` </ul>
          <button class='learnMoreBtn btn ' href="${projects[i].linkURL}" >Launch this</button>
        </div>
      </a>`;
    }
    projectDisplay.innerHTML = content;
}
  
export default showProjectsJavaScript
