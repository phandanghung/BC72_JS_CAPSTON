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
  let totalSum = 0;
  cartArr.forEach((item) => {
    let { id, name, price, img, desc, quantity } = item;
    let itemSum = price * quantity;
    totalSum += itemSum;
    return (content += `
          <div class="row mb-5">
            <div class="col-4 d-flex flex-column align-item-center justify-center">
                <img src="${img}"/>
            </div>
            <div class="col-8">
                <div class="remove d-flex justify-content-between">
                  <h3 class="fs-5 fw-bold">${name}</h3>
                  <button onclick="removeItem(${id})"><i class="fa fa-trash-alt"></i></button>
                </div>
                <p class="mt-3 fs-6 fst-italic">${desc}</p>
                <h4 class="fs-4 fw-bold text-danger">${price}$</h4>
                <div class="upDownButton d-flex justify-between">
                  <button onclick="minusQuantity(${id})" class="btn border-2"><i class="fa fa-minus"></i></button>
                  <input type="text" id="quantityItem${id}" class="w-25 border-2" name="quantityItem" value="${quantity}" readonly>
                  <button onclick="plusQuantity(${id})" class="btn border-2"><i class="fa fa-plus"></i></button>
                </div>
            </div>
          </div>
    `);
  });
  document.querySelector("#totalPrice").innerHTML = `Tổng cộng: ${totalSum}$`;
  document.querySelector("#shopCart").innerHTML = content;
};
