import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

class BookListItem extends Component {
  render() {
    const { bookCover, bookTitle, bookAuthor } = this.props;
    return (
      <div className="book-list__item">
        <img src={bookCover} alt={`${bookTitle} cover.`} />
        <span className="book-list__title">{bookTitle}</span>
        <span className="book-list__author">{bookAuthor}</span>
        <div className="book-list__badge">
          <FontAwesomeIcon icon={faHeart} />
        </div>
      </div>
    )
  }
}

export default BookListItem