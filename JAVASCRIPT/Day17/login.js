document.getElementById("loginForm")
.addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let user = JSON.parse(localStorage.getItem("user"));
    
    if (user && user.email === email &&
        user.password === password) {
            localStorage.setItem("loggedIn", "true");
            window.location.href = "dashboard.html";
        } else {
            document.getElementById("message").textContent ="Invalid Email or Password!";
        }
    });
