

function renderProductList(data) {
    var productListElement = document.getElementById("cart-list");

    var htmlString = "";

    for (var index in data) {
    htmlString =
      htmlString +
      `
            <tr>
              <td>
                  <img src="${data[index].image}" alt="Giày Nike" class="img-thumbnail me-2" width="50">
                  ${data[index].name}
              </td>
              
              <td>${data[index].price}</td>
              <td>${data[index].price}</td>
              <td>
                  <button class="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i></button>
              </td>
          </tr>
    `;
  }

  productListElement.innerHTML = htmlString;
}

axios
  .get("https://66c989ed8a477f50dc30e938.mockapi.io/list_product")
  .then(function (data) {
    var productList = data.data;

    const myCart = JSON.parse(localStorage.getItem("CartIDlist")) || [];
    console.log(myCart)
    const cartData = [];

    for (var index in myCart) {
      const productId = myCart[index];
      const product = productList.find(function (item) {
        return item.id == productId;
      });

      cartData.push(product);
    }

    console.log(cartData);

    renderProductList(cartData);
});
