document.querySelector("#start").addEventListener('click', iniciarRonda, true);

function iniciarRonda() {
    reiniciar();
    turno.innerText = "Ahora juega la máquina";
    return setTimeout(juegaMaquina(), 1000);
}

function perder() {
    if (chequearRecord()) {
        actualizarTurno("record")
    } else {
        actualizarTurno("perdiste");
    }

    let turno = document.querySelector(".turno");
    turno.classList.add("end-game");
    bloquearJugador();
    return document.querySelector("#start").addEventListener('click', iniciarRonda, true);
}

function reiniciar() {
    jugadaMaquina = [];
    $puntaje.innerText = 0;
    let turno = document.querySelector(".turno");
    turno.classList.remove("end-game");
    bloquearBotontStart();
}

function bloquearBotontStart() {
    document.querySelector("#start").removeEventListener('click', iniciarRonda, true);
}