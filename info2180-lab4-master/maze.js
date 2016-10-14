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
	var msg=document.getElementById("status").textContent;
	var checking=0;
	var checkend=0;
  
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
				document.getElementById("status").innerHTML = "Try again ";
 			}
 		}
 	}
	
	
end.onmouseover=function()
{
	checkend++;
	if (count > 0){document.getElementById("status").innerHTML = "Try again ";}
		else
			{document.getElementById("status").innerHTML = "Congratulations, click S to start over ";}
		
	
};
start.onclick=function()
{
	for (var h=0; h< edges.length; h++)
	{
		edges[h].setAttribute("class","boundary")
		count=0;
		checking=2;
		checkend=1;
	}
	document.getElementById("status").innerHTML = msg;
};

start.onmouseover=function()
{
	checking ++;
	
};



document.body.onmouseover=function(num)
{
	var MainDiv=document.getElementById("maze");
	var left=MainDiv.offsetLeft;
	var right=MainDiv.offsetRight;
	var moY=num.clientY;
	var moX=num.clientX;
	
	if (moX < left && checking>1 )
	{
		for (var h=0;h< edges.length;h++)
				{
 				edges[h].setAttribute("class","youlose boundary");
 				}
		document.getElementById("status").innerHTML = "Loser, please click S to continue";
		}
	

				
}


	

};