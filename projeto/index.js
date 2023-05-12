function mudarNumero(num) {
    let decimal = Number(num)
    let binario = decimal.toString(2)
    document.getElementById('resultado').innerHTML = binario
}