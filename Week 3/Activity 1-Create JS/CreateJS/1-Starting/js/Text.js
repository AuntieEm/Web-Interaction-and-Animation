window.onload = function() {
	
	var canvas = document.getElementById("canvas1");
	var stage = new createjs.Stage(canvas);
	
	//text class is for working text
	var sentence = new createjs.Text();
	
	//modify the text property
	sentence.text = "This is a sentence about nothing...or is it?";
	
	//font property - takes most normal css strings
	sentence.font = "bold 30px Times";
	
	//specify a color
	sentence.color = "blue";
	
	//text IS a display object
	//it inherits all of teh normal properties
	sentence.x = 150;
	sentence.y = 50;
	//sentence.rotation = 45;
	
	//text has more properties
	//textAlign - "left", "right", "center"
	sentence.textAlign = "left";
	
	//lineWidth - wraps the text.
	sentence.lineWidth = 200;
	
	//Space inbetween those line
	//line height
	sentence.lineHeight = 40;
	
	//stroke the outside of the text
	//outline - boolean
	sentence.outline = false;
	
	//combine them into one line
	var sentence2 = new createjs.Text("This is our 2nd text", "bold 30px Times", "blue");
	
	stage.addChild(sentence2);
	stage.addChild(sentence);
	stage.update();
	
	
}