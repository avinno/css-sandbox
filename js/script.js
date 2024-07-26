let projectsGridItem = document.querySelector(".projects-grid");

fetch('https://api.github.com/users/digitalherding/repos', { 
  method: 'GET'
})
.then(function(response) { return response.json(); })
.then(function(json) {
  // use the json

  for (let i = 0; i < json.length; i++) {
    // Use this as a shell for inserting data from github api into site
    // Use json[i].name for image extensions (for example, img.src = `img/${json[i].name}.webp`)
    // console.log(json[i].name);
    // console.log(json[i].language);
    // console.log(json[i].html_url);
    // console.log(json[i].homepage);

    let gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");

    gridItem.innerHTML = `
          <h2>${json[i].name}</h2>
          <span>${json[i].language}</span>
          <a href="${json[i].html_url}" target="_blank">GitHub Repo Link</a>
          <a href="${json[i].homepage}" target="_blank">Live Preview Link</a>
        `

    projectsGridItem.append(gridItem);
  }

});

let projectsBtn = document.querySelector("#projects-btn");
let projectsBtnHide = document.querySelector("#projects-btn-hide");
let projectsSection = document.querySelector("#section-projects");

projectsBtn.addEventListener("click", function (e) {
  projectsSection.style.display = "block";
  projectsBtnHide.style.display = "flex";
  projectsBtn.style.display = "none";
});

projectsBtnHide.addEventListener("click", function (e) {
  projectsSection.style.display = "none";
  projectsBtnHide.style.display = "none";
  projectsBtn.style.display = "flex";
});