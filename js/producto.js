document.addEventListener("DOMContentLoaded", function() {
    let queryString = location.search;
    let queryStringObj = new URLSearchParams(queryString);
    let id = queryStringObj.get("id");

    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(function (res) {
            return res.json();
        })
        
        .then(function (data) {
            document.querySelector("#img-top").src= data.image;
            document.querySelector("#title").innerText= data.title;
            document.querySelector("h4").innerText= `Precio: $${data.price}`;
            document.querySelector("#descripcion").innerText= data.description;
            cargarProductosRelacionados(data.category);
            let linkCategoria = document.querySelector("#id-cat");
            linkCategoria.innerText= data.category;
            document.querySelectorAll("a.a-category").forEach(function(categoryAnchor){
                categoryAnchor.setAttribute("href", `category.html?category=${data.category}`);
            });
            addButtonToCart(data.id);
        })
        .catch(function (error) {
            console.log(error);
        });

    function addButtonToCart(productId) {
        let button = document.createElement('button');
        button.id = 'add-cart';
        button.className = 'boton-producto';

        let link = document.createElement('a');
        link.href = '#';
        link.className = 'boton-producto-color';
        link.textContent = 'Agregar al carrito';
        
        link.addEventListener('click', function (event) {
            event.preventDefault();
            let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
            if (!cart.includes(productId)){
                cart.push(productId);
                localStorage.setItem('cart', JSON.stringify(cart));
                displayMessage('Producto agregado al carrito', false, button);
            } else {
                displayMessage('El producto ya está en el carrito', true, button);
            }
        });
        
        button.appendChild(link);
        let container = document.querySelector('#button-container'); 

        if (container) {
            container.appendChild(button);
        } else {
            console.error('El contenedor para el botón no existe.');
        }

        function displayMessage(message, isError = false, buttonElement) {
            
            let msgElement = document.createElement('div');
            msgElement.textContent = message;
            msgElement.className = isError ? 'error-msg' : 'success-msg';

            let existingMsg = buttonElement.nextElementSibling;
            if (existingMsg && (existingMsg.className === 'success-message' || existingMessage.className === 'error-message')) {
                existingMsg.remove();
            }

            buttonElement.parentElement.appendChild(msgElement);

            setTimeout(function () {
                if (msgElement.parentElement) {
                    msgElement.remove();
                }
            }, 30000);
            
        }
}

function cargarProductosRelacionados(category){
    let counter = 0;
    fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res=>res.json())
        .then(function(json){
            console.log(json)
            let prodRelContainer = document.querySelector('#prod-relacionados');
            prodRelContainer.textContent = '';
            json.forEach(function(item){
                if(item.id != parseInt(id) && counter < 3){
                    let template = `<div class="col-3">
                    <img src="${item.image}" height="300px">
                    </div>`;
                    let div = document.createElement('div');
                    div.innerHTML = template;
                    prodRelContainer.append(div.firstChild);
                    counter++;
                }
            });
        }).catch(function (error) {
            console.log(error);
        })
    }  
});