const $colores = document.querySelectorAll(".cuadro");
let jugadaMaquina = [];
let jugadaPersona = [];
let $puntaje = document.querySelector("#puntaje");


function mostrarColor(color, i) {
    i *= 1500;
    setTimeout(function() { color.classList.add("seleccionado"); }, i);
    setTimeout(function() { color.classList.remove("seleccionado"); }, (i + 500));
    return;
}

function habilitarJugador() {
    const tablero = document.querySelector("#tablero");
    return tablero.addEventListener('click', juegaPersona, true);
}

function bloquearJugador() {
    const tablero = document.querySelector("#tablero");
    return tablero.removeEventListener('click', juegaPersona, true);
}

function actualizarTurno(aJugador) {
    let turno = document.querySelector("#turno");
    if (aJugador === "persona") {
        habilitarJugador();
        return turno.innerText = "Ahora es tu turno!";
    }
    if (aJugador === "maquina") {
        bloquearJugador();
        return setTimeout(function() { turno.innerText = "Ahora juega la máquina"; }, 800)
    }
    if (aJugador === "perdiste") {

        return turno.innerText = "¡Perdiste! Toca start para empezar de vuelta";
    }
    if (aJugador === "record") {
        return turno.innerText = "¡Marcaste un nuevo record! Toca start para empezar de vuelta";
    }
}

function chequearRecord() {
    const $record = document.querySelector("#record");
    let puntaje = Number($puntaje.innerText)
    let record = Number($record.innerText);
    if (puntaje > record) {
        $record.innerText = puntaje;
        return true;
    }
    return false;
}