import React, { Component } from 'react'

class SearchField extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      value: ""
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    }, () => {
      this.props.handleChange(this.state.value)
    })
  }

  render() {
    return (
      <div className="search-field__wrapper">
        <input 
          type="text" 
          onChange={this.handleChange} 
          value={this.state.value} 
          placeholder="Search by Author or Book"
        />
      </div>
    )
  }
}

export default SearchField