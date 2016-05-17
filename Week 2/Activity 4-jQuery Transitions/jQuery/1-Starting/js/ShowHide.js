$(function() { 
	
		//Add a click function to our button
		$("#hide").click(function(){
				$("#theDiv").hide(2000);
				//alert("Div is now hidden.");
			
			
			});
			
		$("#show").click(function(){
			
				$("#theDiv").show(2000, function(){
					
						$("#theDiv").css("background-color", "red");
					
					});
			
			});	
			
		$("#toggle").click(function(){
				
				$("#theDiv").toggle("slow");
			
			});	

});


