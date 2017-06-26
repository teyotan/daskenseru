const React = require('react')

const Word = require('./word.js')

class Paragraph extends React.Component {
	render(){
		return React.createElement(
			'div', 
			{
				style: {
					display: 'flex',
					flexWrap: 'wrap',
				}
			},
			this.props.paragraphs.map((words, index) => 
				React.createElement(
					Word, 
					{
						words: words, 
						key: index
					}, 
					null
				)
			)
		)
	}
}

module.exports = Paragraph;