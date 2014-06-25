var five = require("johnny-five"),
board, potentiometer, servo, range;

board = new five.Board();

board.on("ready", function(){

	range = [0, 179];

	//create a new 'potentiometer' hardware instance.
	potentiometer = new five.Sensor({
		pin: "A2",
		freq: 250
	});

	//create 'servo' instance
	servo = new five.Servo({
		pin: 9,
		range: range
	});

	potentiometer.scale(range).on("change", function(){
		servo.to(this.value);
	});

});