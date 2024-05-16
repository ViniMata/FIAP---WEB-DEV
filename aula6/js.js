const filmes = [{
    nome: "Céu de Outubro",
    diretor : "Nolan",
    ano: 1993
    
}, {
    nome: "Procurando Nemo",
    diretor: "Mr. Beast",
    ano: 2007
}, {
    nome : "Top Gun",
    diretor : "Tarantino",
    ano : 1988

}]

const filmesModificados = 
filmes.filter(filme => filme.ano > 2000)

console.log(filmesModificados)