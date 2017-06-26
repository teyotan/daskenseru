//TODO
//Benerin paragraph
//Kasih template

const React = require('react')

const Tokenized = require('./tokenized.js')
const Stemmed = require('./stemmed.js')

class Layout extends React.Component {
	render(){
		return React.createElement(
			'div', 
			null, 
			React.createElement(
				Tokenized,
				{tokenized: this.props.tokenized},
				null
			),
			React.createElement(
				Stemmed,
				{stemmed: this.props.stemmed},
				null
			)
		)
	}
}


module.exports = Layout;