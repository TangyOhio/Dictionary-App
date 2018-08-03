import React from 'react'
import axios from 'axios'

class ResultBox extends React.Component {
  state = { description: '' }

  searchWord = (word) => {
    axios.get(`/api/search_word/${word}`)
      .then( res => {this.setState({ description: res.data.lexical_entries[0].entries[0].senses[0].definitions })})
  }

  componentDidUpdate() {
    let { word } = this.props
    this.searchWord(word)
  }
  
  render() {
    return(
      <div style={{ display: 'flex', flexFlow: 'column wrap', alignItems: 'center', width: '60%' }}>
        <h1>Your Word: {this.props.word}</h1>
        {this.state.description}
      </div>
    )
  }
}

export default ResultBox
