function gerarNickname(nome) {

    nome = nome.replace(/\s/g, '').toLowerCase();


    if (nome.length > 13) {
        nome = nome.substring(0, 13);
    }


    nome = "@" + nome;


    console.log(nome);
}

const nome = 'Débora Moseane';
gerarNickname(nome);

const nome2 = 'Daniel Andrade';
gerarNickname(nome2);
const nome3 = 'Jaqueline Maria';
gerarNickname(nome3); 