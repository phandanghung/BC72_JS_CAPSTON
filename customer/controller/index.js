import { renderProduct } from "./controller.js";

const BASE_LINK = "https://66e65d8617055714e5896820.mockapi.io/phoneData";
// let cartShop = [];
let iphoneArr = [];
let samsungArr = [];
// gọi API lấy data
let fetchData = async () => {
  let res = await axios({
    url: BASE_LINK,
    method: "GET",
  });
  return res.data;
};
let result = await fetchData();
renderProduct(result);

function splitArr() {
  result.forEach((item) => {
    if (item.type == "iphone") {
      iphoneArr.push(item);
    } else {
      samsungArr.push(item);
    }
  });
}
splitArr();
function productFilter() {
  let filter = document.querySelector("#filterproducts").value;
  console.log("👉 ~ productFilter ~ filter:", filter);
  if (filter == "Sắp xếp") {
    renderProduct(result);
  } else if (filter == "iphone") {
    renderProduct(iphoneArr);
  } else {
    renderProduct(samsungArr);
  }
}

window.productFilter = productFilter;

function addToCart(id) {
  console.log("👉 ~ addToCart ~ id:", id);
}

window.addToCart = addToCart;
