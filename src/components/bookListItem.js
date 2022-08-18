import React, { Component } from 'react'

class BookListItem extends Component {
  render() {
    const { bookCover, bookTitle, bookAuthor } = this.props;
    return (
      <div className="book-list__item">
        <img src={bookCover} alt={`${bookTitle} cover.`} />
        <span className="book-list__title">{bookTitle}</span>
        <span className="book-list__author">{bookAuthor}</span>
      </div>
    )
  }
}

export default BookListItem