hello.sayHello();
goodbye.bye();

// Immediately Invoked Function Expression
// IIFE
//
var names= new Array();
names=["Jhon" ,"abhi", "chythra", "ram", "jackson"];

// for(var j=0;j<names.length;j++)
// {
// 	console.log(names[j]);
// }
// Immediately Invoked Function Expression
// IIFE

 for( var i=0;i<names.length;i++)

{	


 	if(names[i].charAt(0).toLowerCase()==='j')
 	{
 		(function (name) {
  		console.log("good bye " + name);
		})(names[i]);


	}
	else
	{
		(function (name) {
  		console.log(" hello  " + name);
		})(names[i]);


	}
	
 }