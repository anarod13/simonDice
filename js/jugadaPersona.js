const tablero = document.querySelector("#tablero");

tablero.addEventListener('click', juegaPersona, true);

function juegaPersona(e) {

    mostrarColor(e.target, 0);
    jugadaPersona.push(e.target);
    return verificarJugada();
}

function verificarJugada() {
    let enCurso = jugadaPersona.length - 1;
    let jugadaCorrecta = (jugadaPersona[enCurso] === jugadaMaquina[enCurso]); // ver si es posile cambiar despu'es a lastIndex de jugadaPersona

    if (!jugadaCorrecta) {
        return actualizarTurno("perdiste");
    }
    if (jugadaPersona.length === jugadaMaquina.length) {
        puntaje = jugadaPersona.length;
        $puntaje.innerText = puntaje;
        chequearRecord(puntaje);
        actualizarTurno("maquina");
        setTimeout(juegaMaquina, 2000);
        return;
    }
}

function chequearRecord(puntaje) {
    const $record = document.querySelector("#record");
    let record = Number($record.innerText);
    if (puntaje > record) {
        return $record.innerText = puntaje;

    }
    return;
}