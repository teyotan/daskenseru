var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser')
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.use('/', express.static('public'));

var commonwords = ["aku", "asd"];

router.post('/', function(req, res, next) {
	
	var arr = split2word(req.body.text);

	arr.forEach(function(element, index, array){
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
	});
	
	res.send(
		arr.filter(function(value){
			return value.tag != "O";
		}).map(function(value){
			return value;
		})
	);
});

module.exports = router;

function split2char(str){
	
	var arr = str.split("");
	return arr;
}

function split2word(str){
	
	var arrTemp = split2char(str);
	var arr;
	var word;
	var i = 0;
	
	arrTemp.forEach(function(element){
		if (element.match(" ")){
			arr[i] = word;
			i++;
			word = "";
		}
		else{
			if (element.match(/^([A-Z]|[a-z])/)){
				word += element;
			}
			else{
				arr[i] = word;
				i++;
				word = element;
			}
		}
	});
	
	return arr;
}