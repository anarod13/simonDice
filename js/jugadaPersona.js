const tablero = document.querySelector("#tablero");

tablero.addEventListener('click', juegaPersona, true)

function juegaPersona(e) {

    mostrarColor(e.target, 0);
    jugadaPersona.push(e.target);
    return verificarJugada(ronda);
}

function verificarJugada(ronda) {
    let enCurso = jugadaPersona.length - 1;
    let jugadaCorrecta = (jugadaPersona[enCurso] === jugadaMaquina[enCurso]); // ver si es posile cambiar despu'es a lastIndex de jugadaPersona

    if (!jugadaCorrecta) {
        return actualizarTurno("perdiste");
    }
    if (jugadaPersona.length === jugadaMaquina.length) {
        ronda++;
        puntaje.innerText = ronda;
        setTimeout(actualizarTurno, 800, "maquina");

        setTimeout(juegaMaquina, 2000, ronda);

        return;
    }
}