var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser')
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

<<<<<<< HEAD
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
=======
var homeController = require("../controllers/homeController.js").index;

router.use('/', express.static('public'));

router.post('/', homeController);
>>>>>>> 08582a2e333a8a9ce613c761cd739c098c58880a

module.exports = router;