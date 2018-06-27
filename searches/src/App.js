import React, { Component } from 'react'
import binary from './binary-search'
import serial from './serial-search'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { search: 'Serial', feedback: null }
  }

  toggleSearch = () => {
    let search
    if (this.state.search.startsWith('S')) {
      search = 'Binary'
    } else {
      search = 'Serial'
    }
    this.setState({ search })
  }

  handleSearch(data, item) {
    let searchResult
    if (this.state.search.startsWith('S')) {
      searchResult = serial(data, item)
    } else {
      searchResult = binary(data.sort(), item)
    }

    const feedback = searchResult[0]
      ? `Found ${searchResult[0]} in ${searchResult[1]} attempts`
      : `Performed ${searchResult[1]} attempts and found nothing`
    this.setState({ feedback })
  }

  render() {
    return (
      <div>
        <h1>{this.state.search}</h1>
        <h2>{this.state.feedback}</h2>
        <input
          type="text"
          placeholder="Search Query"
          ref={e => (this.input = e)}
        />
        <textarea ref={e => (this.textarea = e)} />
        <button
          onClick={() =>
            this.handleSearch(this.textarea.value.split(' '), this.input.value)
          }
        >
          Search
        </button>
        <button onClick={this.toggleSearch}>Toggle Search</button>
      </div>
    )
  }
}

export default App
