const ReactDOMServer = require('react-dom/server')
const React = require('react')

const preprocesser = require('../modules/preprocesser')
const analyzer = require('../modules/analyzer').analyze

const Layout = require("../views/components/layout.js")
const Tokenized = require("../views/components/tokenized.js")

const logger = require('winston').loggers.get('logger')

var exec = require('child_process').exec

const index = function(req, res, next) {
	let startTime = new Date()
	var arr
	const request = new Promise((resolve, reject) => {
		arr = preprocesser(req.body.text)

		// var cmd = 'java -cp "C:\\Program Files\\Weka-3-8\\weka.jar" weka.classifiers.trees.J48 -t "C:\\Program Files\\Weka-3-8\\data\\iris.arff"'

		// exec(cmd, function(error, stdout, stderr) {
		// 	console.log(stdout)
		// 	return;
		// });

		resolve(arr)
	})
	.then((arr) => {
		let endTime = new Date()
	
		//var arr = analyzer(arr);
		logger.info(req.body.text, {time: (endTime - startTime)+'ms'})


		res.send(
			ReactDOMServer.renderToString(
				React.createElement(Layout, {tokenized: arr.tokenized, stemmed: arr.stemmed}, null)
			)
		)
	})
	


	

};

exports.index = index;