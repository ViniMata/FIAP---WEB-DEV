const alunos = [
    { nome: 'Diogo', media: 5.5 },
    { nome: 'Julia', media: 9.5 },
    { nome: 'Gustavo Oliveira de Moura', media: 10.5 },
    { nome: 'Tiago', media: 5.0 }
   ];

function aprovados(array){
    return array.filter(alunos => alunos.media >= 6)
}   

console.log("Aprovados")
console.log(aprovados(alunos))
console.log("Reprovados")
console.log(alunos.filter(alunos => alunos.media < 6))