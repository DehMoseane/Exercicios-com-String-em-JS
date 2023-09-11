function criarURLAmigavel(texto) {

    const textoMinusc = texto.toLowerCase();


    const urlAmigavel = textoMinusc.replace(/\s+/g, '-');

    return urlAmigavel;
}

const texto = "Aprenda programar do zero na Cubos Academy";
const urlAmigavel = criarURLAmigavel(texto);

console.log(urlAmigavel);
