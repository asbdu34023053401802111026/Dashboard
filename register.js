const registerForm = document.getElementById("registerForm");
if (registerForm) {
    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim()
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;
        let message = document.getElementById("message");
        if(password===8){
            message.style.color="red";
            message.innerHTML="password have  on 8 character";
            return;
        }
        if (password !== confirmPassword) {

            message.style.color = "red";

            message.innerText = "Passwords not same ";

            return;
        }
        let users = JSON.parse(localStorage.getItem("users")) || [];

        let existingUser = users.find(user => user.email === email);

        if (existingUser) {

            message.style.color = "red";

            message.innerText = "Email already registered!";

            return;
        }

        let newUser = {

            id: Date.now(),

            name: name,

            email: email,

            password: password

        };

        users.push(newUser);

        localStorage.setItem("users", JSON.stringify(users));
        message.style.color = "green";

        message.innerText = "Registration successful!";

        registerForm.reset();

    });

}
