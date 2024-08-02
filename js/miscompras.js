document.addEventListener('DOMContentLoaded', function() {
    const cartContainer = document.getElementById('cart-container');

    function renderCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartContainer.innerHTML = '';
        if (cart.length === 0) {
            cartContainer.innerHTML = '<p>No tienes productos en tu carrito.</p>';
        } else {
            cart.forEach(product => {
                let productElement = document.createElement('div');
                productElement.className = 'product';
                productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <p>Precio: $${product.price}</p>
                    <p>Cantidad: 
                        <button class="update-quantity" data-id="${product.id}" data-delta="-1">-</button>
                        ${product.quantity}
                        <button class="update-quantity" data-id="${product.id}" data-delta="1">+</button>
                    </p>
                    <button class="remove-from-cart" data-id="${product.id}">Eliminar</button>
                `;
                cartContainer.appendChild(productElement);
            });
        }

        document.querySelectorAll('.update-quantity').forEach(button => {
            button.addEventListener('click', function() {
                const productId = this.getAttribute('data-id');
                const delta = parseInt(this.getAttribute('data-delta'));
                updateQuantity(productId, delta);
            });
        });

        document.querySelectorAll('.remove-from-cart').forEach(button => {
            button.addEventListener('click', function() {
                const productId = this.getAttribute('data-id');
                removeFromCart(productId);
            });
        });
    }

    function updateQuantity(productId, delta) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const product = cart.find(p => p.id == productId);
        if (product) {
            product.quantity += delta;
            if (product.quantity <= 0) {
                cart = cart.filter(p => p.id != productId);
            }
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }

    function removeFromCart(productId) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(p => p.id != productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
        Swal.fire({
            title: '¡Producto eliminado!',
            text: `Producto ha sido eliminado del carrito.`,
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
    }

    document.getElementById('clear-cart').addEventListener('click', function() {
        Swal.fire({
            title: '¿Estás seguro?',
            text: '¡No podrás revertir esto!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, vaciar carrito',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('cart');
                renderCart();
                Swal.fire({
                    title: '¡Carrito vacío!',
                    text: 'Todos los productos han sido eliminados del carrito.',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                });
            }
        });
    });

    document.getElementById('checkout').addEventListener('click', function() {
        Swal.fire({
            title: 'Pago',
            text: 'Pagar no está implementado en este ejemplo.',
            icon: 'info',
            confirmButtonText: 'Aceptar'
        });
    });

    renderCart();
});
