// import { CartItem } from "../models/model.js";
import { renderCart, renderProduct } from "./controller.js";

const BASE_LINK = "https://66e65d8617055714e5896820.mockapi.io/phoneData";
let cartShop = [];
let iphoneArr = [];
let samsungArr = [];

var dataJson = localStorage.getItem("CARTSHOP_JSON");
cartShop = JSON.parse(dataJson);
// gọi API lấy data
let fetchData = async () => {
  let res = await axios({
    url: BASE_LINK,
    method: "GET",
  });
  let listPhone = res.data;
  console.log("👉 ~ fetchData ~ listPhone:", listPhone);
  splitArr(listPhone);
  renderProduct(listPhone);
};
fetchData();

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
  console.log("👉 ~ productFilter ~ samsungArr:", samsungArr);
  console.log("👉 ~ productFilter ~ iphoneArr:", iphoneArr);
}
window.productFilter = productFilter;

window.addToCart = (id) => {
  axios({
    url: `${BASE_LINK}/${id}`,
    method: "GET",
  })
    .then((res) => {
      let phone = res.data;
      let existingItem = cartShop.find((item) => item.id === phone.id);
      // let phone = new CartItem(id * 1, name, price, img, desc, type, null);
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
      } else {
        phone.quantity = 1;
        cartShop.push(phone);
      }
      renderCart(cartShop);
      var dataJson = JSON.stringify(cartShop);
      localStorage.setItem("CARTSHOP_JSON", dataJson);
    })
    .catch((err) => {
      console.log("👉 ~ err:", err);
    });
};

window.plusQuantity = (id) => {
  axios({
    url: `${BASE_LINK}/${id}`,
    method: "GET",
  })
    .then((res) => {
      let phone = res.data;
      console.log("👉 ~ .then ~ phone:", phone.quantity);
      let item = cartShop.find((item) => item.id === phone.id);
      if (item && item.quantity >= 0) {
        item.quantity = item.quantity + 1;
        renderCart(cartShop);
        var dataJson = JSON.stringify(cartShop);
        localStorage.setItem("CARTSHOP_JSON", dataJson);
      }
    })
    .catch((err) => {
      console.log("👉 ~ plusQuantity ~ err:", err);
    });
};
window.minusQuantity = (id) => {
  axios({
    url: `${BASE_LINK}/${id}`,
    method: "GET",
  })
    .then((res) => {
      let phone = res.data;
      console.log("👉 ~ .then ~ phone:", phone.quantity);
      let item = cartShop.find((item) => item.id === phone.id);
      if (item && item.quantity > 0) {
        item.quantity = item.quantity - 1;
        renderCart(cartShop);
        var dataJson = JSON.stringify(cartShop);
        localStorage.setItem("CARTSHOP_JSON", dataJson);
      }
    })
    .catch((err) => {
      console.log("👉 ~ plusQuantity ~ err:", err);
    });
};

window.removeItem = (id) => {
  axios({
    url: `${BASE_LINK}/${id}`,
    method: "GET",
  })
    .then((res) => {
      let phone = res.data;
      let item = cartShop.find((item) => item.id === phone.id);
      if (item) {
        let index = cartShop.indexOf(item);
        cartShop.splice(index, 1);
        renderCart(cartShop);
        var dataJson = JSON.stringify(cartShop);
        localStorage.setItem("CARTSHOP_JSON", dataJson);
      }
    })
    .catch((err) => {
      console.log("👉 ~ plusQuantity ~ err:", err);
    });
};

window.payment = () => {
  cartShop = [];
  renderCart(cartShop);
  var dataJson = JSON.stringify(cartShop);
  localStorage.setItem("CARTSHOP_JSON", dataJson);
};
