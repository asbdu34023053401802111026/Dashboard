
document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (email === "admin_hari@gmail.com" && password === "12345") {

        alert("Admin Login Successful!");

        localStorage.setItem("role", "admin");

        window.location.href = "dashboard.html";

    }

    // USER LOGIN
    else {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let user = users.find(user =>
            user.email === email &&
            user.password === password
        );

        if (user) {

            alert("User Login Successful!");

            localStorage.setItem("currentUser", JSON.stringify(user));

            localStorage.setItem("role", "user");

            window.location.href = "user_index.html";

        }

        else {

            document.getElementById("message").innerText =
                "Invalid Email or Password";

        }

    }

});
