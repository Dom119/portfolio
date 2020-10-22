const API = "https://api.lyrics.ovh/suggest";

const searchForm = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");
const result = document.getElementById("result");
const more = document.getElementById("more");

var next = "";
var pre = "";

searchSong = function (term) {
  fetch(`${API}/${term}`)
    .then((res) => res.json())
    .then((data) => displayData(data));
};

displayData = function (data) {
  console.log(data);
  result.innerHTML = `
  <ul>${data.data
    .map(
      (song) => ` <li>
        <span><strong>${song.artist.name}</strong> - ${song.title}</span>
        <button class='btn' song-artist='${song.artist.name}' song-title='${song.title}'>Get Lyrics</button>
      </li>`
    )
    .join("")}</ul>`;

  if (data.next || data.pre) {
    more.innerHTML = `
    ${data.pre ? `<button class='btn' >Pre<button>` : ""}
    ${data.next ? `<button class='btn' >Next</button>` : ""}
    `;
  }

  next = data.next;
  pre = data.pre;
};

getMore = function (url) {
  console.log(url);
  fetch(`https://cors-anywhere.herokuapp.com/${url}`)
    .then((res) => res.json())
    .then((data) => displayData(data));
};

getLyric = function (artist, title) {
  fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    .then((res) => res.json())
    .then((data) => {
      let html = data.lyrics.replace(/(\r\n|\r|\n)/g, "<br/>");
      result.innerHTML = `<h2>${title} - ${artist}</h2>
      ${html}`;
    });
};

//Event listener
searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (searchForm.value === "") {
    alert("Please enter artist or song name...");
  } else {
    searchSong(searchForm.value);
  }
});

//more button
more.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn")) {
    getMore(next);
  }
});

result.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn")) {
    const button = event.target;
    const artist = button.getAttribute("song-artist");
    const title = button.getAttribute("song-title");
    getLyric(artist, title);
  }
});
