let categoria = '';

document.addEventListener("DOMContentLoaded", function(){
    fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(res=>res.json())
        .then(json=>cargarJoyas(json))

    fetch(`https://fakestoreapi.com/products/category/men's clothing`)
        .then(res=>res.json())
        .then(json=>cargarRopaHombres(json))

    fetch(`https://fakestoreapi.com/products/category/women's clothing`)
        .then(res=>res.json())
        .then(json=>cargarRopaMujer(json))
});

function cargarRopaHombres(json) {
    let categoryContainer1 = document.querySelector('#man-content');
    categoryContainer1.textContent = '';
    console.log(json);

    function shortenText(text, maxLength) {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        } else {
            return text;
        }
    }

    json.forEach(async(item) =>{
        let shortDescription = shortenText(item.description, 200);
        let theme = `<div class="col-4">
            <div class='image-container'><img src="${item.image}" alt="p11"></div>
            <div class='prod-fulldesc'>
            <h3 class='prod-title'><a href="category.html">${item.title}</a></h3>
            <p class="index-des">Descripción:</p>
            <p>${shortDescription}</p>
            <p>$${item.price} USD</p> </div>
            <h4><button class="ver-1"><a href="producto.html?id=${item.id}">Ver mas</a></button></h4>
        </div>`;
        let div1= document.createElement ('div');
        div1.innerHTML = theme;
        categoryContainer1.appendChild(div1.firstChild)
    })
}

function cargarRopaMujer (json){
    let categoryContainer2 = document.getElementById('women-content');
    categoryContainer2.textContent = '';
    console.log(json)
    function shortenTextM(text, maxLength) {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        } else {
            return text;
        }
    }
    json.forEach(async(item) => {
        let shortDescriptionM = shortenTextM(item.description, 160);
        let tema =`<div class="col-4">
            <div class='image-container'><img src="${item.image}" alt=""></div>
            <div class='prod-fulldesc'>
            <h3 class='prod-title'><a href="category.html">${item.title}</a></h3>
            <p class="index-des">Descripción:</p>
            <p>${shortDescriptionM}</p>
            <p>$${item.price} USD</p> </div>
            <h4><button class="ver-1"><a href="producto.html?id=${item.id}">Ver mas</a></button></h4>
        </div>`;
        let div = document.createElement('div');
        div.innerHTML = tema;
        categoryContainer2.appendChild(div.firstChild);
    });
}

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