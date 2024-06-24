document.addEventListener("DOMContentLoaded", function() {
    let busqueda= location.search
    let queque= new URLSearchParams(busqueda);
    let id= queque.get("id");
    console.log(id);

    fetch(`https://fakestoreapi.com/products/category/`)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            cargarProductos(data.category);
            let linkCat = document.querySelector("#linkCat");
            linkCat.innerText= data.category;
            document.querySelectorAll("a.a-cat").forEach(function(categoryAnchor){
                categoryAnchor.setAttribute("href", `category.html?category=${data.category}`);
            });
        })
        .catch(function (error) {
            console.log(error);
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
                        template.innerHTML = `
                            <img src="${item.image}" alt="">
                            <h3 class="cat-title"><a href="producto.html?id=${item.id}">${item.title}</a></h3>
                            <p class="index-des">Descripción:</p>
                            <p>${item.description}</p>
                            <p>$${item.price.toFixed(2)}USD</p>
                            <h4><a href="producto.html?id=${item.id}" class="ver-1">Ver mas</a></h4>
                        `; 
                    prodList.append(template); 
                });
                }).catch(function (error) {
                    console.log(error);
                })
            }  
    //cargarProductos(category);
})
