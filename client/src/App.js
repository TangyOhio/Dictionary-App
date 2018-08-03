import React from 'react'
import SearchBar from './components/SearchBar'
import ResultBox from './components/ResultBox'

class App extends React.Component {
  state = { word: '' }

  changeWord = (word) => this.setState({ word })
  
  render() {
    return (
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <h1>Welcome</h1>
        <SearchBar callback={this.changeWord} />
        <ResultBox word={this.state.word} />
      </div>
    )
  }
}

export default App
