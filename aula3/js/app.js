// && -> "e"
// || -> "ou"
// ! -> não
// (condição) ? true:false -> if ternario

function media(){
    var l1 = parseInt(document.getElementById("qtd").value)
    var resultado = document.getElementById("resultado")
    var r = ''
    if (l1 <= 6){
        r =  l1 * 22
        
    }
    else{
        r = l1 * 15
        
    }

    resultado.innerText = `O valor total é ${r}.`
}