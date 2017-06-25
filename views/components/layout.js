const React = require('react')

class Layout extends React.Component {
	render(){
		return React.createElement(
			'div', 
			null, 
			React.createElement(
				'div',
				null,
				`Tokenized : ${this.props.tokenized}` //NOTICE: bukan apostrophe (petik 1), tapi grave accent
			),
			React.createElement(
				'div',
				null,
				`Stemmed : ${this.props.stemmed}`
			)
		)
	}
}


module.exports = Layout;