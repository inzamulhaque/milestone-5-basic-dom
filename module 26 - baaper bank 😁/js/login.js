document.getElementById("loginBtn").addEventListener("click", () => {
    const userEmail = document.getElementById("userEmail").value;
    const userPassword = document.getElementById("UserPass").value;

    if (userEmail == "alif@gmail.com" && userPassword == "alifPass") {
        window.location.href = "./banking.html";
    } else {
        alert("Your Email or Password invalid");
    }
});