import React from 'react'

class SearchBar extends React.Component {
  state = { word: '' }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.callback(this.state.word)
    this.setState({ word: '' })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Search for..."
          value={this.state.word}
          onChange={e => this.setState({ word: e.target.value })}
        />
        <button type='submit' >Submit</button>
      </form>
    )
  }
}

export default SearchBar
