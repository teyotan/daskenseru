const ReactDOMServer = require('react-dom/server')
const React = require('react')

const preprocesser = require('../modules/preprocesser')
const analyzer = require('../modules/analyzer').analyze

const Layout = require("../views/components/layout.js")
const Tokenized = require("../views/components/tokenized.js")

const logger = require('winston').loggers.get('logger')

const index = function(req, res, next) {
	let startTime = new Date();

	var arr = preprocesser(req.body.text);

	let endTime = new Date();
	
	//var arr = analyzer(arr);
	logger.info(req.body.text, (endTime - startTime)+'ms')

	res.send(
		ReactDOMServer.renderToString(
			React.createElement(Layout, {tokenized: arr.tokenized, stemmed: arr.stemmed}, null)
		)
	)

};

exports.index = index;