import React, { Component } from 'react'

export class AddBook extends Component {
  render() {
    return (
      <form className="add-book__form">
        <div className="add-book__input-wrapper">
          <input type="text" id="title" />
          <label for="title">Book Title</label>
        </div>
        <div className="add-book__input-wrapper">
          <input type="text" id="author" />
          <label for="author">Book Author</label>
        </div>
        <div className="add-book__input-wrapper">
          <input type="text" id="cover" />
          <label for="cover">Book Cover</label>
        </div>
        <div className="add-book__input-wrapper">
          <input type="text" id="year" />
          <label for="year">Book Year</label>
        </div>
      </form>
    )
  }
}

export default AddBook