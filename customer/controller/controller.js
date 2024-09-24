export let renderProduct = (phoneList) => {
  let content = "";
  phoneList.forEach((phone) => {
    return (content += `
        <div class="col">
          <div class="card shadow-3xl">
              <img src="${phone.img}" class="card-img-top w-50" alt="..." />
              <div class="card-body">
                <h2 class="card-title text-3xl font-medium">${phone.name}</h2>
                <div>
                  <p class="text-red-600 d-inline-block pt-3 text-2xl font-bold">${phone.price}$</p>
                </div>
                <p class="card-text fst-italic py-1">
                  ${phone.desc}
                </p>
                <div class="buttonCard d-flex justify-content-between">
                  <button href="#">Buy Now</button>
                  <button href="#" onclick="addToCart(${phone.id})" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Add to Cart</button>
                </div>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                  <div class="offcanvas-header">
                    <h5 id="offcanvasRightLabel" class="text-xl font-bold">GIỎ HÀNG</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div class="offcanvas-body">
                    ...
                  </div>
                </div>
              </div>
            </div>
        </div>
      `);
  });
  document.querySelector(".product_body .row").innerHTML = content;
};
