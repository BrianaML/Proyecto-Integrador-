// category.js

document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    if (category) {
        document.getElementById('categoryName').textContent = category;
        fetchProductsByCategory(category);
    }

    async function fetchProductsByCategory(category) {
        try {
            const response = await fetch(`https://api.example.com/products?category=${category}`);
            const products = await response.json();
            displayProducts(products);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    function displayProducts(products) {
        const productsList = document.getElementById('productsList');
        productsList.innerHTML = '';

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            const productTitle = document.createElement('h2');
            productTitle.textContent = product.name;

            const productImage = document.createElement('img');
            productImage.src = product.image;
            productImage.alt = product.name;

            const productPrice = document.createElement('p');
            productPrice.textContent = `$${product.price}`;

            const productLink = document.createElement('a');
            productLink.href = `productDetail.html?id=${product.id}`;
            productLink.textContent = 'Ver detalle';
            productLink.className = 'product-link';

            productCard.appendChild(productImage);
            productCard.appendChild(productTitle);
            productCard.appendChild(productPrice);
            productCard.appendChild(productLink);

            productsList.appendChild(productCard);
        });
    }
});
