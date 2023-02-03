window.onload = function() {
    $("#cuerpo").load("../Main/main.html");

    let quien = document.getElementById("quien");
    let servicios = document.getElementById("servicios");
    let colabora = document.getElementById("colabora");
    let contacto = document.getElementById("contacto");
    let multimedia = document.getElementById("multimedia");


    quien.addEventListener("click", () => cargar(quien, "Quiénes somos", "../QuienesSomos/quienesSomos.html"));
    servicios.addEventListener("click", () => cargar(servicios, "Servicios", "../Servicios/servicios.html"));
    colabora.addEventListener("click", () => cargar(colabora, "Colabora con nosotros", "../Colabora/colabora.html"));
    contacto.addEventListener("click", () => cargar(contacto, "Contacto", "../Contacto/contacto.html"));
    multimedia.addEventListener("click", () => cargar(multimedia, "Multimedia", "../Multimedia/multimedia.html"));
    
} 

function cargar(elemento, texto, objetivo) {

    let botones = document.querySelectorAll("div.botonera button");
    for (let boton of botones) {
        if (boton != elemento) {
            boton.classList.toggle("disabled");
            boton.classList.toggle("opacity-25");
            
            
        }
    }

    if (elemento.innerText == "Volver") {
        $("#cuerpo").load("../Main/main.html");
        elemento.classList.add("btn-outline-primary");
        elemento.classList.remove("btn-primary");
        elemento.innerText = texto;

    } else {
        $("#cuerpo").load(objetivo);
        elemento.classList.add("btn-primary");
        elemento.classList.remove("btn-outline-primary");
        elemento.innerText = "Volver";
    }

}
