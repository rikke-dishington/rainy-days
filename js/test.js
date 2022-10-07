import products from "./products.js";

const productsContainer = document.querySelector(".products-container");

let productsToRender = products;

function renderProducts() {
  productsContainer.innerHTML = "";

  productsToRender.forEach(function (products) {
    productsContainer.innerHTML += `<a href="details.html?id=${products.id}" class="card">
                                        <div class="image" style="background-image: url(${products.image});"></div>
                                        <div class="details">
                                            <h2>${products.title}</h2>
                                            <h3>${products.price}</h3>
                                        </div>
                                    </a>`;
  });
}

renderProducts();
