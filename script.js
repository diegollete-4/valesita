let mensajes= [];

function mostrarTexto(){
    let elementoMensaje= document.getElementById("mensaje");
    let elementoContador= document.getElementById("contador");

    mensajes.push("t amo")
    elementoMensaje.textContent= mensajes.join(" ");

    elementoContador.textContent= mensajes.length;
}
