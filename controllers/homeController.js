const ReactDOMServer = require('react-dom/server')
const React = require('react')

const preprocesser = require('../modules/preprocesser')
const analyzer = require('../modules/analyzer').analyze

const Layout = require("../views/components/layout.js")

const index = function(req, res, next) {
	var arr = preprocesser(req.body.text);
	
	//var arr = analyzer(arr);

	res.send(
		ReactDOMServer.renderToStaticMarkup(
			React.createElement(Layout, {tokenized: arr.tokenized, stemmed: arr.stemmed}, null)
		)
	)
};

exports.index = index;