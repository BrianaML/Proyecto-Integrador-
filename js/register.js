// register.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registerForm');
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');
    const rePasswordField = document.getElementById('rePassword');
    const terminosCheckbox = document.getElementById('terminos');
    const mensajeError = document.getElementById('mensajeError');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevenir el envío del formulario
        let mensajes = [];

        if (emailField.value.trim() === '') {
            mensajes.push('Por favor complete el campo email.');
        }

        if (passwordField.value.trim() === '') {
            mensajes.push('Por favor complete el campo contraseña.');
        } else if (passwordField.value.length < 6) {
            mensajes.push('Debe ingresar al menos 6 caracteres.');
        }

        if (passwordField.value !== rePasswordField.value) {
            mensajes.push('Las contraseñas no coinciden.');
        }

        if (!terminosCheckbox.checked) {
            mensajes.push('Por favor acepte los términos y condiciones.');
        }

        if (mensajes.length > 0) {
            mensajeError.innerHTML = mensajes.join('<br>');
        } else {
            window.location.href = './login.html';
        }
    });
});
