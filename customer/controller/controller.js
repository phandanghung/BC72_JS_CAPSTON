export let renderProduct = (phoneArr) => {
  let content = "";
  phoneArr.forEach((phone) => {
    let { id, name, price, img, desc, type } = phone;
    return (content += `
        <div class="col">
          <div class="card shadow-3xl">
              <img src="${img}" class="card-img-top w-50" alt="..." />
              <div class="card-body">
                <h2 class="card-title text-3xl font-medium">${name}</h2>
                <div>
                  <p class="text-red-600 d-inline-block pt-3 text-2xl font-bold">${price}$</p>
                </div>
                <p class="card-text fst-italic py-1">
                  ${desc}
                </p>
                <div class="buttonCard d-flex justify-content-between">
                  <button href="#">Buy Now</button>
                  <button href="#" onclick="addToCart(${id})" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Add to Cart</button>
                </div>
              </div>
            </div>
        </div>
      `);
  });
  document.querySelector(".product_body .row").innerHTML = content;
};

export let renderCart = (cartArr) => {
  let content = "";
  cartArr.reverse().forEach((item) => {
    let { id, name, price, img, desc, quanity } = item;
    return (content += `
        <tr>
          <td><img src="${img}"/></td>
          <td>${name}</td>
          <td>${price}</td>
          <td>${desc}</td>
          <td>${quanity}</td>
        </tr>
    `);
  });
  document.querySelector("#shopCart table").innerHTML = content;
};
