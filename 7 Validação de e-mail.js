function validarEmail(email) {

    if (email.indexOf("@") === -1) {
        return "E-mail inválido";
    }


    if (email.startsWith(".")) {
        return "E-mail inválido";
    }


    if (email.endsWith(".")) {
        return "E-mail inválido";
    }


    const partes = email.split("@");


    if (partes.length !== 2) {
        return "E-mail inválido";
    }


    if (partes[1].indexOf(".") === -1) {
        return "E-mail inválido";
    }


    return "E-mail válido";
}

console.log(validarEmail("jose@cubos.academy"));
console.log(validarEmail("jose@cubos.academy.br"));
console.log(validarEmail("jose.messias@cubos.academy"));
console.log(validarEmail("jose.messias@cubos.io"));
console.log(validarEmail("jose@cubos"));
console.log(validarEmail("jose.messias@cubos"));
console.log(validarEmail("jose.messias@."));
console.log(validarEmail("jose.@cubos"));
console.log(validarEmail(".@"));
console.log(validarEmail("@."));
console.log(validarEmail("jose.messias@cubos."));
console.log(validarEmail(".messias@cubos."));
console.log(validarEmail(".messias@cubos")); 
