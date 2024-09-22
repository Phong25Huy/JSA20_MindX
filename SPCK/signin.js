var account_list = [
    {
        phone: "0369999909",
        email:"phongnguyenhuy63@gmail.com",
        password:"12345678"
    }
]

function signin(){

    var input_email = document.getElementById("email").value
    var input_password = document.getElementById("password").value
    

    
    if (input_email == ""){
        document.getElementById("email").classList.add("is-invalid")
        document.getElementById("email-feedback").innerHTML="Không được để trống email"
    }
    else{
        document.getElementById("email").classList.remove("is-invalid")
        document.getElementById("email-feedback").innerHTML = ""
    }
    if (input_password == ""){
        document.getElementById("password").classList.add("is-invalid")
        document.getElementById("pass-feedback").innerHTML="Không được để trống password"
    }
    else{
        document.getElementById("password").classList.remove("is-invalid")
        document.getElementById("pass-feedback").innerHTML = ""
    }

  
    console.log(account_list)
    var count_s = 0
    for (var CheckAccount in account_list){
        console.log(account_list[CheckAccount].email)
        if(account_list[CheckAccount].email === input_email) {
            console.log("Email hợp lệ")
            if(account_list[CheckAccount].password == input_password) {
                console.log("dang nhap thanh cong")
                document.getElementById("email").classList.remove("is-invalid")
                document.getElementById("password").classList.remove("is-invalid")
                document.getElementById("pass-feedback").innerHTML=""
                document.getElementById("email-feedback").innerHTML=""
                // chyuyen user ve trang home
                window.location.href = "signin.html"
                window.location.href = "index.html"
                break
            } else {
                document.getElementById("password").classList.add("is-invalid")
                document.getElementById("pass-feedback").innerHTML="Sai password"
                break
            }
        }
        else{
            console.log("count_s:",count_s)
            count_s = count_s + 1
            continue
        } 
        
    }
    if(count_s == account_list.length) {
        document.getElementById("email").classList.add("is-invalid")
        document.getElementById("email-feedback").innerHTML="Email chưa được đăng kí"
    }   
}
