document.addEventListener("DOMContentLoaded", function () {
    let users= localStorage.getItem("email");
    let header= document.querySelector("#header");

    if (users) {
        let msjBienvenida= document.createElement("div");
        msjBienvenida.textContent = `Bienvenid@: ${users}`;
        msjBienvenida.classList.add('saludo');
        let logoutLink = document.createElement(`button`);
        logoutLink.textContent = "Logout";
        logoutLink.classList.add('saludo');
        logoutLink.href = "#";
        logoutLink.addEventListener("click", function () {
            localStorage.removeItem("email");
            location.reload();
        });

        msjBienvenida.appendChild(logoutLink);
        header.appendChild(msjBienvenida);
        //header.appendChild(msjBienvenida);
       // header.appendChild(document.createTextNode(" "));
        //header.appendChild(logoutLink);//

        document.querySelector("#menu-login").style.display = "none"
        document.querySelector("#menu-register").style.display = "none"
    }
});
console.log();