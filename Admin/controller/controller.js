import { validateForm } from "./validate.js";


export let renderListPhone = (data) =>{
    let content = "";
    data.forEach(item =>{
        let{id,name,price,screen,backCamera,frontCamera,img,desc,type}=item;
        content += `
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td class="px-6 py-4">
                    ${id}
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    ${name}
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    ${type}
                </th>
                <td class="px-6 py-4">
                    ${price}
                </td>
                <td class="px-6 py-4">
                    ${screen}
                </td>
                <td class="px-6 py-4">
                    ${backCamera}
                </td>
                <td class="px-6 py-4">
                    ${frontCamera}
                </td>
                <td class="px-6 py-4">
                    <img style="width:150px" src="${img}" alt="">
                </td>
                <td class="px-6 py-4">
                    ${desc}
                </td>
                <td class="px-6 py-4">
                    <button data-id="${id}" onclick="editData(${id})" class="font-medium text-green-600 hover:underline">Sửa</button>
                    <button id="btn-delete" onclick="deleteData(${id})" class="font-medium text-red-600 hover:underline">Xóa</button>
                </td>
            </tr>

        `

    })
    document.getElementById('tblDanhSachSP').innerHTML = content;

}

export let getDataForm = () => {
    if (validateForm()) {
        let id = document.getElementById('ID').value;
        let name = document.getElementById('Name').value;
        let type = document.getElementById('Type').value;
        let price = document.getElementById('Price').value;
        let img = document.getElementById('Photo').value;
        let screen = document.getElementById('Screen').value;
        let backCamera = document.getElementById('backCamera').value;
        let frontCamera = document.getElementById('frontCamera').value;
        let desc = document.getElementById('description').value;

        return { id, name, price, screen, backCamera, frontCamera, img, desc, type };
    } else {
        return null;
    }
 }

export let showDataForm = (data) => {
    let{id,name,price,screen,backCamera,frontCamera,img,desc,type} = data;
    document.getElementById('ID').value = id;
    document.getElementById('Name').value = name;
    document.getElementById('Price').value = price;
    document.getElementById('Screen').value = screen;
    document.getElementById('backCamera').value = backCamera;
    document.getElementById('frontCamera').value = frontCamera;
    document.getElementById('Photo').value = img;
    document.getElementById('description').value = desc;
}

export let onSuccess= (message) => {
    Toastify({
        text: message,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}


export let resetForm = () => {
    document.getElementById('ID').value = "";
    document.getElementById('Name').value = "";
    document.getElementById('Price').value = "";
    document.getElementById('Screen').value = "";
    document.getElementById('backCamera').value = "";
    document.getElementById('frontCamera').value = "";
    document.getElementById('Photo').value = "";
    document.getElementById('Type').value = "";
    document.getElementById('ID').disabled = false;
    document.getElementById("btnAddSubmit").disabled = false;
    let errorElements = document.querySelectorAll('span[id^="sp"]');
    errorElements.forEach(element => {
        element.textContent = "";
    });
}

export let showModal = () => {
    let modal = document.getElementById('defaultModal');
        let modalOverlay = document.getElementById('modalOverlay');
        modal.classList.add('show');
        modalOverlay.classList.add('show');
}

export let hideModal = () => {
    let modal = document.getElementById('defaultModal');
    let modalOverlay = document.getElementById('modalOverlay');
    modal.classList.remove('show');
    modalOverlay.classList.remove('show');
    resetForm();

}

export let selectByType = (data) => {
    let searchType = document.getElementById('typePhone').value;
    let sortOrder = document.getElementById('sortPrice').value;

    let filteredData = searchType === "" ? data : data.filter(item => item.type === searchType);

    if (sortOrder === "up") {
        filteredData.sort((a, b) => a.price - b.price); 
    } else if (sortOrder === "down") {
        filteredData.sort((a, b) => b.price - a.price);
    }

    renderListPhone(filteredData);

    document.getElementById('typePhone').addEventListener('change', function () {
        selectByType(data);
    });
    document.getElementById('sortPrice').addEventListener('change', function () {
        selectByType(data);
    });
};



const modal = document.getElementById('defaultModal');
const modalOverlay = document.getElementById('modalOverlay');
const openModalButton = document.getElementById('defaultModalButton');
const closeModalButton = modal.querySelector('[data-modal-toggle="defaultModal"]');
        
openModalButton.addEventListener('click', () => {
    modal.classList.add('show');
    modalOverlay.classList.add('show');
});
        
            // Đóng modal
closeModalButton.addEventListener('click', () => {
    modal.classList.remove('show');
    modalOverlay.classList.remove('show');
    resetForm();
});
        
            // Đóng modal nếu nhấp bên ngoài modal
window.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        hideModal();
    }
});

