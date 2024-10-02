

document.getElementById("form-signin").addEventListener("submit", function (e){
    e.preventDefault();
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    
    
    const users = JSON.parse(localStorage.getItem("users"));
    console.log(users)
    var Exituser =  users.find((user) => user.email == email)
    if (Exituser){
        if (Exituser.password == password){
            window.location.href = "index.html"
        }
        else{
            document.getElementById("password").classList.add("is-invalid")
            document.getElementById("pass-feedback").innerHTML="Sai password"
        }
    }
    else{
        document.getElementById("email").classList.add("is-invalid")
        document.getElementById("email-feedback").innerHTML="Email chưa được đăng kí"
    }
})
