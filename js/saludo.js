//let users= JSON.parse(localStorage.getItem("email"))

document.addEventListener("DOMContentLoaded", function () {
    let users= localStorage.getItem("email");
    let header= document.querySelector("#header");

    //if (users) {
        //header.innerHTML += `
          //  <h2>Bienvenido: ${users}</h2> | <button><a href="#" id="logout">Logout</a></button>`;

        //document.querySelector("logout").addEventListener("click", function () {
           // localStorage.removeItem("email");
         //   location.reload();
       // });

    if (users) {
        let msjBienvenida= document.createElement("div");
        msjBienvenida.textContent = `Bienvenid@: ${users}`;
        msjBienvenida.classList.add('saludo');
        let logoutLink = document.createElement(`button`);
        logoutLink.textContent = "Logout";
        logoutLink.href = "#";
        logoutLink.addEventListener("click", function () {
            localStorage.removeItem("email");
            location.reload();
        });

        header.appendChild(msjBienvenida);
        header.appendChild(document.createTextNode(" "));
        header.appendChild(logoutLink);

        document.querySelector("#menu-login").style.display = "none"
        document.querySelector("#menu-register").style.display = "none"
    }
});
console.log();