'use strict';

const Hapi = require('hapi');

const server = Hapi.server({
    port: process.env.PORT
});

server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {

        return 'Home Page!';
    }
});

// server.route({
//     method: 'GET',
//     path: '/{name}',
//     handler: (request, h) => {
//
//         return 'Hello, ' + encodeURIComponent(request.params.name) + '!';
//     }
// });

server.route({
    method: 'GET',
    path: '/ellipse',
    handler: (request, h) => {

        return h.file('./public/index.html');
    }
});

server.route({
   method: 'GET',
   path: '/birds',
    handler: (req,res)=>{
       return res.file('./public/birds.html');
    }
});

server.route({
    method: 'GET',
    path: '/linear',
    handler: (request, h) => {

        return h.file('./public/linear.html');
    }
});
server.route({
    method: 'GET',
    path: '/input',
    handler: (request, h) => {

        return h.file('./public/input.html');
    }
});

const init = async () => {

    await server.register(require('inert'));

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

init();