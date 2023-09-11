const comentario = "Esse  é muito perigoso!";
const palavrasProibidas = ["pandemia", "covid"];

const comentarioEmMinusculas = comentario.toLowerCase();
const contemPalavraProibida = palavrasProibidas.some(palavra => comentarioEmMinusculas.includes(palavra));

console.log(contemPalavraProibida ? "Comentário bloqueado por conter palavras proibidas" : "Comentário autorizado");
