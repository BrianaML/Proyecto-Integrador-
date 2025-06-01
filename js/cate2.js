let se = document.querySelector(".productos")
let boton = document.querySelector(".desc")
let comprar = document.querySelector(".agregara")

let datosEnLocal = localStorage.getItem("datosLocalStorage");

let datosparseados = JSON.parse(datosEnLocal)
if (datosEnLocal == null){
    se.innerHTML = "<h2>Su Carriton esta vacio</h2>"
    boton.style.display = "none";
} else {
    for(i=0;i<datosparseados.length;i++){
        fetch (`https://fakestoreapi.com/products/${datosparseados[i].id}`)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            se.innerHTML += `
            <section class="prodindividual">
            <img class="section-images" src="${data.image}">
            <article class="text">
            <h3>${data.title}</h3>
            <p>$${data.price}</p>
            </article>
            </section`
        })
    .catch (function(err){
        console.log(err)
    })
    comprar.addEventListener("click", function(){
        localStorage.removeItem("datosLocalStorage");
        alert("GRACIAS POR SU COMPRA");
    })
    }
}