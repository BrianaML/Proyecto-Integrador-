document.addEventListener('DOMContentLoaded', function() {
    // Función para manejar el logoutfu
    function logoutUsuario(event) {
        event.preventDefault();
        localStorage.removeItem('emailUsuario');

        const bienvenida = document.getElementById('bienvenida');
        const logout = document.getElementById('logout');
        if (bienvenida) bienvenida.remove();
        if (logout) logout.remove();

        // Mostrar los elementos "login" y "registro"
        const loginItem = document.getElementById('login');
        const registroItem = document.getElementById('registro');
        if (loginItem) loginItem.style.display = 'block';
        if (registroItem) registroItem.style.display = 'block';
    }
});