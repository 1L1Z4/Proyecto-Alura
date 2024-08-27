function encriptar() {
    const texto = document.getElementById('inputText').value;
    const textoEncriptado = texto.replace(/e/g, 'enter')
                                .replace(/i/g, 'imes')
                                .replace(/a/g, 'ai')
                                .replace(/o/g, 'ober')
                                .replace(/u/g, 'ufat');
    document.getElementById('outputText').value = textoEncriptado;
}

function desencriptar() {
    const texto = document.getElementById('inputText').value;
    const textoDesencriptado = texto.replace(/enter/g, 'e')
                                    .replace(/imes/g, 'i')
                                    .replace(/ai/g, 'a')
                                    .replace(/ober/g, 'o')
                                    .replace(/ufat/g, 'u');
    document.getElementById('outputText').value = textoDesencriptado;
}
