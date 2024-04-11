function soma(){
    //Entrada
    var n1 = parseFloat(document.getElementById("numero1").value)
    var n2 = parseFloat(document.getElementById("numero2").value)
    var resultado = document.getElementById("resultado")
    //Processamento
    var soma = n1 + n2
    //Saida
    resultado.innerText = soma
}
function subtracao(){
    //Entrada
    var n1 = parseFloat(document.getElementById("numero1").value)
    var n2 = parseFloat(document.getElementById("numero2").value)
    var resultado = document.getElementById("resultado")
    //Processamento
    var subtracao = n1 - n2
    //Saida
    resultado.innerText = subtracao
}
function divisao(){
    //Entrada
    var n1 = parseFloat(document.getElementById("numero1").value)
    var n2 = parseFloat(document.getElementById("numero2").value)
    var resultado = document.getElementById("resultado")
    //Processamento
    var divisao = n1 / n2
    //Saida
    resultado.innerText = divisao
}
function multiplicacao(){
    //Entrada
    var n1 = parseFloat(document.getElementById("numero1").value)
    var n2 = parseFloat(document.getElementById("numero2").value)
    var resultado = document.getElementById("resultado")
    //Processamento
    var multiplicacao = n1 * n2
    //Saida
    resultado.innerText =multiplicacao
}