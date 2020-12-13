const tablero = document.querySelector("#tablero");

tablero.addEventListener('click', juegaPersona, true)

function juegaPersona(e) {
    mostrarColor(e.target, 0);
    jugadaPersona.push(e.target);
    verificarJugada();
    return jugadaPersona;
}

function verificarJugada() {
    let ronda = jugadaPersona.length - 1;
    let jugadaCorrecta = (jugadaPersona[ronda] === jugadaMaquina[ronda]); // ver si es posile cambiar despu'es a lastIndex de jugadaPersona

    if (!jugadaCorrecta) {
        return console.log("perdiste!");
    }
    if (jugadaPersona.length === jugadaMaquina.leng) {
        return jugadaCompleta;
    }
}