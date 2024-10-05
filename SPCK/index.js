var userLogin = JSON.parse(localStorage.getItem("userlogin"))

// console.log(userLogin.phone)
if (userLogin){
    document.getElementById("account_name").innerHTML = `<p>${userLogin.phone}</p>`
}

var generate_modal = function () {
    UIkit.modal(`<div id="modal-center" class="uk-flex-top" style ="background-color: none;" uk-modal>
    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical" style ="background-color: none;width:430px;bottom:150px;">

        <img src="./Asset/index/picture/modal_close.png" class="uk-modal-close-default" type = "button" alt="">

        <img src="./Asset/index/picture/modal.png" alt="">

    </div>
</div>`).show();
}
var account_list = [
    {
        phone: "0369999909",
        email:"phongnguyenhuy63@gmail.com",
        password:"12345678"
    }
]

function filter(categories) {
    axios.get("https://66c989ed8a477f50dc30e938.mockapi.io/list_product").then(function (data) {
        var product_info = data.data
        console.log(product_info, categories)

        if (categories === "") {
            var newproductlist = [...product_info]
            console.log({ newproductlist })
            renderProduct(newproductlist)
            return
        }
    
        var newProductList = [...product_info].filter(function (product) {
    
            return product.categories === categories;
        });
    
        console.log({ newProductList });
    
        renderProduct(newProductList);
    })
  
}
var countproduct = 0

function renderProduct(product_info) {
    var productElement = document.getElementById("list_product_topdeal");
    var htmlelement = "";
    for (var index in product_info) {
        htmlelement += `
                        <div class ="product col-sm-6 col-md-4 col-lg-3">
                            <img src="${product_info[index].image}" alt="" id = "image">
                            <p id ="name">${product_info[index].name}</p>
                            <div id ="rate">
                                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                            
                            </div>
                            <div class ="price" style ="display:flex;">
                                <div class ="price2">
                                    <p id = price>${product_info[index].price}</p>
                                    <span>đ<span>
                                </div>
                                <button id ="add_product" onclick="addProduct(${product_info[index].id})" alt ="thêm vào giỏ hàng">Thêm</button>
                            </div>
                            <div class="sale">
                        
                    
                                <p id = "sale">${product_info[index].sale}</p>
                                
                            </div>
                            <div class = "line"></div>
                            <div class ="deli">
                                <img src="./Asset/index/picture/deli_morning.png" alt="">
                                <span id ="delivery_time">${product_info[index].delivery_time}</span>
                            </div>
                        </div>`

    }
    productElement.innerHTML = htmlelement
}

axios.get("https://66c989ed8a477f50dc30e938.mockapi.io/list_product").then(function (data) {
    product_info = data.data
    renderProduct(product_info)
})

var addProduct = function(id){
    countproduct += 1
    document.getElementById("soluong").innerHTML = countproduct
    var CartID = JSON.parse(localStorage.getItem("CartIDlist")) || []
    if (CartID){
        const Newdata = [...CartID,id]
        localStorage.setItem("CartIDlist",JSON.stringify(Newdata))
    }
    

}
generate_modal()
