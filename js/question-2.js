// Question 2

const loader = document.querySelector(".loader");

stopLoader = () => loader.classList.remove("loader");

const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=0b59517753684cbb8bcc637960af709a";

const resultsContainer = document.querySelector(".results");

async function getApiRawg() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    stopLoader();
    const games = data.results;

    for (let i = 0; i < games.length; i++) {
      if (i === 8) {
        break;
      }

      resultsContainer.innerHTML += `<div class="result">
                                        <div>Name: ${games[i].name}</div>
                                        <div>Rating: ${games[i].rating}</div>
                                        <div>Tags: ${games[i].tags.length}</div>
                                    </div>`;
    }
  } catch (error) {
    resultsContainer.innerHTML += `<div class="result">An error has occurred: ${error}</div>`;
  }
}

getApiRawg();
