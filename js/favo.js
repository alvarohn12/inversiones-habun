
    const heart = document.querySelector('.heart');


    heart.addEventListener('click', () => {
        heart.classList.toggle('favorited');
        if (heart.classList.contains('favorited')) {
            heart.textContent = '❤️';
        } else {
            heart.textContent = '🤍';
        }
    });
// Obtén todos los botones de "Más Información"
var modalBtns = document.querySelectorAll('.vermas');

// Agrega un evento de clic a cada botón
modalBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        // Encuentra el contenedor de modal correspondiente a este botón
        var modal = this.closest('.card').nextElementSibling.nextElementSibling;
        var overlay = modal.previousElementSibling;

        // Muestra el modal y el overlay
        modal.style.display = 'block';
        overlay.style.display = 'block';
    });
});

// Agrega un evento de clic al botón de cierre
document.querySelectorAll('.close-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        // Encuentra el contenedor de modal correspondiente a este botón
        var modal = this.parentElement;
        var overlay = modal.previousElementSibling;

        // Oculta el modal y el overlay
        modal.style.display = 'none';
        overlay.style.display = 'none';
    });
});

// Cierra el modal si el usuario hace clic fuera del contenido
window.addEventListener('click', function(event) {
    // Verifica si se hizo clic en el overlay
    if (event.target.classList.contains('overlay')) {
        // Encuentra el contenedor de modal correspondiente a este overlay
        var modal = event.target.nextElementSibling;

        // Oculta el modal y el overlay
        modal.style.display = 'none';
        event.target.style.display = 'none';
    }
});

