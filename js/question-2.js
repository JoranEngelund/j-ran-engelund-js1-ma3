// Question 2

const loader = document.querySelector(".loader");

stopLoader = () => loader.classList.remove("loader");

const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=4a55d3c892a14d6382df7f7f6f42ad0a";

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
                                        <h2>Name: ${games[i].name}</h2>
                                        <h3>Rating: ${games[i].rating}</h3>
                                        <h4>Tags: ${games[i].tags.length}</h4>
                                    </div>`;
    }
  } catch (error) {
    resultsContainer.innerHTML = `<div class="result">An error has occurred: ${error}</div>`;
  }
}

getApiRawg();
