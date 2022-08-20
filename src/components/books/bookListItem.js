import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import * as booksAPI from '../../booksAPI';

class BookListItem extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      favorites: []
    }

    this.addFavorite = this.addFavorite.bind(this)
  }

  addFavorite() {
    const { bookCover, bookTitle, bookAuthor, bookYear, bookId } = this.props;

    const body = JSON.stringify({
      "id": bookId,
      "title": bookTitle,
      "author": bookAuthor,
      "cover": bookCover,
      "year": bookYear,
      "isFavorite": true
    })

    booksAPI.addFavorite(body);
    booksAPI.updateBook(bookId, body);
  }

  render() {
    const { bookCover, bookTitle, bookAuthor, isFavorite } = this.props;
    return (
      <div className="book-list__item">
        <img src={bookCover} alt={`${bookTitle} cover.`} />
        <span className="book-list__title">{bookTitle}</span>
        <span className="book-list__author">{bookAuthor}</span>
        <div 
          className={`book-list__badge 
            ${isFavorite ? "favorite" : ""}
          `} 
          onClick={this.addFavorite}
        >
          <FontAwesomeIcon icon={faHeart} />
        </div>
      </div>
    )
  }
}

export default BookListItem