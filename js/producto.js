let queryString= location.search

let queryStringObj= new URLSearchParams(queryString)

let id= queryStringObj.get("id")

//console.log(id);

fetch(`https://fakestoreapi.com/products/${id}`)
    .then(function (res) {
        return res.json()
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
    })
    .catch(function (error) {
        console.log(error);
    })


function cargarProductosRelacionados(category){
    let counter = 0;
    fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res=>res.json())
        .then(function(json){
            console.log(json)
            let prodRelContainer = document.getElementById('prod-relacionados');
            prodRelContainer.textContent = '';
            json.forEach(function(item){
                if(item.id != parseInt(id) && counter < 3){
                    let template = `<div class="col-3">
                    <img src="${item.image}">
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