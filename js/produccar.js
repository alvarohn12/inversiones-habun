const productos = [
    // Tu array de productos aquí
];

let productoIdParaEliminar = null; // Variable para almacenar el id del producto a eliminar

function mostrarModal(mensaje, tipo = 'alert') {
    const modal = document.getElementById(tipo === 'alert' ? 'alert-modal' : 'confirm-delete-modal');
    const modalMessage = document.getElementById(tipo === 'alert' ? 'alert-message' : 'confirm-delete-message');
    const closeBtn = document.getElementById(tipo === 'alert' ? 'alert-close' : 'confirm-delete-close');
    const confirmBtn = document.getElementById('confirm-delete-yes');
    const cancelBtn = document.getElementById('confirm-delete-no');

    modalMessage.textContent = mensaje;
    modal.style.display = 'block';

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };

    if (tipo === 'confirm') {
        confirmBtn.onclick = function() {
            eliminarDelCarrito(productoIdParaEliminar);
            modal.style.display = 'none';
        };

        cancelBtn.onclick = function() {
            modal.style.display = 'none';
        };
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

function cargarCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItemsContainer.innerHTML = '';
    let total = 0;

    carrito.forEach(producto => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" style="width: 250px; height: auto; float: left; margin-right: 10px;">
            <h4>${producto.nombre}</h4>
            <p>Cantidad: ${producto.cantidad}</p>
            <p>Precio: S/.${(producto.precio * producto.cantidad).toFixed(2)}</p>
            <button class="remove-from-cart" data-product-id="${producto.id}"><i class="fa-solid fa-trash" style="font-size:23px;"></i></button>
        `;
        cartItemsContainer.appendChild(cartItem);
        total += producto.precio * producto.cantidad;
    });

    cartTotal.textContent = total.toFixed(2);

    // Asignar evento click a los botones de eliminar del carrito
    document.querySelectorAll('.remove-from-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            productoIdParaEliminar = e.target.getAttribute('data-product-id');
            mostrarModal('¿Estás seguro de que deseas eliminar este producto del carrito?', 'confirm');
        });
    });
}

function eliminarDelCarrito(productoId) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito = carrito.filter(p => p.id != productoId);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarCarrito();
}

function redirigirPago() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    if (carrito.length === 0) {
        mostrarModal('El carrito está vacío.');
        return;
    }
    const cartTotal = document.getElementById('cart-total').textContent;
    localStorage.setItem('cartTotal', cartTotal);
    window.location.href = 'pago.html';
}

// Cargar el carrito cuando se carga la página
document.addEventListener('DOMContentLoaded', cargarCarrito);

// Asignar evento click al botón de pago
document.getElementById('pay-button').addEventListener('click', redirigirPago);