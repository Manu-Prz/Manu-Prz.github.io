window.onload = function() {
    $("#cuerpo").load("../main/main.html");
    const mqLarge  = window.matchMedia('(min-width: 768px)');
    menuHandler(mqLarge);
    
    mqLarge.addEventListener('change', menuHandler);
    
    let quien = document.getElementById("quien");
    let servicios = document.getElementById("servicios");
    let colabora = document.getElementById("colabora");
    let contacto = document.getElementById("contacto");
    let multimedia = document.getElementById("multimedia");
    let quienesSomos = document.getElementById("quienesSomos");
    let queHacemos= document.getElementById("queHacemos");
    let nuestraHistoria= document.getElementById("nuestraHistoria");
    let subMenu1 = document.getElementById("subMenu1");


	//IDEA: Lo que haría un hipotético selector de idioma sería simplemente seleccionar una variable u otra, que se concatenaría al string de la ruta enviada a la función "cargar()"

    servicios.addEventListener("click", () => cargar(servicios, "../servicios/servicios.html"));
    colabora.addEventListener("click", () => cargar(colabora, "../colabora/colabora.html"));
    contacto.addEventListener("click", () => cargar(contacto, "../contacto/contacto.html"));
    multimedia.addEventListener("click", () => cargar(multimedia, "../multimedia/multimedia.html"));
    quienesSomos.addEventListener("click", () => cargar(quienesSomos, "../quienesSomos/quienesSomos.html"));
    queHacemos.addEventListener("click", () => cargar(queHacemos, "../queHacemos/queHacemos.html"));
    nuestraHistoria.addEventListener("click", () => cargar(nuestraHistoria, "../nuestraHistoria/nuestraHistoria.html"));
    quien.addEventListener("click", rotarPuntero);

    document.getElementById("logo").style.height = `${document.querySelector("#quien").offsetHeight}px`;
    document.getElementById("logo").style.display = "inline";
    
}

// media query handler function
function menuHandler(e) {
    
    if (!e.matches) {
        $("#botonera")[0].classList.add("collapse");
        $("#botonera")[0].style.backgroundImage = "none";

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
            
            div.setAttribute("class", "d-flex justify-content-evenly mt-3 mb-5");
            div.setAttribute("id", "menuDisplayerContainer")
            div.append(menuDisplayer);
            
            $("#topMenu")[0].insertBefore(div,$("#botonera")[0]);

            $("#menuDisplayer")[0].addEventListener("click", () => {
                if ($("#menuDisplayer")[0].classList.contains("collapsed")) {
                    $("#menuDisplayer")[0].classList.remove("btn-primary");
                    $("#menuDisplayer")[0].classList.add("btn-outline-primary");
                } else {
                    $("#menuDisplayer")[0].classList.add("btn-primary");
                    $("#menuDisplayer")[0].classList.remove("btn-outline-primary");

                    document.getElementById("logo").style.height = `${document.querySelector("#quien").offsetHeight}px`;
                    document.getElementById("logo").style.display = "inline";
                }
            })
        }
        
    } else {
        if (document.getElementById("menuDisplayerContainer")) {
            document.getElementById("menuDisplayerContainer").remove()
        }

        $("#botonera")[0].style.backgroundImage = "url('resources/visual/recta.svg')";

    }
    

}

function rotarPuntero(e) {
    if (!e.target.classList.contains("collapsed")) {
        document.getElementById("puntero").style.transform = "rotate(180deg)";

    } else {
        document.getElementById("puntero").style.transform = "";
    }
}

function cargar(elemento, objetivo) {

    let botones = document.querySelectorAll("section#topMenu button");
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
