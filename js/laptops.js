document.addEventListener('DOMContentLoaded', function() {
    const productsContainer = document.getElementById('cards');
    const cartCount = document.getElementById('cart-count');
    const favoritesCount = document.getElementById('favorites-count');
    const filterButton = document.getElementById('filter-button');
    const filterNavigation = document.getElementById('filter-navigation');
    const closeFilter = document.getElementById('close-filter');
    const applyFilters = document.getElementById('apply-filters');
    const priceFilters = document.querySelectorAll('.filter-price');
    
    const products = [
        {
            id: 1,
            name: 'Laptop para oficina',
            image: 'img/laptop1.avif',
            description: 'Descripción breve del producto. Este es un ejemplo de texto que puede ocuparvarias líneas.',
            price: 999,
            rating:4.8
        },
        {
            id: 2,
            name: 'Laptop para oficina',
            image: 'img/laptop2.avif',
            description: 'Descripción breve del producto. Este es un ejemplo de texto que puede ocuparvarias líneas.',
            price: 1199,
            rating:4.8
        },
        {
            id: 3,
            name: 'Laptop B',
            image: 'img/laptop2.avif',
            description: 'Descripción breve del producto. Este es un ejemplo de texto que puede ocuparvarias líneas.',
            price: 1199,
            rating:4.8
        },
        {
            id: 4,
            name: 'Laptop B',
            image: 'img/laptop2.avif',
            description: 'Descripción breve del producto. Este es un ejemplo de texto que puede ocuparvarias líneas.',
            price: 1199,
            priceNew: 1099,
            rating:4.8
        },
        {
            id: 3,
            name: 'Laptop B',
            image: 'img/laptop2.avif',
            description: 'Descripción breve del producto. Este es un ejemplo de texto que puede ocuparvarias líneas.',
            price: 1199,
            rating:4.8
        },
        {
            id: 3,
            name: 'Laptop B',
            image: 'img/laptop2.avif',
            description: 'Descripción breve del producto. Este es un ejemplo de texto que puede ocuparvarias líneas.',
            price: 1199,
            rating:4.8
        },
        {
            id: 3,
            name: 'Laptop B',
            image: 'img/laptop2.avif',
            description: 'Descripción breve del producto. Este es un ejemplo de texto que puede ocuparvarias líneas.',
            price: 1199,
            rating:4.8
        },
        {
            id: 3,
            name: 'Laptop B',
            image: 'img/laptop2.avif',
            description: 'Descripción breve del producto. Este es un ejemplo de texto que puede ocuparvarias líneas.',
            price: 1199,
            rating:4.8
        },
        {
            id: 3,
            name: 'Laptop B',
            image: 'img/laptop2.avif',
            description: 'Descripción breve del producto. Este es un ejemplo de texto que puede ocuparvarias líneas.',
            price: 1199,
            rating:4.8
        },
        {
            id: 3,
            name: 'Laptop B',
            image: 'img/laptop2.avif',
            description: 'Descripción breve del producto. Este es un ejemplo de texto que puede ocuparvarias líneas.',
            price: 1199,
            rating:4.8
        },
        {
            id: 3,
            name: 'Laptop B',
            image: 'img/laptop2.avif',
            description: 'Descripción breve del producto. Este es un ejemplo de texto que puede ocuparvarias líneas.',
            price: 1199,
            rating:4.8
        },
        // Añadir más productos según sea necesario
    ];

    function renderProducts(filteredProducts) {
            productsContainer.innerHTML = '';
            filteredProducts.forEach(product => {
            let productElement = document.createElement('div');
            productElement.className = 'card';
            productElement.innerHTML = `
                <div class="card-h"> <button class="add-to-favorites heart" data-id="${product.id}"><i class='bx bx-heart'></i></button></div>
                <img class="card-img" src="${product.image}" alt="${product.name} ">
                <h2 class="card__title">${product.name}</h2>
                <p card__description>${product.description}</p>
                <p>Precio: S/${product.price}</p>
                <div class="rating">
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <span class="c-star">${product.rating}</span>
                </div>
                <button class="btn add-to-cart" data-id="${product.id}">Añadir al carrito</button>
                <button class="more-info" data-id="${product.id}">Más información</button>
            `;
            productsContainer.appendChild(productElement);
        });

        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function() {
                const productId = this.getAttribute('data-id');
                addToCart(productId);
            });
        });

        document.querySelectorAll('.add-to-favorites').forEach(button => {
            button.addEventListener('click', function() {
                const productId = this.getAttribute('data-id');
                addToFavorites(productId);
            });
        });

        document.querySelectorAll('.more-info').forEach(button => {
            button.addEventListener('click', function() {
                const productId = this.getAttribute('data-id');
                showProductInfo(productId);
            });
        });
    }

    function addToCart(productId) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const product = products.find(p => p.id == productId);
        const cartProduct = cart.find(p => p.id == productId);
        if (cartProduct) {
            cartProduct.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        Swal.fire({
            title: '¡Producto añadido!',
            text: `${product.name} ha sido añadido al carrito.`,
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
    }

    function addToFavorites(productId) {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const product = products.find(p => p.id == productId);
        const favoriteProduct = favorites.find(p => p.id == productId);
        if (favoriteProduct) {
            Swal.fire({
                title: '¡Producto ya en favoritos!',
                text: `${product.name} ya está en tu lista de favoritos.`,
                icon: 'info',
                confirmButtonText: 'Aceptar'
            });
        } else {
            favorites.push(product);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            updateFavoritesCount();
            Swal.fire({
                title: '¡Producto añadido!',
                text: `${product.name} ha sido añadido a tus favoritos.`,
                icon: 'success',
                confirmButtonText: 'Aceptar'
            });
        }
    }

    function showProductInfo(productId) {
        const product = products.find(p => p.id == productId);
        Swal.fire({
            title: product.name,
            html: `
                <img src="${product.image}" alt="${product.name}" style="width: 100%; height: auto; border-radius: 8px;">
                <p>${product.description}</p>
                <p><strong>Precio:</strong> $${product.price}</p>
                ${product.priceNew ? `<p><strong>Precio Nuevo:</strong> $${product.priceNew}</p>` : ''}
                <p><strong>Rating:</strong> ${product.rating}</p>
            `,
            confirmButtonText: 'Cerrar'
        });
    }

    function applyFiltersFunction() {
        const selectedPrices = Array.from(priceFilters)
            .filter(filter => filter.checked)
            .map(filter => ({
                min: parseFloat(filter.dataset.min) || 0,
                max: parseFloat(filter.dataset.max) || Infinity
            }));

        let filteredProducts;
        if (selectedPrices.length > 0) {
            filteredProducts = products.filter(product => {
                return selectedPrices.some(filter => {
                    return product.price >= filter.min && product.price <= filter.max;
                });
            });
        } else {
            filteredProducts = products;
        }

        renderProducts(filteredProducts);
    }

    function updateApplyButtonState() {
        const anyChecked = Array.from(priceFilters).some(filter => filter.checked);
        applyFilters.disabled = !anyChecked;
    }

    filterButton.addEventListener('click', function() {
        filterNavigation.classList.toggle('visible');
    });

    closeFilter.addEventListener('click', function() {
        filterNavigation.classList.remove('visible');
    });

    applyFilters.addEventListener('click', function() {
        applyFiltersFunction();
        filterNavigation.classList.remove('visible');
    });

    priceFilters.forEach(filter => {
        filter.addEventListener('change', function() {
            updateApplyButtonState();
            if (window.innerWidth > 768) {
                applyFiltersFunction();
            }
        });
    });

    // Render all products initially
    renderProducts(products);
    updateApplyButtonState();

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalCount = cart.reduce((sum, product) => sum + product.quantity, 0);
        if (totalCount > 0) {
            cartCount.textContent = totalCount;
            cartCount.style.display = 'inline';
        } else {
            cartCount.style.display = 'none';
        }
    }

    function updateFavoritesCount() {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const totalCount = favorites.length;
        if (totalCount > 0) {
            favoritesCount.textContent = totalCount;
            favoritesCount.style.display = 'inline';
        } else {
            favoritesCount.style.display = 'none';
        }
    }

    document.querySelectorAll('.filter-price').forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts);
    });

    renderProducts(products);
    updateApplyButtonState();
    updateCartCount();
    updateFavoritesCount();
});
