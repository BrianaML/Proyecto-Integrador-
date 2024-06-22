// recover.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('recover');
    const emailField = document.getElementById('campoEmail');
    const checkbox = document.getElementById('checkBox');
    const mensajeError = document.getElementById('mensajeError');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevenir el envío del formulario

        let mensajes = [];

        if (emailField.value.trim() === '') {
            mensajes.push('Por favor escriba su email.');
        }

        if (!checkbox.checked) {
            mensajes.push('Por favor acepte el campo Quiero recuperar mi contraseña.');
        }

        if (mensajes.length > 0) {
            mensajeError.textContent = mensajes.join(' ');
        } else {
            mensajeError.innerHTML = 'Recibirás un email con las instrucciones para recuperar tu contraseña. <a href="login.html">Ir al login</a>';
        }
    });
});
