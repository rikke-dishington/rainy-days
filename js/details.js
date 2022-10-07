const detailContainer = document.querySelector(".products-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://musing-payne-7eb636.netlify.app/" + id;

console.log(url);

async function fetchGame() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    console.log(details);

    createHtml(details);
  } catch (error) {
    console.log(error);
  }
}

fetchGame();

function createHtml(details) {
  detailsContainer.innerHTML = `<h1>${details.title}</h1>
                                <div class="details-image" 
                                    style="background-image: url('${details.background_image}')"></div>
                                <div class="details-description">${details.description}</div>`;
}
