window.onload = function() {
    let boton = document.getElementById("boton");
    boton.addEventListener("click", saludo);
}

function saludo() {
    alert("HOLA!");
}