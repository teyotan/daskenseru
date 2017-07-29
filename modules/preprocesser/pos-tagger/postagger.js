var eachOf = require("async/eachOf");
var postagEngine = require("./lib/postagEngine.js");

var postagger = function(arr){
	
	postagEngine("Halo");
	return arr;
}

module.exports = postagger;