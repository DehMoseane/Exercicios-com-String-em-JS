function validarArquivo(nomeArquivo) {

    const nomeArquivoLowerCase = nomeArquivo.toLowerCase();


    if (nomeArquivoLowerCase.endsWith('.jpg') || nomeArquivoLowerCase.endsWith('.jpeg') || nomeArquivoLowerCase.endsWith('.gif') || nomeArquivoLowerCase.endsWith('.png')) {
        console.log("Arquivo válido");
    } else {
        console.log("Arquivo inválido");
    }
}


const nomeArquivo1 = 'Foto da Familia.pdf';
validarArquivo(nomeArquivo1);

const nomeArquivo2 = 'Foto da Familia.png';
validarArquivo(nomeArquivo2);


const nomeArquivo3 = 'Relatorio.docx';
validarArquivo(nomeArquivo3);

const nomeArquivo4 = 'Imagem.jpg';
validarArquivo(nomeArquivo4); 
