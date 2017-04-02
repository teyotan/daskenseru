var eachOfSeries = require("async/eachOfSeries");
	
var splitToWord = function(str){
	var arrTemp = str.split("");
	console.log(arrTemp)
	var arr = [];
	var word = "";
	var newP = true;

	var wordToArray = function(word){
		if (word != "") {
			if (newP){
				arr.push([])
				newP = false;
			}
			
			arr[arr.length-1].push(word);

			if (word == "."){
				arr[arr.length-1].push("End Of Sentence")
			}	
		}
	}

	eachOfSeries(arrTemp, function (value, key, callback){
		try {
			if (value.match(/^([A-Z]|[a-z]|[0-9])/)){
				word += value;
			} else if (value.match(" ")){
				wordToArray(word)
				word = ""
			} else if (value == "\"" || value == "'" || value == "(" || value == ")"){
				wordToArray(word)
				wordToArray(value)
				word = ""
			} else if (value == "\r"){
				wordToArray(word)
				word = ""
			} else if (value == "\n"){
				newP = true
				wordToArray("")
			} else if (arrTemp[key+1] != " "){
				if (arrTemp[key+1] == "\r" || arrTemp[key+1] == undefined || arrTemp[key+1] == "\""){
					wordToArray(word)
					word = value
				} else {
					word += value
				}
			} else {
				wordToArray(word)
				word = value
			}
        } catch (err) {
            return callback(err)
        }
		callback();
	}, function(err){
		wordToArray(word)
		console.log("Parser Done")
		if(err){
			console.log(err)
		}
	});

	return arr;
}

exports.splitToWord = splitToWord;

var splitToWordOld = function(str){
	var arrTemp = str.split("");
	var arr = [];
	var word = "";
	var i = 0;
	
	arrTemp.forEach(function(element){
		if (element.match(" ")){
			if (word !== ""){
				arr[i] = word;
				i++;
			}
			word = "";
		}
		else{
			if (element.match(/^([A-Z]|[a-z]|[0-9])/)){ // Karakter Latin
				word += element;
			}
			else{ // Tanda Baca
				if (word.match(/([0-9])$/) && element == "."){
					if (!word.match(/^([0-9]){4}$/)){
						word += element;
<<<<<<< HEAD
					}
					else{
=======
					} else {
>>>>>>> 8e0f9ebdc667670bf78338d35ccc4c04ab70820e
						arr[i] = word;
						i++;
						word = element;
					}
				} else if(word.match(/([,])$/) && element == "-"){
					word += element;
				} else if(word.match(/^([^0-9])/) && word.match(/([0-9]$)/) && element == ","){
					word += element;
				} else{
					arr[i] = word;
					i++;
					word = element;
				}
				
			}
		}
	});
	
	arr[i] = word;
	
	return arr;
}