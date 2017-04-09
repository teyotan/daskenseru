var x = 1;

var func = function(){
	x = x+1
	console.log(x)
}

exports.get = func;