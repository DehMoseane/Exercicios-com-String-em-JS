function validarCPFouCNPJ(numero) {
    if (numero.length === 11) {
        console.log("CPF Válido");
    } else if (numero.length === 14) {
        console.log('CNPJ Válido');
    } else {
        console.log("Número Inválido");
    }
}

validarCPFouCNPJ("70992527473000");
