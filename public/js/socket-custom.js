var socket = io();

socket.on('connect', function() {
    console.log('Conectado al Servidor');
});

// Escuchar
socket.on('disconnect', function() {
    console.log('Perdimos Conexión con el Servidor');
});


// Enviar Información
socket.emit('enviarMensaje', {
    usuario: 'Victor',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta Server: ', resp);
});

// Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});