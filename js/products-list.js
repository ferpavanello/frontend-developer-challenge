let $listProducts = document.getElementsByClassName("products-list")[0];

axios
  .get(
    "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1"
  )
  .then(response => {
    const data = response.data;
    data.products.forEach(element => {
      $listProducts.innerHTML += buildCard(element);
      console.log(element.name);
    });
  })
  .catch(error => {
    console.log(error);
  });

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
