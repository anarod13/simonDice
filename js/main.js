const $colores = document.querySelectorAll(".cuadro");
let jugadaMaquina = [];
let jugadaPersona = [];
let $puntaje = document.querySelector("#puntaje");
let puntaje;


function mostrarColor(color, i) {
    i *= 1500;
    setTimeout(function() { color.classList.add("seleccionado"); }, i);
    setTimeout(function() { color.classList.remove("seleccionado"); }, (i + 500));
    return;

}


function actualizarTurno(aJugador) {
    let turno = document.querySelector("#turno");
    if (aJugador === "persona") {

        return setTimeout(function() { turno.innerText = "Ahora es tu turno!"; }, -300);
    }
    if (aJugador === "maquina") {

        return setTimeout(function() { turno.innerText = "Ahora juega la máquina"; }, 800)
    }
    if (aJugador === "perdiste") {
        return turno.innerText = "¡Perdiste! Toca start para empezar de vuelta";
    }
    if (aJugador === "record") {
        return turno.innerText = "¡Marcaste un nuevo record!";
    }
}