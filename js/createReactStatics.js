//don't use this template at the moment

const createReactStatics = (projects) => {
  const projectDisplay = document.getElementById("projectDisplay");
    projectDisplay.classList.remove('single')

    let content = "";
    for (let i = 0; i < projects.length; i++) {
      content += `
      <a href= '${projects[i].linkURL}' target='_blank' class="project">
        <button class='btn btn-secondary w-100 btn-sm'>${projects[i].projectName}</button>
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
          <button class='learnMoreBtn' >Learn More</button>
        </div>
        <button class='btn btn-outline-light w-100 btn-sm'>View Github Repo</button>
        <button class='btn btn-light w-100 btn-sm'>View Launch Project</button>
      </a>`;
    }
    projectDisplay.innerHTML = content;
}

export default createReactStatics