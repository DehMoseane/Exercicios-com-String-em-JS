const numeroCartao = '1111222233334444';

function formatarNumeroCartao(numero) {
    const primeiroQuarteto = numero.slice(0, 4);
    const ultimoQuarteto = numero.slice(-4);
    const caracteresOcultos = '*'.repeat(numero.length - 8);
    return `${primeiroQuarteto}${caracteresOcultos}${ultimoQuarteto}`;
}

const numeroFormatado = formatarNumeroCartao(numeroCartao);
console.log(numeroFormatado);
