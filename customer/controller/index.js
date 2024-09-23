const BASE_LINK = "https://66e65d8617055714e5896820.mockapi.io/phoneData";

// gọi API lấy data
axios({
  url: BASE_LINK,
  method: "GET",
})
  .then((res) => {
    renderProduct(res.data);
  })
  .catch((err) => {
    console.log("👉 ~ err:", err);
  });
// render product
function renderProduct(phoneList) {
  let content = "";
  phoneList.forEach((phone) => {
    console.log("👉 ~ phoneList.forEach ~ phone:", phone);
    return (content += `
      <div class="col">
        <div class="card shadow-2xl">
            <img src="${phone.img}" class="card-img-top w-50" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-2xl">${phone.name}</h5>
              <p class="card-text">
                ${phone.desc}
              </p>
              <div class="buttonCard d-flex justify-content-between">
                <button href="#">Buy Now</button>
                <button href="#">Add to Cart</button>
              </div>
            </div>
          </div>
      </div>
    `);
  });
  document.querySelector(".product_body .row").innerHTML = content;
}
