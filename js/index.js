var categoria = '';


document.addEventListener("DOMContentLoaded", function(){
    fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(res=>res.json())
        .then(json=>cargarJoyas(json))

    //fetch('https://fakestoreapi.com/products/category/jewelery')
      //  .then(res=>res.json())
        //.then(json=>cargarRopaHombres(json))
});

function cargarJoyas (json){
    let categoryContainer = document.getElementById('jewerly-content');
    categoryContainer.textContent = '';
    console.log(json)
    json.forEach(async(item) => {
        let template =`<div class="col-4">
            <div class='image-container'><img src="${item.image}" alt="p11"></div>
            <div class='prod-fulldesc'>
            <h3 class='prod-title'><a href="category.html">${item.title}</a></h3>
            <p class="index-des">Descripción:</p>
            <p>${item.description}</p>
            <p>$${item.price} USD</p> </div>
            <h4><button class="ver-1"><a href="producto.html?id=${item.id}">Ver mas</a></button></h4>
        </div>`;
        let div = document.createElement('div');
        div.innerHTML = template;
        categoryContainer.appendChild(div.firstChild);
    });
    
}