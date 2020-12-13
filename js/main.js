const $colores = document.querySelectorAll(".cuadro");
let jugadaMaquina = [];
let jugadaPersona = [];
let puntaje = document.querySelector("#puntaje");
let ronda = 0;

function mostrarColor(color, i) {
    i *= 1500;
    setTimeout(function() { color.classList.add("seleccionado"); }, i);
    setTimeout(function() { color.classList.remove("seleccionado"); }, (i + 500));
    return;

}


function actualizarTurno(aJugador) {
    let turno = document.querySelector("#turno");
    if (aJugador === "persona") {
        return turno.innerText = "Ahora es tu turno";
    }
    if (aJugador === "maquina") {
        return turno.innerText = "Ahora juega la máquina"

    }
    if (aJugador === "perdiste") {
        return turno.innerText = "¡Perdiste! Toca start para empezar de vuelta";
    }
}