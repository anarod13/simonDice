function juegaPersona(e) {

    mostrarColor(e.target, 0);
    jugadaPersona.push(e.target);
    return verificarJugada();
}

function verificarJugada() {
    let enCurso = jugadaPersona.length - 1;
    let jugadaCorrecta = (jugadaPersona[enCurso] === jugadaMaquina[enCurso]);
    if (!jugadaCorrecta) {
        return perder();
    }
    if (jugadaPersona.length === jugadaMaquina.length) {
        let puntaje = jugadaPersona.length;
        $puntaje.innerText = puntaje;
        actualizarTurno("maquina");
        setTimeout(juegaMaquina, 2000);
        return;
    }
    return;
}