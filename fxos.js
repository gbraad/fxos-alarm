
// called just before sensible.Application.start()
sensible.fxos.Application.prototype.onBeforeStart = function (inCallback)
{
	console.log ("fxos.Application.onBeforeStart()");
	
	inCallback ();
};


// called just after sensible.Application.start()
sensible.fxos.Application.prototype.onAfterStart = function (inCallback)
{
	console.log ("fxos.Application.onAfterStart()");
	
  document.querySelector("#open-door").addEventListener("click", function() {
    
		console.log ("CLICK");
		
    if (document.querySelector("#open-door").classList.contains("ringing"))
    {
      
      document.querySelector("#alarm-status").style.backgroundColor = "#000";
  
      document.querySelector("#alarm-sound").pause();
      
      document.querySelector("#open-door").classList.remove("ringing");
      
      document.querySelector("#open-door").innerHTML = "tap to open door...";
      
    }
    else 
    {
      
      document.querySelector("#alarm-status").style.backgroundColor = "#F00";
  
      document.querySelector("#alarm-sound").play();
      
      document.querySelector("#open-door").classList.add("ringing");
      
      document.querySelector("#open-door").innerHTML = "alarm is ringing!";
      
    }
    
  });
	

};



sensible.fxos.Application.prototype.submit_code = function (inRequest, inCallback)
{
  
	var	response = new Object ();
	var	url = inRequest.parameters.url;

			
  response.type = "json";
  response.object = { status: 'ok' };
		
  
  // TBD - OBVIOUSLY: match code, encrypt, etc.

  document.querySelector("#alarm-status").style.backgroundColor = "#0F0";
  document.querySelector("#alarm-sound").pause();
  
  document.querySelector("#open-door").innerHTML = "alarm silenced. tap to set it off again...";

	inCallback (response);
  
};

sensible.fxos.Application.prototype.open_door = function (inRequest, inCallback)
{
	var	response = new Object ();
	var	url = inRequest.parameters.url;

			
  response.type = "json";
  response.object = { status: 'ok' };
		
  
  // TBD - OBVIOUSLY: match code, encrypt, etc.
  
  document.querySelector("#alarm-status").style.backgroundColor = "#F00";
  
  document.querySelector("#alarm-sound").play();
  
  document.querySelector("#open-door").innerHTML = "alarm is ringing!";

	inCallback (response);
};



document.addEventListener ('DOMContentLoaded', function() {
	
	sensibleStartup ();
  	
}, false);




function sensibleStartup () 
{
  
  console.log ("WiFi appears to be up, starting sensible")

	if (typeof sensible == "object")
	{
		sensible.ApplicationFactory.createApplication
		(
			function (inError)
			{
				if (inError)
				{
					console.error ("error during sensible application startup");
					console.error (inError);
				}
				else
				{
					console.log ("sensible application startup");
				}
			}
		);
	}
  
}