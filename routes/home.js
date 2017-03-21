var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser')
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

var homeController = require("../controllers/homeController.js").index;

router.use('/', express.static('public'));

router.post('/', homeController);

module.exports = router;