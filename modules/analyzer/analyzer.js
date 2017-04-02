var isLocation = require("./lib/locations.js").isLocation;
var tagLocation = require("./lib/locations.js").tagLocation;

var isOrganization = require("./lib/organizations.js").isOrganization;
var tagOrganization = require("./lib/organizations.js").tagOrganization;

var isPerson = require("./lib/persons.js").isPerson;
var tagPerson = require("./lib/persons.js").tagPerson;

var isTime = require("./lib/times.js").isTime;
var tagTime = require("./lib/times.js").tagTime;

var isCurrency = require("./lib/currencies.js").isCurrency;
var tagCurrency = require("./lib/currencies.js").tagCurrency;

var isCommon = require("./lib/commonwords.js").isCommon;

exports.analyze = function(arr){
	arr[-1] = {"word": ".", "tag": "O"};
	
	arr.forEach(function(element, index, array){
		array[index] = {"word": element, "tag": "O"};
		
		/* Pemisahan kandidat entity dan others */
		if(array[index-1].word == "." && array[index-1].tag == "O"){
			if(!isCommon(array, index)){
				array[index].tag = "NE";
			}
		}
		else if(array[index].word.match(/^[A-Z]/)){
			array[index].tag = "NE";
		}
		else if (array[index].word.match(/[0-9]$/)){
			array[index].tag = "NE";
		}
		else if((array[index].word == ".") && (array[index-1].tag != "O")){
			array[index].tag = "NE";
		}

		/* Tagging terhadap kandidat entity */
		if (array[index].tag == "NE"){
			if(isLocation(array, index)){
				tagLocation(array, index);
			} else if(isOrganization(array, index)){
				tagOrganization(array, index);
			} else if(isCurrency(array, index)){
				array[index] = tagCurrency(array, index);
			} else if(isTime(array, index)){
				array[index] = tagTime(array, index);
			} else if(isPerson(array, index)){
				tagPerson(array, index);
			}
			else{
				array[index].tag = "O";
			}
		}
	});
	
	return arr;
};



