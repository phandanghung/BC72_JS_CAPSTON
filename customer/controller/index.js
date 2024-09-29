import { CartItem } from "../models/model.js";
import { renderProduct } from "./controller.js";

const BASE_LINK = "https://66e65d8617055714e5896820.mockapi.io/phoneData";
let cartShop = [];
let iphoneArr = [];
let samsungArr = [];
// gọi API lấy data
let fetchData = async () => {
  let res = await axios({
    url: BASE_LINK,
    method: "GET",
  });
  return res.data.map((item) => {
    let { id, name, price, img, desc, type, quanity } = item;
    return new CartItem(id, name, price, img, desc, type, quanity);
  });
};
let listPhone = await fetchData();
splitArr(listPhone);
renderProduct(listPhone);

function splitArr(array) {
  array.forEach((item) => {
    if (item.type == "iphone") {
      iphoneArr.push(item);
    } else {
      samsungArr.push(item);
    }
  });
}
function productFilter() {
  let filter = document.querySelector("#filterproducts").value;
  if (filter == "Sắp xếp") {
    fetchData();
  } else if (filter == "iphone") {
    renderProduct(iphoneArr);
  } else {
    renderProduct(samsungArr);
  }
}

window.productFilter = productFilter;

window.addToCart = (id) => {
  let data = listPhone;
  if (cartShop) cartShop.push(data[id - 1]);
  console.log("👉 ~ cartShop:", data[id - 1]);
  console.log("👉 ~ cartShop:", cartShop);
};
