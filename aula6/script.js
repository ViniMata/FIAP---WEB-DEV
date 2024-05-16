const pessoas = ["Wop", "Wop", "Wop", "Dot fuck em up", "Wop", "Wop", "Wop", "Ima do my stuff", "Why you trollin like a bitch", "Aint you tired", "Tryna strike a chord", "Its probably", "A minooooooor"]
// // Adiciona um elemento ao final do array
// pessoas.push("Dot fuck em up")

// //Remove o ultimo elemento do array
// pessoas.pop()

// //Adiciona um elemento no inicio do array
// pessoas.unshift("Hey")

// //Remove o primeiro elemento do array
// pessoas.shift()

// //Atualiza o valor de um array
// pessoas[0] = "Grahams"

// console.log(pessoas)

// for (i=0; i<=10; i++){
//     console.log(pessoas[i])
// }

// pessoas.forEach(
//     function rodarArray(usuario){
//         console.log(usuario.toLowerCase())
//     }
// )

// pessoas.forEach(usuario => console.log(usuario.toLowerCase()))
const pessoasModificado = 
pessoas.map( usuario => usuario.toLowerCase())

function modificarPessoas(){
    return pessoas.map( usuario => usuario.toLowerCase())
}

console.log(modificarPessoas())