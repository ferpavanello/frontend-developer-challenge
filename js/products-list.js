const $listProducts = document.getElementsByClassName("products-list")[0];
const $buttonMoreProducts = document.getElementsByClassName("more-products")[0]
  .children[0];
let linkRequest =
  "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1";

function loadProducts() {
  axios
    .get(linkRequest)
    .then(response => {
      const data = response.data;
      linkRequest = "https://" + data.nextPage;
      data.products.forEach(element => {
        $listProducts.innerHTML += buildCard(element);
      });
    })
    .catch(error => {
      console.log(error);
    });
}

function buildCard(element) {
  return `
  <div class="product-card">
    <img
      src="${element.image}"
      class="product-image"
    />
    <h4><b>${element.name}</b></h4>
    <p>${element.description}</p>
  </div>
  <div></div>
  `;
}

loadProducts();
