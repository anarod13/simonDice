document.querySelector("#start").addEventListener('click', iniciarRonda, true);

function iniciarRonda() {
    reiniciar();
    turno.innerText = "Ahora juega la máquina";
    return juegaMaquina();
}

function perder() {
    actualizarTurno("perdiste");
    return document.querySelector("#start").addEventListener('click', iniciarRonda, true);
}

function reiniciar() {
    jugadaMaquina = [];
    $puntaje.innerText = 0;
    bloquearBotontStart();
}

function bloquearBotontStart() {
    document.querySelector("#start").removeEventListener('click', iniciarRonda, true);
}