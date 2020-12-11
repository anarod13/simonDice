const $colores = document.querySelectorAll(".cuadro");
let jugadaMaquina = [];
let jugadaPersona = [];

function mostrarColor(color, i) {
    i *= 2000;
    setTimeout(function() { color.classList.add("seleccionado"); }, i);
    setTimeout(function() { color.classList.remove("seleccionado"); }, (i + 750));
    return;

}