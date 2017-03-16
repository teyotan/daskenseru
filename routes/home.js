var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser')
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

/* Bagian Import modul dan data analisis */
var commonwords = require('../modules/commonwords').array;
var parser = require('../modules/parser');
var analyzer = require('../modules/analyzer');

router.use('/', express.static('public'));

router.post('/', function(req, res, next) {
	
	var arr = parser.split2word(req.body.text);
	
	var arr = analyzer.analyze(arr);
	
	
	/* Kirim Hasil ke User */
	res.send(
		 arr.filter(function(value){
		 	return value.tag != "O";
		 }).map(function(value){
		 	return value;
		 })
		//commonwords
	);
});

module.exports = router;