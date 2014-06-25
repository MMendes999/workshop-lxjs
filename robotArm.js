var five = require("johnny-five"),
board, potentiometer, servo;

board = new five.Board();

board.on("ready", function(){

	//set range for servo
	scalingRange = [0, 179];

	//create a new 'potentiometer' hardware instance.
	potentiometer = new five.Sensor({
		pin: "A2",
		freq: 250
	});

	//create 'servo' instance
	servo = new five.Servo({
		pin: 9,
		range: scalingRange
	});

	//Scale potentiometer's value to match servo's movement range
	potentiometer.scale(scalingRange).on("change", function(err, value){
		servo.to(five.FN.map(this.value));
	});


});