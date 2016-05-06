/*
     Name: Emily Davis
     Date: 05/05/2016
     Class & Section:  WIA-1605
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// - DONE - Setup up 7 different Canvases in index.html one for each problem.
// - DONE - Link Modernizr.js
// - DONE - Link the main.js file
// - DONE - Setup the call to that canvas and get it's 2d context
// - DONE - Use Modernizr to verify that your browser supports canvas, include a fallback message
*/

window.onload = function(){
	"use strict";
	
/*******************************************
PART 1

- DONE - Draw a rectangle starting at point (0 ,0)
- DONE - That has a width of 50 px and a heigh of 100px
- DONE - Set the color of the rectangle to a shade of blue.
- DONE - Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here

var theCanvas1 = document.getElementById("Canvas1");

if(theCanvas1 && theCanvas1.getContext){
	var ctx1 = theCanvas1.getContext("2d");
	if(ctx1){
		ctx1.strokeStyle = "black";
		ctx1.fillStyle = "blue";
		ctx1.lineWidth = 10;
		ctx1.strokeRect(0,0,50,100);
		ctx1.fillRect(0,0,50,100);
		
		}//closes if ctx1
	
	}//closes if part 1

/*******************************************
PART 2

- DONE - Draw a circle starting at point (50 ,50)
- DONE - That has a radius of 20 px 
- DONE - Set the color of the circle to a shade of red and set the alpha to .5
- DONE - Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here

var theCanvas2 = document.getElementById("Canvas2");

if(theCanvas2 && theCanvas2.getContext){
	var ctx2 = theCanvas2.getContext("2d");
	if(ctx2){
		ctx2.strokeStyle = "black";
		ctx2.fillStyle = "rgba(237,28,26,.5)";
		ctx2.lineWidth = 10;
		var degrees = 360;
		var radians = (degrees/180)*Math.PI;
		ctx2.beginPath();
		ctx2.arc(50,50,  20,0, radians);
		ctx2.fill();
		ctx2.stroke();
		
		}//closes if ctx2
	
	}//closes if part 2



/*******************************************
PART 3

- DONE - Practice using Path drawing.
- DONE - Create a 5-point star shaped pattern using the lineTo method.
- DONE - Begin this shape at (100, 100)

- DONE - Height and width and color are up to you.

********************************************/


//Draw Star here

var theCanvas3 = document.getElementById("Canvas3");

if(theCanvas3 && theCanvas3.getContext){
	var ctx3 = theCanvas3.getContext("2d");
	if(ctx3){
		
		ctx3.lineWidth = 10;
		ctx3.strokeStyle = "black";
		ctx3.fillStyle = "red";
		ctx3.lineJoin = "round";
		ctx3.beginPath();
		ctx3.moveTo(100,100);
		ctx3.lineTo(150,0);
		ctx3.lineTo(200,100);
		ctx3.lineTo(300,110);
		ctx3.lineTo(200,175);
		ctx3.lineTo(250,300);
		ctx3.lineTo(150,225);
		ctx3.lineTo(75,300);
		ctx3.lineTo(100,175);
		ctx3.lineTo(0,150);
		ctx3.closePath();
		ctx3.fill();
		ctx3.stroke();
		
		
		
		}//closes if ctx3
	
	}//closes if part 3


/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here

var theCanvas4 = document.getElementById("Canvas4");

if(theCanvas4 && theCanvas4.getContext){
	var ctx4 = theCanvas2.getContext("2d");
	if(ctx4){
		
		
		}//closes if ctx4
	
	}//closes if part 4

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here

var theCanvas5 = document.getElementById("Canvas5");

if(theCanvas5 && theCanvas5.getContext){
	var ctx5 = theCanvas5.getContext("2d");
	if(ctx5){
		
		
		}//closes if ctx5
	
	}//closes if part 5

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here

var theCanvas6 = document.getElementById("Canvas6");

if(theCanvas6 && theCanvas6.getContext){
	var ctx6 = theCanvas6.getContext("2d");
	if(ctx6){
		
		
		}//closes if ctx6
	
	}//closes if part 6



/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here

var theCanvas7 = document.getElementById("Canvas7");

if(theCanvas7 && theCanvas7.getContext){
	var ctx7 = theCanvas7.getContext("2d");
	if(ctx7){
		
		
		}//closes if ctx7
	
	}//closes if part 7



};//closes onload function

