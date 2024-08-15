
   
   
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
    export {
        mostrarMensajeGato
    }




    // Añadir eventos a la imagen del gato
    gatoImagen.addEventListener('click', mostrarMensajeGato);
    gatoImagen.addEventListener('mouseover', mostrarMensajeGato);
    gatoImagen.addEventListener('mouseout', () => {
        mensajeDiv.textContent = ''; // Limpiar el mensaje cuando el ratón sale de la imagen
    });
