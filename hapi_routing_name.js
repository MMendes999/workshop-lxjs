//Start the app from your command line with: node hellohapi.js

//then visit: http://localhost:3000/YOURNAME in your browser

var Hapi = require('hapi');
var server = new Hapi.Server('0.0.0.0', 8080);

server.route({
	method: 'GET',
	path: '/{yourname*}',
	handler: function(req, reply) {
		reply('Hello ' + req.params.yourname)
	}
});

server.start(function() { //boots your server
	console.log("Now visit: http://localhost:8080/YOURNAME")
});