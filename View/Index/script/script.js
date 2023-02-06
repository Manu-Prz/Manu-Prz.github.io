window.onload = function() {
    $("#cuerpo").load("../Main/main.html");
    const mqLarge  = window.matchMedia( '(min-width: 768px)' );
    menuHandler(mqLarge);
    
    mqLarge.addEventListener('change', menuHandler);
    
    let quien = document.getElementById("quien");
    let servicios = document.getElementById("servicios");
    let colabora = document.getElementById("colabora");
    let contacto = document.getElementById("contacto");
    let multimedia = document.getElementById("multimedia");


    quien.addEventListener("click", () => cargar(quien, "../QuienesSomos/quienesSomos.html"));
    servicios.addEventListener("click", () => cargar(servicios, "../Servicios/servicios.html"));
    colabora.addEventListener("click", () => cargar(colabora, "../Colabora/colabora.html"));
    contacto.addEventListener("click", () => cargar(contacto, "../Contacto/contacto.html"));
    multimedia.addEventListener("click", () => cargar(multimedia, "../Multimedia/multimedia.html"));

}

// media query handler function
function menuHandler(e) {
    
    if (!e.matches) {
        $("#botonera")[0].classList.add("collapse");
        $("#botonera")[0].style.backgroundImage = "";

        if (!document.getElementById("menuDisplayer")){

            let menuDisplayer = document.createElement("button");
            let div = document.createElement("div");
            let img = document.createElement("img");
            
            menuDisplayer.setAttribute("type", "button");
            menuDisplayer.setAttribute("class", "btn btn-primary mx-4 my-5 w-100");
            menuDisplayer.setAttribute("id", "menuDisplayer");
            menuDisplayer.setAttribute("data-bs-toggle", "collapse");
            menuDisplayer.setAttribute("data-bs-target", "#botonera");
            menuDisplayer.setAttribute("aria-expanded", "false");
            menuDisplayer.setAttribute("aria-controls", "#botonera");

            img.setAttribute("src", "resources/navBar.svg");
            menuDisplayer.append(img);
            
            div.setAttribute("class", "d-flex justify-content-evenly");
            div.append(menuDisplayer);
            
            document.body.insertBefore(div,$("#botonera")[0]);
        }
        
    } else {
        if (document.getElementById("menuDisplayer")) {
            document.getElementById("menuDisplayer").remove()
        }

        $("#botonera")[0].style.backgroundImage = "url('resources/recta.svg')";

    }
    

}

function cargar(elemento, objetivo) {

    let botones = document.querySelectorAll("div.botonera button");
    for (let boton of botones) {
        if (boton != elemento) {
            
            boton.classList.remove("btn-primary");
            boton.classList.add("btn-outline-primary");
        } else {
            elemento.classList.add("btn-primary");
            elemento.classList.remove("btn-outline-primary");

        }

    }

    $("#cuerpo").load(objetivo);

}