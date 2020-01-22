const { io } = require('../server');


io.on('connection', (client) => {
    console.log('Usuario Conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta Aplicación'
    });

    client.on('disconnect', () => {
        console.log('Usuario Desconectado');
    });

    // Escuchar al Cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        // Enviamos a todos los Usuarios Conectados
        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'TODO SALIÓ BIEN!'
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO SALIÓ MAL!!!!!!!'
        //     });
        // }

    });

});