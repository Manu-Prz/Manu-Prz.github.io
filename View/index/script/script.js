window.onload = function() {
    $("#cuerpo").load("../main/main.html");
    //const mqLarge  = window.matchMedia('(min-width: 768px)');
    const mqSmall  = window.matchMedia('(min-width: 862px)');
    const mqMedium = window.matchMedia('(min-width: 1092px)');
    menuHandler(mqSmall);
    reArrange(mqMedium);
    
    mqSmall.addEventListener('change', menuHandler);
    mqMedium.addEventListener('change', reArrange);
    
    let quien = document.getElementById("quien");
    let servicios = document.getElementById("servicios");
    let colabora = document.getElementById("colabora");
    let contacto = document.getElementById("contacto");
    let multimedia = document.getElementById("multimedia");
    let quienesSomos = document.getElementById("quienesSomos");
    let queHacemos= document.getElementById("queHacemos");
    let nuestraHistoria= document.getElementById("nuestraHistoria");
    let subMenu1 = document.getElementById("subMenu1");
    let subMenu2 = document.getElementById("subMenu2");


	//IDEA: Lo que haría un hipotético selector de idioma sería simplemente seleccionar una variable u otra, que se concatenaría al string de la ruta enviada a la función "cargar()"

    colabora.addEventListener("click", () => cargar(colabora, "../colabora/colabora.html"));
    contacto.addEventListener("click", () => cargar(contacto, "../contacto/contacto.html"));
    multimedia.addEventListener("click", () => cargar(multimedia, "../multimedia/multimedia.html"));
    quienesSomos.addEventListener("click", () => cargar(quienesSomos, "../quienesSomos/quienesSomos.html"));
    queHacemos.addEventListener("click", () => cargar(queHacemos, "../queHacemos/queHacemos.html"));
    nuestraHistoria.addEventListener("click", () => cargar(nuestraHistoria, "../nuestraHistoria/nuestraHistoria.html"));
    quien.addEventListener("click", desplegarSubMenu);
    servicios.addEventListener("click", desplegarSubMenu);
    
}

// media query handler function
function menuHandler(e) {
    
    let botonera = document.getElementById("botonera");
    let divs = document.querySelectorAll("div#botonera > div");
    let subMenu1 = document.querySelector("#subMenu1");
    let subMenu2 = document.querySelector("#subMenu2");

    if (!e.matches) {
        botonera.classList.remove("d-flex");
        botonera.classList.add("collapse", "d-flex-column");
        botonera.style.backgroundImage = "none";

        for (let div of divs) {
            div.classList.add("mb-2");
        }

        if (!document.getElementById("menuDisplayer")){

            let menuDisplayer = document.createElement("button");
            let div = document.createElement("div");
            let img = document.createElement("img");
            
            menuDisplayer.setAttribute("type", "button");
            menuDisplayer.setAttribute("class", "btn btn-outline-primary mx-4 w-100");
            menuDisplayer.setAttribute("id", "menuDisplayer");
            menuDisplayer.setAttribute("data-bs-toggle", "collapse");
            menuDisplayer.setAttribute("data-bs-target", "#botonera");
            menuDisplayer.setAttribute("aria-expanded", "false");
            menuDisplayer.setAttribute("aria-controls", "#botonera");

            img.setAttribute("src", "resources/visual/navBar3.svg");
            menuDisplayer.append(img);
            
            div.setAttribute("class", "d-flex justify-content-evenly mt-3 mb-5 w-100");
            div.setAttribute("id", "menuDisplayerContainer")
            div.append(menuDisplayer);

            $("#topMenu")[0].classList.add("d-flex", "flex-wrap");
            //$("#logoContainer")[0].style.display = "none";
            //$("#logo")[0].style.display = "none";
            $("#topMenu")[0].insertBefore(div,$("#botonera")[0]);



            $("#menuDisplayer")[0].addEventListener("click", () => {
                if ($("#menuDisplayer")[0].classList.contains("collapsed")) {
                    $("#menuDisplayer")[0].classList.remove("btn-primary");
                    $("#menuDisplayer")[0].classList.add("btn-outline-primary");
                } else {
                    $("#menuDisplayer")[0].classList.add("btn-primary");
                    $("#menuDisplayer")[0].classList.remove("btn-outline-primary");
                }
            })
        }

        botonera.insertBefore(subMenu1,$("#servicios")[0].parentNode);
        botonera.insertBefore(subMenu2,$("#colabora")[0].parentNode);
        
    } else {
        if (document.getElementById("menuDisplayerContainer")) {
            document.getElementById("menuDisplayerContainer").remove()
        }

        for (let div of divs) {
            div.classList.remove("mb-2");
        }

        botonera.parentElement.lastElementChild.append(subMenu1);
        botonera.parentElement.lastElementChild.append(subMenu2);

        botonera.classList.remove("collapse", "d-flex-column");
        botonera.classList.add("d-flex");
        botonera.style.backgroundImage = "url('resources/visual/recta.svg')";

    }
    
}

function reArrange(e) {
    let logoContainer = document.getElementById("logoContainer");
    let logo = document.getElementById("logo");
    let topMenu = document.getElementById("topMenu");


    if (!e.matches) {
        topMenu.classList.add("d-flex", "flex-wrap");
        logoContainer.classList.remove("ps-3");
        logoContainer.classList.remove("justify-content-end");
        logoContainer.classList.add("justify-content-center");
        logoContainer.classList.add("mb-3");
        logo.style.width = "20%";

    } else {

        logoContainer.classList.add("ps-3");
        logoContainer.classList.add("justify-content-end");
        logoContainer.classList.remove("justify-content-center");
        topMenu.classList.remove("d-flex", "flex-wrap");
        topMenu.style.display = "grid";
        logoContainer.classList.remove("mb-3")
        logo.style.width = "auto";

    }
}

function desplegarSubMenu(e) {
    let subMenu = document.querySelector("div#subMenu1.show, div#subMenu2.show");

    /*subMenu.forEach(element => {
        if (element.id != e.target.getAttribute("data-bs-target").slice(1)) {
            element.style.display = "none";
        }
    });*/

    if (subMenu) {
        //subMenu.classList.remove("show");
        subMenu.classList.add("collapsing");
        document.querySelector(`button[data-bs-target='#${subMenu.id}']`).firstElementChild.style.transform = "rotate(0deg)";
    }

    if (!e.target.classList.contains("collapsed")) {
        e.target.firstElementChild.style.transform = "rotate(180deg)";

    } else {
        e.target.firstElementChild.style.transform = "rotate(0deg)";
    }
}

function cargar(elemento, objetivo) {

    let botones = document.querySelectorAll("section#topMenu button");
    for (let boton of botones) {
        if (boton != elemento) {
            
            boton.classList.add("btn-primary");
            boton.classList.remove("btn-outline-primary");
        } else {
            elemento.classList.remove("btn-primary");
            elemento.classList.add("btn-outline-primary");

        }

    }

    $("#cuerpo").load(objetivo);

}
