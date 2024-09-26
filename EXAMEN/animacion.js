// Array para almacenar los usuarios y contraseñas
var users = [
    { username: "usuario1", password: "1234" },
    { username: "usuario2", password: "abcd" },
    { username: "usuario3", password: "5678" }
];

// Escuchar el evento de envío del formulario
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Evita que la página se recargue

    // Obtener los valores del formulario
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verificar las credenciales
    var loginSuccess = false;

    for (var i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            loginSuccess = true;
            break;  // Rompe el bucle si encuentra coincidencia
        }
    }

    // Mostrar el mensaje de acuerdo a si el login fue exitoso o no
    if (loginSuccess) {
        document.getElementById("message").textContent = "¡Login exitoso!";
        // Aquí puedes redirigir a otra página o realizar más acciones
    } else {
        document.getElementById("message").textContent = "Usuario o contraseña incorrectos";
        alert("cuidado");
    }
});

