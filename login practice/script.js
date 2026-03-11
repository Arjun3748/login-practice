function login(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if(username === "admin" && password === "1234"){
        document.getElementById("message").innerText = "Login successful!";
}
else{
    document.getElementById("message").innerText = "Invalid username or password.";
}
}