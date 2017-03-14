var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser')
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

var commonwords = require('../modules/commonwords').array;

router.use('/', express.static('public'));

router.post('/', function(req, res, next) {
	
	var arr = split2word(req.body.text); // req.body.text.split(/\s/)

	/*arr.forEach(function(element, index, array){
		array[index] = {"word": element, "tag": "O"}
		
		if (array[index].word.match(/^[A-Z]([a-z]|[.]$)/)){
			if(array[index-1] != undefined){
				if(array[(index-1)].word.match(/[.]$/)){
					array[index].tag = "START";
				} else {
					array[index].tag = "NE";
				}
			} else {
				array[index].tag = "START";
			}
		}
	})*/;
	
	res.send(
		 arr.filter(function(value){
		 	return value;//.tag != "O";
		 }).map(function(value){
		 	return value;
		 })
		//commonwords
	);
});

module.exports = router;

function split2char(str){
	
	var arr = str.split("");
	return arr;
}

function split2word(str){
	
	var arrTemp = split2char(str);
	var arr = [];
	var word = "";
	var i = 0;
	
	arrTemp.forEach(function(element){
		if (element.match(" ")){
			arr[i] = word;
			i++;
			word = "";
		}
		else{
			if (element.match(/^([A-Z]|[a-z]|[0-9])/)){ // Karakter Latin
				word += element;
			}
			else{ // Tanda Baca
				if (word.match(/([0-9])$/)){
					word += element;
				}
				else{
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