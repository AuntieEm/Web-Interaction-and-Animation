window.onload = function() {
		
		//Canvas & stage
		var canvas = document.getElementById("canvas");
		
		var stage = new createjs.Stage(canvas);
		
		var bmp = new createjs.Bitmap();
		//center of the canvas
		var centerX = canvas.width/2;
		var centerY = canvas.height/2;
		
		//get the image
		var img = new Image();
		img.src = "images/ship.svg";
		img.onload = updateStage;
		
		function updateStage(e){
			bmp = new createjs.Bitmap(e.target);
			//set our images x & y
			bmp.x = centerX;
			bmp.y = centerY;
			//change reg points
			bmp.regX = 50;
			bmp.regY = 50;
			
			//scale it up
			//bmp.scaleX = 4;
			//bmp.scaleY = 4;
			
			stage.addChild(bmp);
			
			//stage.update();
			
		}
			//add event listener for our "tick"
			createjs.Ticker.addEventListener("tick",ticker);
			
		function ticker(){
			//anyting in here will run default of 20fps
			//bmp.rotation +=2;
			//bmp.x +=2;
			
			//shake the ship
			
			//bmp.x = centerX + Math.random() * 5;
			//bmp.y = centerY + Math.random() * 5;
			
			//shake in both directions
			//bmp.x = centerX + (Math.random() -.5)*50;
			//bmp.y = centerY + (Math.random() -.5)*50;
			
			//ship will go in a wave motion
			//sin and cos
			
			//bmp.x = centerX + Math.sin(3);
			
			// getTicks() - that returns the current of ticks
			//the divided number controls the speed and * numer is the distance away from the center point.
			//bmp.x = centerX + Math.sin(createjs.Ticker.getTicks()/20)*50;
			//bmp.y = centerY + Math.sin(createjs.Ticker.getTicks()/2)*50;
			
			//circle path
			bmp.x = centerX + Math.sin(createjs.Ticker.getTicks()/7)*200;
			bmp.y = centerY + Math.cos(createjs.Ticker.getTicks()/7)*20;
			
			stage.update();
			
			}
				
	
				
				
		
			
}