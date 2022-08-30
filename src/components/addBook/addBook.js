import React, { Component } from 'react'

export class AddBook extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      author: "",
      cover: "",
      year: ""
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <React.Fragment>
        <h3 className="add-book__title">Add a New Book</h3>
        <form className="add-book__form">
          <div className="add-book__input-wrapper">
            <input 
              type="text" 
              id="title" 
              onChange={this.handleChange} 
              placeholder=" " 
              name="title"
              value={this.state.value}
            />
            <label htmlFor="title">Book Title</label>
          </div>
          <div className="add-book__input-wrapper">
            <input 
              type="text"
              id="author"
              onChange={this.handleChange}
              placeholder=" "
              name="author"
              value={this.state.value}
            />
            <label htmlFor="author">Book Author</label>
          </div>
          <div className="add-book__input-wrapper">
            <input 
              type="text"
              id="cover"
              onChange={this.handleChange}
              placeholder=" "
              name="cover"
              value={this.state.value}
            />
            <label htmlFor="cover">Book Cover</label>
          </div>
          <div className="add-book__input-wrapper">
            <input 
              type="text"
              id="year"
              onChange={this.handleChange}
              placeholder=" "
              name="year"
              value={this.state.value}
            />
            <label htmlFor="year">Book Year</label>
          </div>
        </form>
        <div className="add-book__button">
          Add Book
        </div>
      </React.Fragment>
    )
  }
}

export default AddBook