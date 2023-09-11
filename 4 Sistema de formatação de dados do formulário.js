let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

// Formatar o identificador com seis dígitos e zeros à esquerda
identificador = identificador.padStart(6, '0');

// Formatar o nome e sobrenome com letra maiúscula no início de cada palavra
nome = nome.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

// Remover espaços em branco do início e do fim do email
email = email.trim();

console.log(identificador);
console.log(nome);
console.log(email);
