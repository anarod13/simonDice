function juegaMaquina() {
    let color = colorAleatorio();
    jugadaMaquina.push(color);
    jugadaMaquina.forEach(function(jugada, i) { mostrarColor(jugada, i) });
    jugadaPersona = [];
    return turno = "Ahora es tu turno";
}

function colorAleatorio() {
    let colores = [];
    $colores.forEach($color => colores.push($color));
    return colores[getRandom()];
}

function getRandom() {
    return Math.floor(Math.random() * (4 - 0));
}