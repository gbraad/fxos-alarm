
monohm.provide ("Application");

var	Application = function (inCallback)
{
	positron.Application.call (this, inCallback);
};
monohm.inherits (Application, positron.Application);

Application.prototype.start = function ()
{
	positron.Application.prototype.start.call (this);


  console.log ("POSITRON START!");

	
}

Application.prototype.skip = function ()
{
	gSensibleApplication.skip ();
}

