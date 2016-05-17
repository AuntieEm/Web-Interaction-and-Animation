window.onload = function() {
	
	//First we canvas and stage
	
	var canvas = document.getElementById("canvas1");
	var stage = new createjs.Stage(canvas);
	
	//create a shape
	var shape = new createjs.Shape();
	
	//beginStroke() give it a color
	shape.graphics.beginStroke("red");
	
	//set stroke styles
	//takes 1-4 values as arguments
	//line width in px
	shape.graphics.setStrokeStyle(10);
	
	//setStrokeStyle(thickness, caps, joints, miter)
	//caps - 0 - butt, 1-round, 2-square
	//joints 0-miter, 1-round, 2-bevel
	//miter is a #
	shape.graphics.setStrokeStyle(10, "round", 0, 1);
	
	//starting point
	//moveTo();
	shape.graphics.moveTo(25,25);
	
	//draw a straight line
	shape.graphics.lineTo(250,25);
	
	//move to 50,50 and then a quad curve
	shape.graphics.beginStroke("orange");
	shape.graphics.moveTo(50,50);
	
	//quad curve	quadraticCurveTo(cpx, cpy, x, y);
	shape.graphics.quadraticCurveTo(50, 175, 250,250);
	
	//arc to - arcTo(x1, y1, x2, y2, radius)
	shape.graphics.beginStroke("yellow");
	shape.graphics.arcTo(100, 50, 100, 200, 60);
	
	//bezier curve
	//bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
	shape.graphics.beginStroke("green");
	shape.graphics.bezierCurveTo(100,50,100,200,250,250);
	shape.graphics.lineTo(50,250);
	
	//close path
	//.closePath();
	shape.graphics.closePath();
	
	
	
	//add to stage's display list
	stage.addChild(shape);
	stage.update();
	
	
}