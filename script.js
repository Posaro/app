// script.js
function checkPassword() {
    const password = document.getElementById("password").value;
    if (password === "0507") {
        document.getElementById("login-screen").style.display = "none";
        document.getElementById("app").style.display = "block";
    } else {
        alert("Clave incorrecta. Inténtelo de nuevo.");
    }
}

function calculateGold() {
    alert("Función de cálculo de oro en desarrollo.");
}
