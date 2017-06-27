const React = require('react')

const Paragraph = require('./paragraph.js')

class Stemmed extends React.Component {
	render(){
		return React.createElement(
			'div', 
			null, 
			React.createElement(
				'h2',
				null,
				`Stemmed`
			),
			React.createElement(
				'div',
				null,
				this.props.stemmed.map((paragraphs, index) => 
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


module.exports = Stemmed;