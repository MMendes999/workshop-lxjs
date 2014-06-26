var Hapi = require('hapi');

//create a server with a host and port

var server = Hapi.createServer('localhost', 8000);

//Add the route
server.route({
	method: 'GET',
	path: '/hello',
	handler: function(req, reply) {
		reply('Hello world!');
	}
});

//Start server
server.start();

//Launch application by running node index.js and then open
//the browser and type: http://localhost:8000/hello in your url