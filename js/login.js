let login= document.querySelector("#login")
let campoEmail= document.querySelector(`#email`)
let campoPassword= document.querySelector(`#password`)

login.addEventListener(`submit`, function (e) {
    e.preventDefault()

    if (campoEmail.value == ``) {
        alert("Por favor complete el campo email")
    }else if(campoPassword.value === `` ){
        alert("Por favor complete el campo contraseña")
    }else if(campoPassword.value.length < 6 ){
        alert("La contraseña debe tener al menos 6 caracteres")
    }else {
        localStorage.setItem("email", campoEmail.value)
        this.submit()
    } 
})
