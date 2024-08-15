document.addEventListener("DOMContentLoaded", () => {
    var botonEncriptar = document.querySelector("#btn-encrypt");
    var botonDesencriptar = document.querySelector("#btn-decrypt");
    var botonLimpiar = document.querySelector("#btn-clear");
    var cajatexto = document.querySelector("#input-text");
    var resultado = document.querySelector("#output-text");
    var metodoSelect = document.querySelector("#encryption-type");
    var shiftInput = document.querySelector("#shift");

    // Seleccionamos la imagen del gato y el contenedor de mensajes
    var gatoImagen = document.querySelector("#gato-imagen");
    var mensajeDiv = document.querySelector("#mensaje-gato");

// Mensajes graciosos del gato
var mensajesGato = [
    '¡Miau! ¡Tengo más secretos que tu diario! 🐱🔒',
    '¿Sabías que los gatos son genios del espionaje? 🤫',
    '¡No te preocupes! Solo estoy aquí para asegurarme de que no toques mi comida. 🍽️',
    '¿Puedo ayudar con tu código? Solo si no es muy complicado... 🧩',
    '¡Mi cola está en modo radar! ¡Estoy detectando diversión! 🚀',
    '¡Miau! ¿Puedo ser tu ayudante secreto? 🕵️‍♂️',
    'Si ves algo raro en el código, ¡es culpa del ratón! 🐭',
    '¡Mi patita derecha es mi mejor herramienta de debugging! 🐾',
    '¡Cuidado! Tengo un sentido agudo para detectar diversión y errores. 🕵️‍♀️',
    '¡Sigo aprendiendo sobre programación, pero por ahora solo sé cómo dormir en el teclado! 💤',
    '¡Estoy aquí para supervisar tus habilidades de programación y para asegurarme de que no olvides jugar! 🎮',
    '¡No dejes que el código te vuelva loco! Si lo haces, yo estaré aquí para darte mimos. 🐾',
    '¿Sabías que los gatos tienen un 99% de probabilidades de encontrar el lugar más cómodo del sofá? 🛋️',
    '¡Voy a ser tu compañero de programación! O al menos, tu compañero de siestas. 💤',
    '¿Puedo ayudarte a depurar? Solo si me das un poco de atún primero. 🐟',
    '¡Estoy aquí para hacer que el proceso de depuración sea un poco más divertido! 😸',
    '¡No dejes que el código te estrese! Piensa en mí, siempre relajado y durmiendo. 💤',
    '¡Miau! Si estás atascado, solo recuerda que los gatos siempre encuentran una salida. 🗝️',
    '¡No puedo escribir código, pero puedo ofrecerte un montón de ternura! 🐱'
];

    

    // Función para mostrar un mensaje aleatorio del gato
    function mostrarMensajeGato() {
        var mensajeAleatorio = mensajesGato[Math.floor(Math.random() * mensajesGato.length)];
        mensajeDiv.textContent = mensajeAleatorio;
    }

    // Añadir eventos a la imagen del gato
    gatoImagen.addEventListener('click', mostrarMensajeGato);
    gatoImagen.addEventListener('mouseover', mostrarMensajeGato);
    gatoImagen.addEventListener('mouseout', () => {
        mensajeDiv.textContent = ''; // Limpiar el mensaje cuando el ratón sale de la imagen
    });

    // Función para manejar el clic en el botón de encriptar
    botonEncriptar.onclick = function() {
        var metodo = metodoSelect.value;
        var texto = recuperarTexto();
        resultado.value = encriptarTexto(texto, metodo);
    }

    // Función para manejar el clic en el botón de desencriptar
    botonDesencriptar.onclick = function() {
        var metodo = metodoSelect.value;
        var texto = recuperarTexto();
        resultado.value = desencriptarTexto(texto, metodo);
    }

    // Función para manejar el clic en el botón de limpiar
    botonLimpiar.onclick = limpiar;

    // Recupera el texto del área de entrada
    function recuperarTexto() {
        return cajatexto.value;
    }

    // Encripta el texto basado en el método seleccionado
    function encriptarTexto(texto, metodo) {
        switch (metodo) {
            case 'base64':
                return encriptarBase64(texto);
            case 'hex':
                return encriptarHex(texto);
            case 'rot13':
                return encriptarROT13(texto);
            case 'caesar':
                return encriptarCesar(texto, parseInt(shiftInput.value) || 3); // Usar valor del input para el desplazamiento
            case 'binario':
                return encriptarTextoABinario(texto);
            default:
                return texto;
        }
    }

    // Desencripta el texto basado en el método seleccionado
    function desencriptarTexto(texto, metodo) {
        switch (metodo) {
            case 'base64':
                return desencriptarBase64(texto);
            case 'hex':
                return desencriptarHex(texto);
            case 'rot13':
                return encriptarROT13(texto); // ROT13 es simétrico
            case 'caesar':
                return desencriptarCesar(texto, parseInt(shiftInput.value) || 3); // Usar valor del input para el desplazamiento
            case 'binario':
                return desencriptarBinarioATexto(texto);
            default:
                return texto;
        }
    }

    // Función para encriptar texto en Base64
    function encriptarBase64(texto) {
        return btoa(texto);
    }

    // Función para desencriptar texto en Base64
    function desencriptarBase64(texto) {
        return atob(texto);
    }

    // Función para encriptar texto a formato hexadecimal
    function encriptarHex(texto) {
        return Array.from(texto).map(c => c.charCodeAt(0).toString(16).padStart(2, '0')).join('');
    }

    // Función para desencriptar texto de formato hexadecimal
    function desencriptarHex(texto) {
        return texto.match(/.{1,2}/g).map(h => String.fromCharCode(parseInt(h, 16))).join('');
    }

    // Función para encriptar texto usando ROT13
    function encriptarROT13(texto) {
        return texto.replace(/[a-zA-Z]/g, function(c) {
            var code = c.charCodeAt(0);
            if (code >= 65 && code <= 90) return String.fromCharCode(((code - 65 + 13) % 26) + 65);
            if (code >= 97 && code <= 122) return String.fromCharCode(((code - 97 + 13) % 26) + 97);
        });
    }

    // Función para encriptar texto usando Cifra de César
    function encriptarCesar(texto, desplazamiento) {
        return texto.replace(/[a-zA-Z]/g, function(c) {
            var code = c.charCodeAt(0);
            var base = (code >= 65 && code <= 90) ? 65 : 97;
            return String.fromCharCode(((code - base + desplazamiento) % 26) + base);
        });
    }

    // Función para desencriptar texto usando Cifra de César
    function desencriptarCesar(texto, desplazamiento) {
        return encriptarCesar(texto, 26 - desplazamiento);
    }

    // Función para encriptar texto a formato binario
    function encriptarTextoABinario(texto) {
        return Array.from(texto).map(c => c.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
    }

    // Función para desencriptar texto de formato binario
    function desencriptarBinarioATexto(texto) {
        return texto.split(' ').map(b => String.fromCharCode(parseInt(b, 2))).join('');
    }

    // Función para limpiar los campos de texto
    function limpiar() {
        cajatexto.value = "";
        resultado.value = "";
        mensajeDiv.textContent = ''; // Limpiar el mensaje del gato
    }
});
