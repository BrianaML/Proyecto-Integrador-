const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector('.container-cart-products');
const rowProduct = document.querySelector('.row-product');
const valorTotal = document.querySelector('.total-pagar');
const countProducts = document.querySelector('#contador-productos');
const productslist = document.querySelector('.container-items');

let allProducts = [];
btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart');
});
productslist.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-add-cart')) {
        const product = e.target.parentElement;

        const infoProduct = {
            id: product.dataset.id, 
            quantity: 1,
            title: product.querySelector('h2').textContent,
            price: parseFloat(product.querySelector('p').textContent.replace('$', ''))
        };

        if (!infoProduct.id) {
            console.error('ID de producto inválido:', infoProduct);
            return;
        }

        const exists = allProducts.some(prod => prod.id === infoProduct.id);
        if (exists) {
            allProducts = allProducts.map(prod => {
                if (prod.id === infoProduct.id) {
                    prod.quantity++;
                    return prod;
                } else {
                    return prod;
                }
            });
        } else {
            allProducts = [...allProducts, infoProduct];
        }
        localStorage.setItem('cart', JSON.stringify(allProducts));

        console.log("Productos después de agregar uno:", allProducts);

        showHTML();
    }
});

rowProduct.addEventListener('click', (e) => {
    if (e.target.classList.contains('icon-close')) {
        const productId = e.target.dataset.id;
        allProducts = allProducts.filter(product => product.id !== productId);
        localStorage.setItem('cart', JSON.stringify(allProducts));

        console.log("Productos después de eliminar uno:", allProducts);

        showHTML();
    }
});

const showHTML = () => {
    rowProduct.innerHTML = '';
    let total = 0;
    let totalOfProducts = 0;

    if (allProducts.length === 0) {
        containerCartProducts.innerHTML = '<p class="cart-empty">El carrito está vacío</p>';
        valorTotal.innerText = '$0';
        countProducts.innerText = '0';
        return;
    }

    allProducts.forEach(product => {
        if (product.id) {
            fetch(`https://api.example.com/products/${product.id}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(productData => {
                    const containerProduct = document.createElement('div');
                    containerProduct.classList.add('cart-product');
                    containerProduct.innerHTML = `
                        <div class="info-cart-product">
                            <span class="cantidad-producto-carrito">${product.quantity}</span>
                            <p class="titulo-producto-carrito">${productData.title}</p>
                            <span class="precio-producto-carrito">$${productData.price}</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-close" data-id="${product.id}">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    `;

                    rowProduct.append(containerProduct);

                    total += product.quantity * productData.price;
                    totalOfProducts += product.quantity;

                    valorTotal.innerText = `$${total.toFixed(2)}`;
                    countProducts.innerText = totalOfProducts;

                    console.log("Mostrando productos en el carrito:", allProducts);
                })
                .catch(error => {
                    console.error('Fetch error:', error);
                });
        } else {
            console.error('Producto con ID inválido:', product);
        }
    });
};

document.addEventListener('DOMContentLoaded', () => {

    allProducts = JSON.parse(localStorage.getItem('cart')) || [];

    console.log("Productos iniciales en el carrito:", allProducts);

    showHTML();
});
