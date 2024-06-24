const Clickbutton = document.querySelectorAll('.button')

Clickbutton.forEach(btn => {
    btn.addEventListener('click', addToCarritoItem)
})

function addToCarritoItem(e){
    const button = e.target
    console.log
}