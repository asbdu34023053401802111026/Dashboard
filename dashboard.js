
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
if (currentUser) {
    document.getElementById("userName").innerText = "Admin";
    document.getElementById("userEmail").innerText = "Below users are registered";
}

document.getElementById("logoutBtn").addEventListener("click", function() {

    localStorage.removeItem("currentUser");

    window.location.href = "login.html";

});

let role = localStorage.getItem("role");

if (role !== "admin") {

    window.location.href = "login.html";

}

let users = JSON.parse(localStorage.getItem("users")) || [];

let userTable = document.getElementById("userTable");
let totalUsers = document.getElementById("totalUsers");
totalUsers.innerText = users.length;

users.forEach((user, index) => {

    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>
            <span class="badge bg-success">Active</span>
        </td>
    `;

    userTable.appendChild(row);

});
document.getElementById("logoutBtn").addEventListener("click", function() {

    localStorage.removeItem("role");

    localStorage.removeItem("currentUser");

    window.location.href = "login.html";

});
