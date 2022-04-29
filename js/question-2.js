// Question 2

const loader = document.querySelector(".loader");

stopLoader = () => loader.classList.remove("loader");

const proxy = "https://noroffcors.herokuapp.com/";
const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=0b59517753684cbb8bcc637960af709a";

const corsUrl = proxy + url;

const resultsContainer = document.querySelector(".results");

async function getApiRawg() {
  try {
    const response = await fetch(corsUrl);
    const data = await response.json();
    stopLoader();
    const games = data.results;

    for (let i = 0; i < games.length; i++) {
      if (i === 8) {
        break;
      }

      resultsContainer.innerHTML += `<div class="result">
                                        <h2>Name: ${games[i].name}</h2>
                                        <h3>Rating: ${games[i].rating}</h3>
                                        <h4>Tags: ${games[i].tags.length}</h4>
                                    </div>`;
    }
  } catch (error) {
    stopLoader();
    resultsContainer.innerHTML += `<div class="result">An error has occurred: ${error}</div>`;
  }
}

getApiRawg();
