import products from "./products.js";

const detailContainer = document.querySelector(".products-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const product = products + id;

console.log(product);

function createHtml(product) {
  detailContainer.innerHTML = `<div class="details-image" url('${product.image}')"></div>
                                <div class="details-title"><h1>${product.title}</h1></div>
                                <div class="details-description"><p>${product.description}</p></div>
                                <div class="details-price"><h2>${product.price}</h2></div>`;
}
