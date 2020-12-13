function iniciarRonda() {

    turno.innerText = "Ahora juega la máquina";
    return juegaMaquina(1);
}

document.querySelector("#start").onclick = iniciarRonda;