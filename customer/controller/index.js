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
function renderProduct(phone) {
  console.log("👉 ~ renderProduct ~ phone:", phone);
}
