var generate_modal = function () {
    UIkit.modal(`<div id="modal-center" class="uk-flex-top" style ="background-color: none;" uk-modal>
    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical" style ="background-color: none;width:430px;">

        <img src="./Asset/index/picture/modal_close.png" class="uk-modal-close-default" type = "button" alt="">

        <img src="./Asset/index/picture/modal.png" alt="">

    </div>
</div>`).show();
}
var generate_signup_modal = function(){
    var signup_modal = UIkit.modal(`
        <div id="modal-center" class="uk-flex-top" style ="background-color: none;display:flex;" uk-modal>
            <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical" style ="background-color: none; margin:0 auto; display:flex">
                <img src="./Asset/index/picture/modal_close.png" class="uk-modal-close-default" style ="left:845px;" type = "button" alt="">
                <div class ="big_container" style ="display:flex; ">
                    <div class ="form" style ="width: 500px;
                    padding: 40px 45px 24px;
                    background: rgb(255, 255, 255);border-radius: 20px 0 0 20px;">
                        <h4>Xin chào</h4>
                        <p><a onclick ="generate_modal_account()" style ="cursor: pointer;color:rgb(10, 104, 255)">Đăng nhập</a> hoặc <a onclick = "generate_signup_modal()" style ="cursor: pointer;color:rgb(10, 104, 255)">Tạo tài khoản</a></p>
                        <input class ="form-control" type="tel" name="tel" id ="tel" placeholder="Số điện thoại"  value="" style ="width: 100%;padding: 10px 0px ;font-size: 24px;color: rgb(36, 36, 36);outline: none;border:none;margin:1.5px 0">
                        <div id="tel-feedback" style ="color:red">
                            
                        </div>
                        <div style ="background-color:rgb(224, 224, 224); width: 100%;height: 0.8px;margin:1.5px 0"
                        ></div>
                        <input class ="form-control" type="email" name="email" id ="email_signup" placeholder="Email"  value="" style ="width: 100%;padding: 10px 0px ;font-size: 24px;color: rgb(36, 36, 36);outline: none;border:none;margin:1.5px 0">
                        <div id="email-feedback_signup" style ="color:red">
                            
                        </div>
                        <div style ="background-color:rgb(224, 224, 224); width: 100%;height: 0.8px;margin:1.5px 0"
                        ></div>
                        <input class ="form-control" type="password" name="password" id ="password_signup" placeholder="Mật khẩu"  value="" style ="width: 100%;padding: 10px 0px ;font-size: 24px;color: rgb(36, 36, 36);outline: none;border:none;margin:1.5px 0">
                        <div id="pass-feedback_signup" style ="color:red">
                            
                        </div>
                        <div style ="background-color:rgb(224, 224, 224); width: 100%;height: 0.8px;margin:1.5px 0"
                        ></div>
                        <input class ="form-control" type="password" name="password" id ="cf_password" placeholder="Xác nhận mật khẩu"  value="" style ="width: 100%;padding: 10px 0px ;font-size: 24px;color: rgb(36, 36, 36);outline: none;border:none;margin:1.5px 0">
                        <div id="cf_pass-feedback" style ="color:red">
                            
                        </div>
                        <div style ="background-color:rgb(224, 224, 224); width: 100%;height: 0.8px;margin:1.5px 0"
                        ></div>
                        
                        
                        <button onclick="signup()" style="display:block;background-color:rgb(255, 66, 78);width:100%;height:50px;border-radius:8px;color:white;font-size:20px;margin-top:15px;">Tiếp Tục</button>
                        
                        
                    </div>
                    <img src="./Asset/index/picture/signin_signup.png" style ="border-radius: 0 20px 20px 0" alt="">
                </div>
            </div> 
        </div>`)
        signup_modal.show()
}
var generate_modal_account= function(){
    var login_modal = UIkit.modal(`
    <div id="modal-center" class="uk-flex-top" style ="background-color: none;display:flex;" uk-modal>
        <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical" style ="background-color: none; margin:0 auto; display:flex">
            <img src="./Asset/index/picture/modal_close.png" class="uk-modal-close-default" style ="left:845px;" type = "button" alt="">
            <div class ="big_container" style ="display:flex; ">
                <div class ="form" style ="width: 500px;
                padding: 40px 45px 24px;
                background: rgb(255, 255, 255);border-radius: 20px 0 0 20px;">
                    <h4>Xin chào</h4>
                    <p><a onclick ="generate_modal_account()" style ="cursor: pointer;color:rgb(10, 104, 255)">Đăng nhập</a> hoặc <a onclick = "generate_signup_modal()" style ="cursor: pointer;color:rgb(10, 104, 255)">Tạo tài khoản</a></p>
                    
                    <input class ="form-control" type="email" name="email" id ="email" placeholder="Email"  value="" style ="width: 100%;padding: 10px 0px ;font-size: 24px;color: rgb(36, 36, 36);outline: none;border:none;margin:1.5px 0">
                    <div id="email-feedback" style ="color:red">
                        
                    </div>
                    <div style ="background-color:rgb(224, 224, 224); width: 100%;height: 0.8px;margin:1.5px 0"
                    ></div>
                    <input class ="form-control" type="password" name="password" id ="password" placeholder="Mật khẩu"  value="" style ="width: 100%;padding: 10px 0px ;font-size: 24px;color: rgb(36, 36, 36);outline: none;border:none;margin:1.5px 0">
                    <div id="pass-feedback" style ="color:red">
                        
                    </div>
                    <div style ="background-color:rgb(224, 224, 224); width: 100%;height: 0.8px;margin:1.5px 0"
                    ></div>
                    
                    
                    <button onclick="signin()" style="display:block;background-color:rgb(255, 66, 78);width:100%;height:50px;border-radius:8px;color:white;font-size:20px;margin-top:15px;">Tiếp Tục</button>
                    <p style ="margin: 15px 120px;">Hoặc tiếp tục bằng</p>
                    <div style ="display:flex;margin: 0 120px;gap:20px;">
                        <img src="./Asset/index/picture/login_face.png" alt="" style ="width:58px;cursor:pointer">
                        <img src="./Asset/index/picture/login_google.png" alt="" style ="width:58px;cursor:pointer">
                    </div>
                </div>
                <img src="./Asset/index/picture/signin_signup.png" style ="border-radius: 0 20px 20px 0" alt="">
            </div>
        </div> 
    </div>`)
    login_modal.show()
}

$('.my-class').slick({
    slidesToShow: 3
});
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
                                <button id ="add_product" alt ="thêm vào giỏ hàng">Thêm</button>
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


generate_modal()
