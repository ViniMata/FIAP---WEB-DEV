function escolhaComp(){
    const jokeipo = ["Pedra", "Papel", "Tesoura"]
    let numeroAleatorio = Math.floor(Math.random() * jokeipo.length)
    return jokeipo[numeroAleatorio]

}

function jogar(escolhaDoUsuario){

    let escolhaPC = escolhaComp()
    let resultado

    if(escolhaDoUsuario === escolhaPC){
        resultado = "Empate!"
    }

    
    else if(escolhaDoUsuario ==='Pedra' && escolhaPC === 'Tesoura' || escolhaDoUsuario ==='Tesoura' && escolhaPC === 'Papel' ||escolhaDoUsuario ==='Papel' && escolhaPC === 'Pedra'){
        resultado = "Ganhou!" 
    } else{
        resultado = "Perdeu"
    }
    
    document.getElementById('resultado').innerText = `${resultado}
    A escolha do usuario foi ${escolhaDoUsuario} e a do pc foi ${escolhaPC}`
}
