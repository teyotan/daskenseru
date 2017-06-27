const React = require('react')

class Word extends React.Component {
	render(){
		return React.createElement(
			'div', 
			{
				style: {
					marginLeft: '1px',
					marginRight: '1px',
				}
			},
			this.props.words
		)
	}
}


module.exports = Word;