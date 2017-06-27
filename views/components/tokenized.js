const React = require('react')

const Paragraph = require('./paragraph.js')

class Tokenized extends React.Component {
	render(){
		return React.createElement(
			'div', 
			null, 
			React.createElement(
				'h2',
				null,
				`Tokenized`
			),
			React.createElement(
				'div',
				null,
				this.props.tokenized.map((paragraphs, index) => 
					React.createElement(
						Paragraph, 
						{
							paragraphs: paragraphs, 
							key: index
						}, 
						null
					)
				)
			)
		)
	}
}


module.exports = Tokenized;