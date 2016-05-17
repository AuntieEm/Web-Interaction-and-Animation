window.onload = function() {

	var canvas = document.getElementById("canvas1");
	var stage = new createjs.Stage(canvas);
	
	//create a shape
	var shape = new createjs.Shape();
	
	//setup our fill
	shape.graphics.beginFill("red");
	
	//draw a rectangle
	shape.graphics.drawRect(50,50,100,100);
	
	//lets rotate
	//shape.rotation = 30;
	
	//move registration point
	shape.regX = 100;	//origin point + width/2
	shape.regY = 100;	//origin point + height/2
	//shape.rotation = 30;
	
	shape.x = 200;
	shape.y = 100;
	
	//start the rect at (0,0,100,100), regX & regY = 50,50
	
	//scaling
	shape.scaleX = .5;
	shape.scaleY = .5;
	
	//alpha 0-1
	shape.alpha = .5;
	
	//visible
	// 0 - not visible
	// 1 - visible
	shape.visible = 1;
	//when not visible - not drawn and not clickable
	
	//skewing
	shape.skewX = 200;
	shape.skewY = 200;
	
	stage.addChild(shape);
	stage.update();


		
	
	
}