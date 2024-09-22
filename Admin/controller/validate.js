export let  validateForm = () =>{
    let isValid = true;

    // Validate ID (required, unique)
    let id = document.getElementById("ID").value.trim();
    if (id === "") {
        document.getElementById("spID").innerHTML = "ID là bắt buộc";
        isValid = false;
    } else if (!/^\d+$/.test(id)) {
        document.getElementById("spID").innerHTML = "ID phải là số";
        isValid = false;
    } else {
        document.getElementById("spID").innerHTML = "";
    }

    // Validate Name (required, letters only)
    const name = document.getElementById("Name").value.trim();
    if (name === "") {
        document.getElementById("spName").innerHTML = "Tên là bắt buộc";
        isValid = false;
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
        document.getElementById("spName").innerHTML = "Tên chỉ chứa chữ cái";
        isValid = false;
    } else {
        document.getElementById("spName").innerHTML = "";
    }

    // Validate Price (required, numeric)
    const price = document.getElementById("Price").value.trim();
    if (price === "") {
        document.getElementById("spPrice").innerHTML = "Giá là bắt buộc";
        isValid = false;
    } else if (!/^\d+(\.\d{1,2})?$/.test(price)) {
        document.getElementById("spPrice").innerHTML = "Giá phải là số hợp lệ";
        isValid = false;
    } else {
        document.getElementById("spPrice").innerHTML = "";
    }

    // Validate Photo (required, must be a URL)
    const photo = document.getElementById("Photo").value.trim();
    if (photo === "") {
        document.getElementById("spPhoto").innerHTML = "Đường dẫn hình ảnh là bắt buộc";
        isValid = false;
    }
    // Validate Front Camera (required, any text)
    const frontCamera = document.getElementById("frontCamera").value.trim();
    if (frontCamera === "") {
        document.getElementById("spFrontCamera").innerHTML = "Camera trước là bắt buộc";
        isValid = false;
    } else {
        document.getElementById("spFrontCamera").innerHTML = "";
    }

    // Validate Back Camera (required, any text)
    const backCamera = document.getElementById("backCamera").value.trim();
    if (backCamera === "") {
        document.getElementById("spBackCamera").innerHTML = "Camera sau là bắt buộc";
        isValid = false;
    } else {
        document.getElementById("spBackCamera").innerHTML = "";
    }

    // Validate Screen (required, any text)
    const screen = document.getElementById("Screen").value.trim();
    if (screen === "") {
        document.getElementById("spScreen").innerHTML = "Màn hình là bắt buộc";
        isValid = false;
    } else {
        document.getElementById("spScreen").innerHTML = "";
    }

    // Validate Type (required, any text)
    const type = document.getElementById("Type").value.trim();
    if (type === "") {
        document.getElementById("spType").innerHTML = "Loại sản phẩm là bắt buộc";
        isValid = false;
    } else {
        document.getElementById("spType").innerHTML = "";
    }

    return isValid;
}
