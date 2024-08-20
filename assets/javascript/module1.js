// Funciones de encriptación y desencriptación

function encriptarBase64(texto) {
    return btoa(texto);
}

function desencriptarBase64(texto) {
    return atob(texto);
}

function encriptarHex(texto) {
    return Array.from(texto).map(c => c.charCodeAt(0).toString(16).padStart(2, '0')).join('');
}

function desencriptarHex(texto) {
    return texto.match(/.{1,2}/g).map(h => String.fromCharCode(parseInt(h, 16))).join('');
}

function encriptarROT13(texto) {
    return texto.replace(/[a-zA-Z]/g, function(c) {
        var code = c.charCodeAt(0);
        if (code >= 65 && code <= 90) return String.fromCharCode(((code - 65 + 13) % 26) + 65);
        if (code >= 97 && code <= 122) return String.fromCharCode(((code - 97 + 13) % 26) + 97);
    });
}

function encriptarCesar(texto, desplazamiento) {
    return texto.replace(/[a-zA-Z]/g, function(c) {
        var code = c.charCodeAt(0);
        var base = (code >= 65 && code <= 90) ? 65 : 97;
        return String.fromCharCode(((code - base + desplazamiento) % 26) + base);
    });
}

function desencriptarCesar(texto, desplazamiento) {
    return encriptarCesar(texto, 26 - desplazamiento);
}

function encriptarTextoABinario(texto) {
    return Array.from(texto).map(c => c.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
}

function desencriptarBinarioATexto(texto) {
    return texto.split(' ').map(b => String.fromCharCode(parseInt(b, 2))).join('');
}

function limpiar() {
    document.querySelector("#input-text").value = "";
    document.querySelector("#output-text").value = "";
    document.querySelector("#mensaje-gato").textContent = ''; // Limpiar el mensaje del gato
}

function encriptarTexto(texto, metodo) {
    switch (metodo) {
        case 'base64':
            return encriptarBase64(texto);
        case 'hex':
            return encriptarHex(texto);
        case 'rot13':
            return encriptarROT13(texto);
        case 'caesar':
            return encriptarCesar(texto, parseInt(document.querySelector("#shift").value) || 3); // Usar valor del input para el desplazamiento
        case 'binario':
            return encriptarTextoABinario(texto);
        default:
            return texto;
    }
}

function desencriptarTexto(texto, metodo) {
    switch (metodo) {
        case 'base64':
            return desencriptarBase64(texto);
        case 'hex':
            return desencriptarHex(texto);
        case 'rot13':
            return encriptarROT13(texto); // ROT13 es simétrico
        case 'caesar':
            return desencriptarCesar(texto, parseInt(document.querySelector("#shift").value) || 3); // Usar valor del input para el desplazamiento
        case 'binario':
            return desencriptarBinarioATexto(texto);
        default:
            return texto;
    }
}

export {
    encriptarTexto,
    desencriptarTexto,
    limpiar,
    encriptarBase64,
    desencriptarBase64,
    encriptarHex,
    desencriptarHex,
    encriptarROT13,
    encriptarCesar,
    desencriptarCesar,
    encriptarTextoABinario,
    desencriptarBinarioATexto
};


