window.onload = function main ()
{
	
	
	
/**	var edge = document.getElementById('boundary1');
	function mouseo(){
		edge.setAttribute("class","youlose boundary");
						};
	
	edge.onmouseover=function(e) {
	        mouseo();
	};**/
	
	var edges = document.querySelectorAll(".boundary");
 	var count=0;
	var end = document.getElementById('end');
 	var start=document.getElementById('start');
  
 	for(var i=0;i< edges.length;i++)
	{
 		edges[i].onmouseover=function()
		{
 			count ++;
 			if(count>0)
			{
 				for (var h=0;h< edges.length;h++)
				{
 				edges[h].setAttribute("class","youlose boundary");
 				}
 			}
 		}
 	}
	
	
end.onmouseover=function()
{
	if (count > 0){alert ("Come on Bruh!!!");}
		else
			{alert ("Congrats!!!");}
		
	
};
start.onclick=function()
{
	for (var h=0; h< edges.length; h++)
	{
		edges[h].setAttribute("class","boundary")
		count=0;
	}
};
	

};