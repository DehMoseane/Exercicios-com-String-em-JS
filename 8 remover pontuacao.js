function removerPontuacao(cpfOuCnpj) {
    const cpfOuCnpjSemPontuacao = cpfOuCnpj.replace(/[^\d]/g, '');

    console.log(cpfOuCnpjSemPontuacao);
}

const cpf = "011.022.033-44";
removerPontuacao(cpf);


const cnpj = "12.345.678/0001-90";
removerPontuacao(cnpj);

const cpf2 = "123.456.789-00";
removerPontuacao(cpf2);
