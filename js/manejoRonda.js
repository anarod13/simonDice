function iniciarRonda() {

    turno.innerText = "Ahora juega la máquina";
    return juegaMaquina();
}

document.querySelector("#start").onclick = iniciarRonda;