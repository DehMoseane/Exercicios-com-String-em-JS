function formatarCelular(celular) {

    celular = celular.toString();


    if (celular.length === 8) {

        celular = "9" + celular;
    }


    if (celular.length === 10) {

        return `(${celular.substring(0, 2)}) 9 ${celular.substring(2, 6)}-${celular.substring(6)}`;
    } else if (celular.length === 9) {

        return `9 ${celular.substring(0, 4)}-${celular.substring(4)}`;
    } else {

        return "Número de celular inválido";
    }
}


const celular1 = 7199918888;
console.log(formatarCelular(celular1));

const celular2 = 99918888;
console.log(formatarCelular(celular2)); 