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
    <img src="${element.image}" class="product-image" />
    <dl class="description-product">
      <dd class="name">${element.name}</dd>
      <dd class="text description">${element.description}</dd>
      <dd class="text oldPrice">De: ${formatNumber(element.oldPrice)}</dd>
      <dd class="price">Por: ${formatNumber(element.price)}</dd>
      <dd class="text">Ou 2x ${formatNumber(element.price / 2)}</dd>
    </dl>
    <div class="card-button">
      <button class="button">Comprar</button>
    </div>
  </div>
  `;
}

function formatNumber(number) {
  const format = {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "BRL"
  };
  return number.toLocaleString("pt-BR", format);
}

loadProducts();
