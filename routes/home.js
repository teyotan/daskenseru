var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser')
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.use('/', express.static('public'));

router.post('/', function(req, res, next) {
	
	var arr = req.body.text.split(" ");

	arr.forEach(function(element, index, array){
		array[index] = {"word": element, "tag": "O"}
		
		if (array[index].word.match(/^[A-Z]([a-z]|[.]$)/)){
			array[index].tag = "NE";
		}
	});
	
	res.send(
		arr.filter(function(value){
			return value.tag != "O";
		}).map(function(value){
			return value.word;
		})
	);
});

module.exports = router;