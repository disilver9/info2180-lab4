window.onload = function main ()
{
	
	
	
	var edge = document.getElementById('boundary1');
	function mouseo(){
		edge.setAttribute("class","youlose boundary");
						};
	
	edge.onmouseover=function(e) {
	        mouseo();
	};
	

};