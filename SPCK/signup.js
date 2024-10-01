
function initDatabase(){
    const users = JSON.parse(localStorage.getItem("users"))
    if (users ?.length === 0){
        localStorage.setItem("users",JSON.stringify([]));
    }
}
document.getElementById("form-signup").addEventListener("submit", function(e){
    e.preventDefault();
    initDatabase()
    var input_phone = document.getElementById("tel")
    var input_email_signup = document.getElementById("email_signup").value
    var input_password = document.getElementById("password_signup").value
    var input_cf_password = document.getElementById("cf_password").value
    if (input_phone.length == 10 && input_email_signup.length > 0 && input_password.length > 7 && input_cf_password == input_password){
        console.log("đã nhảy vào hàm if1")
        var count = 0
        
        for (var i in account_list){
        
            if (account_list[i].phone == input_phone){
                break
                
            }
            if (account_list[i].email == input_email_signup){
                
                break
            }
            else if(account_list[i].phone != input_phone){
                count = count + 1
                continue
            }
            else if(account_list[i].email != input_email_signup){
                count = count + 1
                continue
            }
        }
        console.log(count)
        if (count == account_list.length){
            console.log("Signup thành công")
            var accountNew = {
                phone:input_phone,
                email:input_email_signup,
                password:input_password
            }
            
            document.getElementById("tel").classList.remove("is-invalid")
            document.getElementById("tel-feedback").innerHTML = ""
            document.getElementById("email_signup").classList.remove("is-invalid")
            document.getElementById("email-feedback_signup").innerHTML = ""
            const users = JSON.parse(localStorage.getItem("users"))

            users.push(accountNew)

            localStorage.setItem("users",JSON.stringify([]));
            
            console.log(users)
            // window.location.href = "signin.html"
        }
        
        else{
            document.getElementById("tel").classList.add("is-invalid")
            document.getElementById("tel-feedback").innerHTML="Số điện thoại hoặc email đã được đăng kí"
            document.getElementById("email_signup").classList.add("is-invalid")
            document.getElementById("email-feedback_signup").innerHTML="Email hoặc số điện thoại đã được đăng kí"
        }
    }
    else{
        console.log("đã nhảy vào hàm else1")
        if (input_phone == ""){
            document.getElementById("tel").classList.add("is-invalid")
            document.getElementById("tel-feedback").innerHTML = "Không được để trống số điện thoại"
        }
        else{
            document.getElementById("tel").classList.remove("is-invalid")
            document.getElementById("tel-feedback").innerHTML = ""
        }
        if (input_email_signup == ""){
            document.getElementById("email_signup").classList.add("is-invalid")
            document.getElementById("email-feedback_signup").innerHTML="Không được để trống email"
        }
        else{
            document.getElementById("email_signup").classList.remove("is-invalid")
            document.getElementById("email-feedback_signup").innerHTML = ""
        }
        
        if (!input_password){
            document.getElementById("password_signup").classList.add("is-invalid")
            document.getElementById("pass-feedback_signup").innerHTML="Không được để trống password"
        }
        else{
            document.getElementById("password_signup").classList.remove("is-invalid")
            document.getElementById("pass-feedback_signup").innerHTML = ""
        }
        
        if (input_cf_password == ""){
            document.getElementById("cf_password").classList.add("is-invalid")
            document.getElementById("cf_pass-feedback").innerHTML="Vui lòng xác nhận password"
        }
        else{
            document.getElementById("cf_password").classList.remove("is-invalid")
            document.getElementById("cf_pass-feedback").innerHTML = ""
        }
        
        if (input_cf_password != input_password){
            document.getElementById("cf_password").classList.add("is-invalid")
            document.getElementById("cf_pass-feedback").innerHTML="Không trùng khớp password"
        }
        else{
            document.getElementById("cf_password").classList.remove("is-invalid")
            document.getElementById("cf_pass-feedback").innerHTML=""
        }
    }
})


