
function initDatabase(){
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users ?.length === 0){
        localStorage.setItem("users",JSON.stringify([]));
    }
}
document.getElementById("form-signup").addEventListener("submit", function(e){
    e.preventDefault();
    initDatabase()
    var phone = document.getElementById("tel").value
    var email = document.getElementById("email_signup").value
    var password = document.getElementById("password_signup").value
    var cf_password = document.getElementById("cf_password").value
    var user = {
        phone,
        email,
        password,
    }
    
    const users = JSON.parse(localStorage.getItem("users"));

    var Exituseremail =  users.find((user) => user.email === email)
    var Exituserphone = users.find((user) => user.phone === phone)

    if (phone.length == 10 && email.length > 0 && password.length >= 8 && password == cf_password){
        if (Exituseremail && Exituserphone){
            document.getElementById("email_signup").classList.add("is-invalid")
            document.getElementById("email-feedback_signup").innerHTML="Email đã được đăng kí"
            document.getElementById("tel").classList.add("is-invalid")
            document.getElementById("tel-feedback").innerHTML="Số điện thoại đã được đăng kí"
        }
        else if (Exituseremail){
            document.getElementById("email_signup").classList.add("is-invalid")
            document.getElementById("email-feedback_signup").innerHTML="Email đã được đăng kí"
            document.getElementById("tel").classList.remove("is-invalid")
            document.getElementById("tel-feedback").innerHTML=""
        }
        else if (Exituserphone){
            document.getElementById("tel").classList.add("is-invalid")
            document.getElementById("tel-feedback").innerHTML="Số điện thoại đã được đăng kí"
            document.getElementById("email_signup").classList.remove("is-invalid")
            document.getElementById("email-feedback_signup").innerHTML=""
        }
        
        else{
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));
            console.log(users)
            document.getElementById("email_signup").classList.remove("is-invalid")
            document.getElementById("email-feedback_signup").innerHTML=""
            document.getElementById("tel").classList.remove("is-invalid")
            document.getElementById("tel-feedback").innerHTML=""
        }
    }
    else{
        console.log("có lỗi")
    }
    

    
})


