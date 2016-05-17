window.onload = function() {
	
	var canvas = document.getElementById("canvas1");
	var stage = new createjs.Stage(canvas);
	
	//create a graphic shape
	var shape = new createjs.Shape();
	
	//starting commands (normal)
	
	//create a stroke
	shape.graphics.beginStroke("blue");
	shape.graphics.setStrokeStyle(10,"round", "round");
	
	//draw triangle
	shape.graphics.moveTo(50,50);
	shape.graphics.lineTo(250,250);
	shape.graphics.lineTo(50,250);
	shape.graphics.closePath();
	
	//compacted code
	shape.graphics.beginStroke("red").setStrokeStyle(10,"round","round").moveTo(75,50).lineTo(300,300).lineTo(75,300).closePath();
	
	//compact it more by using shortcuts
	shape.graphics.s("purple").ss(10,1,1).mt(100,100).lt(350,350).lt(100,350).cp();
	
	
	stage.addChild(shape);
	stage.update();

}