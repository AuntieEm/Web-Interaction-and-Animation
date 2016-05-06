window.onload = function() {
	"use strict";
	
	var theCanvas = document.getElementById("Canvas1");
				//theCanvas.width = 150;  //video 1
				//theCanvas.height = 150;	//video 1
				
				//------------------------------------------------------------First Canvas Example
				if(theCanvas){
					//get context
					var ctx = theCanvas.getContext("2d");
					
					if(ctx){
							
							//Draw Here
							
							//Draw a stroked Rectangle
							ctx.strokeStyle = "blue";
							ctx.lineWidth =5;
							
							//Draw the rectangle
							//strokeRect(posX, posY, Width, Height)
							ctx.strokeRect(25,25, 100, 125);
						
							//Filled Rect
							
							//Set the fill style
							ctx.fillStyle = "green";
							
							ctx.fillRect(150, 25, 100, 125);
							
							//Draw a filled and stroked Rectangle
							
							ctx.strokeStyle = "red";
							ctx.fillStyle = "yellow";
							ctx.lineWidth = 10;
							
							//Draw the Rectangle
							ctx.strokeRect(275,25, 100, 125);
							ctx.fillRect(275,25,100,125);
							
							//Clearing a rectangle
							ctx.clearRect(15, 75, 450, 50);
						
						}
				
					
					}//closes if theCanvas1
					
					
					
				//------------------------------------------------------------ Drawing Lines In Canvas
				var theCanvas2 = document.getElementById('Canvas2');
				if (theCanvas2 && theCanvas2.getContext) {
					var ctx2 = theCanvas2.getContext("2d");
					if (ctx2) {
						
						//gradient line widths
						for(var i=0; i<10; i++){
							ctx2.beginPath();
							ctx2.lineWidth = 1+i;
							ctx2.moveTo(25, 25+i*15);
							ctx2.lineTo(475, 25+i*15);
							ctx2.stroke();
						}//closes for (var i=0...
					}//closes for (ctx2)
				}//close if (theCanvas2 && theCanvas2.getContext)
				
				var theCanvas3 = document.getElementById("Canvas3");
				if(theCanvas3 && theCanvas3.getContext){
					var ctx3 = theCanvas3.getContext("2d");
					
					if(ctx3){
						//draw guidelines
						ctx3.strokeStyle = "cyan";
						ctx3.lineWidth = 1;
						
						ctx3.beginPath();
						ctx3.moveTo(50,25);
						ctx3.lineTo(50,175);
						ctx3.moveTo(450, 25);
						ctx3.lineTo(450, 175);
						ctx3.stroke();
						
						//draw line using  each type of line cap
						ctx3.lineWidth = 25;
						ctx3.strokeStyle = "black";
						ctx3.lineCap = "butt";
						ctx3.beginPath();
						ctx3.moveTo(50,50);
						ctx3.lineTo(450,50);
						ctx3.stroke();
						
						
						ctx3.lineWidth = 25;
						ctx3.strokeStyle = "black";
						ctx3.lineCap = "round";
						ctx3.beginPath();
						ctx3.moveTo(50,100);
						ctx3.lineTo(450,100);
						ctx3.stroke();
						
						
						ctx3.lineCap = "square";
						ctx3.beginPath();
						ctx3.moveTo(50,150);
						ctx3.lineTo(450,150);
						ctx3.stroke();
						
						
						}//closes ctx3
					
					}//closes if(theCanvas3 && the Canvas3.getContext)
					
					var theCanvas4 = document.getElementById("Canvas4");
				if(theCanvas4 && theCanvas4.getContext){
					var ctx4 = theCanvas4.getContext("2d");
					
					if(ctx4){
							ctx4.lineWidth = 15;
							ctx4.strokeStyle = "black";
							
							ctx4.lineJoin = "round";
							
							ctx4.beginPath();
							ctx4.moveTo(25,150);
							ctx4.lineTo(75, 50);
							ctx4.lineTo(125,150);
							ctx4.stroke();
							
							
							
							ctx4.lineJoin = "bevel";
							
							ctx4.beginPath();
							ctx4.moveTo(175,150);
							ctx4.lineTo(225, 50);
							ctx4.lineTo(275,150);
							ctx4.stroke();
							
							
							ctx4.lineJoin = "miter";
							ctx4.miterLimit = 10;
							
							ctx4.beginPath();
							ctx4.moveTo(325,150);
							ctx4.lineTo(375, 50);
							ctx4.lineTo(425,150);
							ctx4.stroke();
							
							}//closes if(ctx4)
						
						}//closes if (theCanvas4 && theCanvas4.getContext)
						
						
						
				//------------------------------------------------------------ 	Saving and Restoring the Canvas State	
				var theCanvas5 = document.getElementById('Canvas5');
				if (theCanvas5 && theCanvas5.getContext) {
					var ctx5 = theCanvas5.getContext("2d");
					if (ctx5) {
						
						//Setup some basic drawing info
						ctx5.strokeStyle = "red";
						ctx5.fillStyle = "yellow";
						ctx5.lineWidth= 10;
						
						//Draw A rectangle
						
						ctx5.fillRect(25,25,100, 125);
						ctx5.strokeRect(25,25,100,125);
						
						//Save our settings or State
						ctx5.save();
						
						// Draw another rectangle with different settings
						ctx5.strokeStyle= "green";
						ctx5.fillStyle = "blue";
						ctx5.lineWidth= 5;
						
						ctx5.fillRect(175,25,100, 125);
						ctx5.strokeRect(175, 25, 100, 125);
						
						//restore our drawing state
						ctx5.restore();
						
						//Draw a 3rd Rectangle
						ctx5.fillRect(325,25,100,125);
						ctx5.strokeRect(325,25,100,125);
						
						
					}//closes if (ctx5)
				}//closes if (theCanvas5 && theCanvas5.getContext)
				
				
				
				//------------------------------------------------------------ Drawing Paths
				var theCanvas6 = document.getElementById('Canvas6');
				if (theCanvas6 && theCanvas6.getContext) {
					var ctx6 = theCanvas6.getContext("2d");
					if (ctx6) {
						
						ctx6.strokeStyle = "blue";
						ctx6.fillStyle = "red";
						ctx6.lineWidth = 5;
						
						//draw an open path;
						ctx6.beginPath();
						ctx6.moveTo(25,175);
						ctx6.lineTo(50,25);
						ctx6.lineTo(125,50);
						ctx6.lineTo(175,175);
						//ctx6.lineTo(25,175); //dont use this to finish path
						//ctx6.closePath();	//USE THIS ONE
						ctx6.fill();
						ctx6.stroke();
						
						
					}//closes if (ctx6)
				}//closes if (theCanvas6 && theCanvas6.getContext)
				
				
				
				//------------------------------------------------------------ Drawing Arcs
				var theCanvas7 = document.getElementById('Canvas7');
				if (theCanvas7 && theCanvas7.getContext) {
					var ctx7 = theCanvas7.getContext("2d");
					if (ctx7) {
						ctx7.strokeStyle = "blue";
						ctx7.fillStyle = "red";
						ctx7.lineWidth = 5;
						
						//Stroke a quarter Arc
						ctx7.beginPath();
						//arc(x,y,  radius, startingAngle, endingAngle, clockwise or counter);
						ctx7.arc(50,150,100, 1.5 * Math.PI , 2 * Math.PI);
						ctx7.stroke();
						
						//stroke a 3/4 arc
						ctx7.beginPath();
						ctx7.arc(300,150,100,  0, 1.5 * Math.PI, false); //true = 1/4 arc
						ctx7.stroke();
						
						//full circle
						var degrees = 360; //180 = open half circle no closing stroke but it will have a fill
						//converts degrees to radians for us
						var radians = (degrees/180)*Math.PI; 
						ctx7.beginPath();
						ctx7.arc(550,150,100,0, radians);
						ctx7.fill();
						ctx7.stroke();

												
						
					}//closes if (ctx7)
				}//closes if (theCanvas7 && theCanvas7.getContext)
	
				////------------------------------------------------------------ Drawing Bezier and Quadratic Curves
				var theCanvas8 = document.getElementById('Canvas8');
				if (theCanvas8 && theCanvas8.getContext) {
					var ctx8 = theCanvas8.getContext("2d");
					if (ctx8) {
							ctx8.strokeStyle ="blue";
							ctx8.lineWidth = 5;
							
							//stroke a simple bezier curve
							ctx8.beginPath();
							ctx8.moveTo(50,200);
							
							//bezierCurveTo(cx1, cy1, cx2, cy2, x, y)
							
							ctx8.bezierCurveTo(50,100, 200,300, 200,150);
							ctx8.stroke();
							
							//quadratic curve
							ctx8.beginPath();
							ctx8.moveTo(400,200);
							
							//quadraticCurveTo(cx,cy, x,y);
							
							ctx8.quadraticCurveTo(500,100, 600,150);
							ctx8.stroke();
									
									
					}//closes if (ctx8)
				}//closes if (theCanvas8 && theCanvas8.getContext)
				
				
				
				////------------------------------------------------------------ Drawing Text
				var theCanvas9 = document.getElementById('Canvas9');
				if (theCanvas9 && theCanvas9.getContext) {
				var ctx9 = theCanvas9.getContext("2d");
				if (ctx9) {
						
						
						var theString = "Drawing text on a canvas";
						
						//cimple text using defaults
						ctx9.fillText(theString, 20,20);
						
						//style the font
						ctx9.font = "25pt Georgia";
						ctx9.fillStyle = "blue";
						ctx9.fillText(theString, 20,60);
						
						//stroke and filled text
						ctx9.font = "32pt Verdana";
						ctx9.fillStyle = "yellow";
						ctx9.textBaseline = "middle";
						ctx9.strokeStyle = "rgba(0,255,0,.5)";
						ctx9.fillText(theString, 20, 160);
						ctx9.strokeText(theString, 20, 160);
						
						
									
					}//closes if (ctx9)
				}//closes  if (theCanvas9 && theCanvas9.getContext)
				
				
				
				////------------------------------------------------------------ Drawing Shadows
				var theCanvas10 = document.getElementById('Canvas10');
				if (theCanvas10 && theCanvas10.getContext) {
					var ctx10 = theCanvas10.getContext("2d");
					if (ctx10) {
						
						ctx10.save();
						var origShadowColor = ctx10.shadowColor; //set shadow to invisible
						//setup our shadow
						ctx10.shadowColor = "#000000";
						ctx10.shadowOffsetX = 10;
						ctx10.shadowOffsetY = 10;
						ctx10.shadowBlur = 10;
						
						
						//draw a simple rectangle
						ctx10.fillStyle = "blue";
						ctx10.fillRect(20,20,200,100);
						
						//Draw text with a shadow
						ctx10.fillStyle = "green";
						ctx10.shadowColor = "rgba(0,100,100,.5)";
						ctx10.shadowOffsetX = 5;
						ctx10.shadowOffsetY = 5;
						ctx10.shadowBlur = 5;
						
						ctx10.font = "25pt Georgia";
						ctx10.fillText("Drawing Text on a canvas!", 250,75);
						
						//draw a red line with a purple shadow
						ctx10.lineCap = "round";
						ctx10.lineWidth = 25;
						ctx10.shadowColor = "rgba(150,0,150,.75)";
						ctx10.shadowOffsetX = -15;
						ctx10.shadowOffsetY = -15;
						ctx10.shadowBlur = 15;
						
						ctx10.strokeStyle = "red";
						ctx10.beginPath();
						ctx10.moveTo(50,200);
						ctx10.lineTo(450,200);
						ctx10.stroke();
						
						//rectangle with no shadow
						//without changing anything it will use the settings previously mentoined.
						
					
						//ctx10.shadowColor = origShadowColor;
						ctx10.restore();
						
						ctx10.fillStyle = "blue";
						ctx10.fillRect(20,225,200,50);
									
						}//closes if (ctx10)
				}//closes if (theCanvas10 && theCanvas10.getContext)
				
				
				
				
				////------------------------------------------------------------ Patterns
				var theCanvas11 = document.getElementById('Canvas11');
				if (theCanvas11 && theCanvas11.getContext) {
					var ctx11 = theCanvas11.getContext("2d");
					if (ctx11) {
					/*
						//Create a pattern from an image.
						var patImg = new Image();
						
						//Once the image loads, then we can actually use it
						patImg.onload = function(){
							
							ctx11.fillStyle = ctx11.createPattern(patImg, "repeat"); //repeat-x & repeat-y & no-repeat
							ctx11.fillRect(0,0, ctx11.canvas.width, ctx11.canvas.height);
							
							};//closes patImg.onload
							
							patImg.src = "images/flowers.jpg";
						*/
							
							//Creat a pattern from another canvas
							var patCanvas = document.getElementById("patCan");
							var patCtx = patCanvas.getContext("2d");
							
							//draw a red line in our pattern canvas
							
							patCtx.strokeStyle = "red";
							patCtx.lineWidth = 1;
							patCtx.beginPath();
							patCtx.moveTo(0,0);
							patCtx.lineTo(25,25);
							patCtx.stroke();
							
							//use pattern canvas as an outline on our larger canvas
							var strokePat = ctx11.createPattern(patCanvas, "repeat");
							ctx11.strokeStyle = strokePat;
							ctx11.lineWidth = 25;
							ctx11.strokeRect(50,50,200,200);
								
										
						}//closes if (ctx11)
				}//closes if (theCanvas11 && theCanvas11.getContext)
				
				
				
				
				
				////------------------------------------------------------------ Gradients
				var theCanvas12 = document.getElementById('Canvas12');
				if (theCanvas12 && theCanvas12.getContext) {
					var ctx12 = theCanvas12.getContext("2d");
					if (ctx12) {
							//create a linear gradient
							//createLinearGradient(x0,y0, x1,y1);
							
							var linGrd = ctx12.createLinearGradient(20,20,220,280); //diagonal
							//var linGrd = ctx12.createLinearGradient(20,20,20,280); //horizontal
							//var linGrd = ctx12.createLinearGradient(20,20,220,20); //vertical
							
							//add color stops
							linGrd.addColorStop(0,"#f00");
							linGrd.addColorStop(.5, "#00f");
							linGrd.addColorStop(1, "#0f0");
							
							//create a rectangle
							ctx12.fillStyle = linGrd;
							ctx12.fillRect(20,20,200,280);
							
							
							//create a radial gradient
							//createRadialGradient(x0,y0,r0, x1,y1,r1)
							var radGrad = ctx12.createRadialGradient(525, 100, 20, 525, 150, 100); //change any number to offset it
		
							//Add color stops
							radGrad.addColorStop(0, "#f00");
							radGrad.addColorStop(.5, "#00f");
							radGrad.addColorStop(1, "#0f0");
							
							
							ctx12.fillStyle = radGrad;
							
							ctx12.beginPath();
							ctx12.arc(525, 150, 100, 0, 2*Math.PI);
							ctx12.fill();
													
										
						}//closes if (ctx12)
				}//closes if (theCanvas12 && theCanvas12.getContext)
				
				
				
				
				
				////------------------------------------------------------------ Images
				var theCanvas13 = document.getElementById('Canvas13');
				if (theCanvas13 && theCanvas13.getContext) {
					var ctx13 = theCanvas13.getContext("2d");
					if (ctx13) {
					
						//create a variable to hold our image
						var srcImg = document.getElementById("img1");
						
						//Draw an image
						ctx13.drawImage(srcImg, 0,0);
						 
						//drawa a scaled down image
						//drawImage(srcImg, dx, dy, dw, dh);
						//ctx13.drawImage(srcImg, 50,50,240,300);
						
						//Draw a slice image
						//drawImage(srcImg, sx, sy, sw, sh, dx, dy, dw, dh);
						//ctx13.drawImage(srcImg, 285,40, 95,140, 50,50, 190,280);
						
						//create a variable that holds a video
						//var srcVid = document.getElementById("vid1");
						//srcVid.play();
						
						//set interval(funciton, Time-ms);		
						//setInterval(function(){
							//ctx13.drawImage(srcVid, 0,0, 480,270);
							
							//}, 30);
										
						}//closes if (ctx13)
				}//closes if (theCanvas13 && theCanvas13.getContext)
				
				
				
				
				////------------------------------------------------------------ Clipping Path
				var theCanvas14 = document.getElementById('Canvas14');
				if (theCanvas14 && theCanvas14.getContext) {
					var ctx14 = theCanvas14.getContext("2d");
					if (ctx14) {
						
						//draw the image
						var srcImg = document.getElementById("img2");
						//ctx14.drawImage(srcImg, 0,0);
						
						//create a circle clipping path
						/*
						ctx14.beginPath();
						ctx14.arc(ctx14.canvas.width/2, ctx14.canvas.height/2, 150, 0, 2*Math.PI);
						ctx14.clip();
						
						ctx14.drawImage(srcImg, 0,0);
						*/
						
						//create a path shape clipping msk
						ctx14.beginPath();
						ctx14.moveTo(105,200);
						ctx14.lineTo(250,40);
						ctx14.lineTo(525,50);
						ctx14.lineTo(475,285);
						ctx14.closePath();
						
						ctx14.clip();
						
						ctx14.drawImage(srcImg, 0,0);
								
										
						}//closes if (ctx14)
				}//closes if (theCanvas14 && theCanvas14.getContext)
				
				
				
				
				////------------------------------------------------------------ Clipping2
				var theCanvas15 = document.getElementById('Canvas15');
				if (theCanvas15 && theCanvas15.getContext) {
					var ctx15 = theCanvas15.getContext("2d");
					if (ctx15) {
						
						//create variables for our x, y, radius and offset
						var x = theCanvas15.width/2;
						var y = theCanvas15.height/2;
						var radius = 75;
						var offset = 50;
						
						ctx15.save();
						
						ctx15.beginPath();
						ctx15.arc(x, y, radius, 0, 2*Math.PI, false);
						ctx15.clip();
						
						//Draw a blue circle inside the clipping mask
						ctx15.beginPath();
						ctx15.arc(x-offset, y-offset, radius, 0, 2*Math.PI, false);
						ctx15.fillStyle = "blue";
						ctx15.fill();
						
						//Draw a YELLOW circle inside the clipping mask
						ctx15.beginPath();
						ctx15.arc(x+offset, y, radius, 0, 2*Math.PI, false);
						ctx15.fillStyle = "yellow";
						ctx15.fill();
						
						//Draw a red circle inside the clipping mask
						ctx15.beginPath();
						ctx15.arc(x, y+offset, radius, 0, 2*Math.PI, false);
						ctx15.fillStyle = "red";
						ctx15.fill();
						
						ctx15.restore();
						
						//stroke the circle
						ctx15.beginPath();
						ctx15.arc(x,y,radius, 0, 2*Math.PI, false);
						ctx15.lineWidth = 10;
						ctx15.strokeStyle = "blue";
						ctx15.stroke();
						
								
										
						}//closes if (ctx15)
				}//closes if (theCanvas15 && theCanvas15.getContext)
				
				
				
				
				
				////------------------------------------------------------------ translate
				var theCanvas16 = document.getElementById('Canvas16');
				if (theCanvas16 && theCanvas16.getContext) {
					var ctx16 = theCanvas16.getContext("2d");
					if (ctx16) {
							
							ctx16.save();
							ctx16.fillStyle = "blue";
							ctx16.fillRect(0,0,100,50);
							
							//translate the origin to the middle of the canvas
							ctx16.translate(ctx16.canvas.width/2, ctx16.canvas.height/2);
							
							ctx16.fillRect(-50,-25,100,50);
							ctx16.restore();
							//ctx16.translate(ctx16.canvas.width/2, ctx16.canvas.height/2);
							ctx16.fillStyle = "red";
							ctx16.fillRect(0,0,100,50);
								
										
						}//closes if (ctx16)
				}//closes if (theCanvas16 && theCanvas16.getContext)
				
				
				
				
				
				////------------------------------------------------------------ scale
				var theCanvas17 = document.getElementById('Canvas17');
				if (theCanvas17 && theCanvas17.getContext) {
					var ctx17 = theCanvas17.getContext("2d");
					if (ctx17) {
						
						ctx17.save();
						ctx17.fillStyle = "blue";
						ctx17.fillRect(0,0,100,50);
						
						//scale transform
						ctx17.scale(1.5, 2); //these effect the width and height and the x & y elements
						ctx17.fillRect(0,50,100,50);
						
						ctx17.restore();
						//create a 3rd rectangle
						ctx17.fillStyle = "purple";
						ctx17.scale(.5,.5);
						ctx17.fillRect(0,100,100,50);
								
										
						}//closes if (ctx17)
				}//closes if (theCanvas17 && theCanvas17.getContext)
				
				
				
				
				////------------------------------------------------------------ rotate
				var theCanvas18 = document.getElementById('Canvas18');
				if (theCanvas18 && theCanvas18.getContext) {
					var ctx18 = theCanvas18.getContext("2d");
					if (ctx18) {
						/*
						ctx18.fillStyle = "blue";
						ctx18.fillRect(150,50,100,50);
						
						ctx18.translate(200, 75);
						ctx18.rotate(.5);
						ctx18.fillStyle = "red";
						ctx18.fillRect(-50,-25,100,50);
						*/
						var radians = (Math.PI/180)*20;
						ctx18.translate(ctx18.canvas.width/2, ctx18.canvas.height/2);
						
						
						for(var degrees = 0; degrees<360; degrees+=20){
						ctx18.beginPath();
						ctx18.moveTo(0,0);
						ctx18.lineTo(100,0);
						ctx18.stroke();
						ctx18.rotate(radians);
						}//closes for var degrees
						
						
						
								
										
						}//closes if (ctx18)
				}//closes if (theCanvas18 && theCanvas18.getContext)
				
				
				
				
				////------------------------------------------------------------ global alpha
				var theCanvas19 = document.getElementById('Canvas19');
				if (theCanvas19 && theCanvas19.getContext) {
					var ctx19 = theCanvas19.getContext("2d");
					if (ctx19) {
						
						ctx19.globalAlpha = 1;
						//default value
						
						// Create an array of rectangles
		
						var rects = [
							{x:20, y:20, width:75, height:75 },
							{x:40, y:50, width:75, height:75 },
							{x:150, y:20, width:75, height:75 },
							{x:170, y:50, width:75, height:75 },
							{x:280, y:20, width:75, height:75 },
							{x:300, y:50, width:75, height:75 },
							{x:410, y:20, width:75, height:75 },
							{x:430, y:50, width:75, height:75 },
						];
						
						for(var i=0; i<rects.length; i+=2){
							ctx19.fillStyle = "blue";
							ctx19.fillRect(rects[i].x, rects[i].y, rects[i].width, rects[i].height);
							
							ctx19.fillStyle = "red";
							ctx19.fillRect(rects[i+1].x, rects[i+1].y, rects[i+1].width, rects[i+1].height);
							
							
							ctx19.globalAlpha -=.3;
							}//closes for loop
										
						}//closes if (ctx19)
				}//closes if (theCanvas19 && theCanvas19.getContext)
				
				
				
				
				////------------------------------------------------------------ compositing
				
				
				
				
				//see separate files
				
				
				
				
				////------------------------------------------------------------ animation
				var theCanvas32 = document.getElementById('Canvas32');
	if (theCanvas32 && theCanvas32.getContext) {
	var ctx32 = theCanvas32.getContext("2d");
	if (ctx32) {
				
				var srcImg= document.getElementById("img3");
				
				var rotation = 0;
				
				var width = 50;
				var height = 50;
				
				ctx32.translate(theCanvas32.width/2, theCanvas32.height/2);
				
				setInterval(function(){
				
				rotation +=8;
				
				ctx32.clearRect(-300, -300, theCanvas32.width, theCanvas32.height);	
					
				ctx32.rotate(rotation * (Math.PI /180));
				ctx32.drawImage(srcImg, -75, -75 );
				
			
				
				}, 1000)
						
						
		}
	}
				
				
				
};