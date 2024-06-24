document.addEventListener('DOMContentLoaded', function () {
    
    let queryStringC = location.search;
    let queryStringObjC = new URLSearchParams(queryStringC);
    let category = queryStringObjC.get("category");
    
    let categorias ={
        'electronics': 'Electrónica',
        'jewelery': 'Accesorios',
        "men's clothing": 'Ropa de Hombre',
        "women's clothing": 'Ropa de Mujer'
    }

    let titu = document.querySelector('.cate-titu')
    titu.innerHTML = `<h2 class="cate-titu"><a href="category.html">${category}</a></h2>`
    let catTitu = categorias[category] || 'Categoría';
    catTitu.textContent= catTitu;

    let prodList = document.querySelector('#container-products-cate');

    fetch(`https://fakestoreapi.com/products/category/` + category)
            .then(function (res) {
                return res.json()
            })
            .then(function (products) {
                //console.log(products);
                prodList.innerHTML = '';
                    for (let i = 0; i < products.length; i++) {
                        let pro = products[i];
                        let template= document.createElement('div');
                        template.className = "col-4";
                        template.innerHTML = 
                                    `<img src="${pro.image}" alt="">
                                    <h3 class="cat-title"><a href="producto.html?id=${pro.id}">${products[i].title}</a></h3>
                                    <p class="index-des">Descripción:</p>
                                    <p>${pro.description}</p>
                                    <p>$${pro.price.toFixed(2)}USD</p>
                                    <h4><a href="producto.html?id=${pro.id}" class="ver-1">Ver mas</a></h4>
                                </div>`; 
                        prodList.appendChild(template);
                            }
                    })
            .catch(function(error) {
                console.log('Error al obtener la data:', error);
            });
}) 
