document.addEventListener("DOMContentLoaded", function() {
    let busqueda= location.search
    let queque= new URLSearchParams(busqueda);
    let category= queque.get("category");
    
    console.log(category);
    
    cargarProductos(category);
    let linkCat = document.querySelector("#linkCat");
    linkCat.innerText = category;
    document.querySelectorAll("a.a-cat").forEach(function(categoryAnchor) {
        categoryAnchor.setAttribute("href", `category.html?category=${category}`);
    });

        function cargarProductos(category){
            fetch(`https://fakestoreapi.com/products/category/${category}`)
                .then(function(res){
                    return res.json();
                })
                .then(function(data){
                    console.log(data)
                    let prodList = document.querySelector('#container-products-cate');
                    prodList.textContent = '';
                    data.forEach(function(item){
                    let template= document.createElement('div');
                        template.className = "col-4";
                    let truncaDes= item.description.length > 100 ? item.description.substring(0, 100) + '...' : item.description;
                        template.innerHTML = `
                            <img src="${item.image}" alt="">
                            <h3 class="cat-title"><a href="producto.html?id=${item.id}">${item.title}</a></h3>
                            <p class="index-des">Descripción:</p>
                            <p>${truncaDes}</p>
                            <p>$${item.price.toFixed(2)}USD</p>
                            <h4><a href="producto.html?id=${item.id}" class="ver-1">Ver mas</a></h4>
                        `;
                    prodList.append(template);
                });
        }).catch(function (error) {
                    console.log(error);
                })
            }
        });
    //cargarProductos(category);
