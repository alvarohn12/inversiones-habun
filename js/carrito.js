
const productos = [
    // Tu array de productos aquí
    {
        id: 1,
        nombre: "Título del Producto",
        descripcion: "Descripción breve del producto.",
        precio: 1300.99,
        imagen: "img/laptop1.avif"
    },
    {
        id: 2,
        nombre: "Título del Producto",
        descripcion: "Descripción breve del producto.",
        precio: 1300.99,
        imagen: "img/laptop1.avif"
    },
    {
        id: 3,
        nombre: "Título del Producto",
        descripcion: "Descripción breve del producto.",
        precio: 1300.99,
        imagen: "img/laptop1.avif"
    },
    {
        id: 4,
        nombre: "Título del Producto",
        descripcion: "Descripción breve del producto.",
        precio: 1300.99,
        imagen: "img/laptop1.avif"
    },
    {
        id: 5,
        nombre: "Título del Producto",
        descripcion: "Descripción breve del producto.",
        precio: 1300.99,
        imagen: "img/laptop1.avif"
    },
    {
        id: 6,
        nombre: "Título del Producto",
        descripcion: "Descripción breve del producto.",
        precio: 1300.99,
        imagen: "img/laptop1.avif"
    },
    {
        id: 7,
        nombre: "Título del Producto",
        descripcion: "Descripción breve del producto.",
        precio: 1300.99,
        imagen: "img/laptop1.avif"
    },
];

function actualizarCuentaCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const cartCount = document.getElementById('cart-count');
    const totalItems = carrito.reduce((total, producto) => total + producto.cantidad, 0);

    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'block' : 'none';
}

function mostrarModal(mensaje) {
    const modal = document.getElementById('myModal');
    const modalMessage = document.getElementById('modal-message');
    const closeBtn = document.querySelector('.close');

    modalMessage.textContent = mensaje;
    modal.style.display = 'block';

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

function agregarAlCarrito(productoId) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const producto = productos.find(p => p.id == productoId);
    const productoEnCarrito = carrito.find(p => p.id == productoId);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarModal('Producto agregado al carrito');
    actualizarCuentaCarrito();
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const productoId = e.target.getAttribute('data-producto');
        agregarAlCarrito(productoId);
    });
});

document.addEventListener('DOMContentLoaded', actualizarCuentaCarrito);
