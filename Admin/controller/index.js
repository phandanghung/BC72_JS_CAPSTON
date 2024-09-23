import { Phone } from "../model/model.js";
import { getDataForm, hideModal, onSuccess, selectByType, showDataForm, showModal } from "./controller.js";


const BASE_URL = `https://66e65d8617055714e5896820.mockapi.io/phoneData`;

let fetchData = async () => {
    try {
        let res = await axios({
            url: BASE_URL,
            method: "GET",
        });

        let listPhone = res.data.map((item) => {
            let { id, name, price, screen, backCamera, frontCamera, img, desc,type } = item;
            return new Phone(id, name, price, screen, backCamera,frontCamera, img, desc,type);
        });

        console.log(listPhone);
        selectByType(listPhone.reverse());
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};
fetchData();


window.createData = () => {
    let data = getDataForm();
    if (data) {
        axios({
            url: BASE_URL,
            method: "POST",
            data: data,
        })
        .then(() => {
            fetchData();
            onSuccess("Thêm sản phẩm thành công");
            hideModal();
        })
        .catch(err => {
            console.log(err);
        });
    } else {
        console.log("Invalid data");
    }
};

window.deleteData = (id) =>{
    axios({
        url: `${BASE_URL}/${id}`,
        method:"DELETE",
    })
    .then(() =>{
        fetchData();
        onSuccess("Xóa thành công");   
    })
    .catch(err =>{
        console.log(err)
    })

}



window.editData = (id) =>{
    axios({
        url: `${BASE_URL}/${id}`,
        method:"GET",
    })
    .then((res)=>{
        showModal();
        document.getElementById("ID").disabled = true;
        document.getElementById("btnAddSubmit").disabled = true;
        showDataForm(res.data);
        resetForm()
    })
}

window.updateData = () =>{
    let data = getDataForm();
    axios({
        url: `${BASE_URL}/${data.id}`,
        method:"PUT",
        data:data,
    })
    .then(() =>{
        fetchData();
        onSuccess("Cập nhật thành công");
        hideModal();
    })
}

