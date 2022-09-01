import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import * as booksAPI from '../../booksAPI';

class BookListItem extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      favorites: []
    }

    this.addFavorite = this.addFavorite.bind(this)
    this.removeFavorite = this.removeFavorite.bind(this)
    this.deleteBook = this.deleteBook.bind(this);
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
    booksAPI.updateBook(bookId, body).then(() => {
      this.props.fetchBooks();
    })
  }

  removeFavorite() {
    const { bookCover, bookTitle, bookAuthor, bookYear, bookId } = this.props;

    const body = JSON.stringify({
      "id": bookId,
      "title": bookTitle,
      "author": bookAuthor,
      "cover": bookCover,
      "year": bookYear,
      "isFavorite": false
    })

    booksAPI.removeFavorite(bookId);
    booksAPI.updateBook(bookId, body).then(() => {
      this.props.fetchBooks();
    })
  }

  deleteBook() {
    const { bookId } = this.props;

    booksAPI.deleteBook(bookId).then(() => {
      this.props.fetchBooks();
    })
  }

  render() {
    const { bookCover, bookTitle, bookAuthor, isFavorite } = this.props;
    return (
      <div className="book-list__item">
        <img src={bookCover} alt={`${bookTitle} cover.`} />
        <span className="book-list__title">{bookTitle}</span>
        <span className="book-list__author">{bookAuthor}</span>
        <div 
          className={`book-list__heart 
            ${isFavorite ? "favorite" : ""}
          `} 
          onClick={isFavorite
            ? this.removeFavorite
            : this.addFavorite
          }
        >
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div 
          className="book-list__trash"
          onClick={this.deleteBook}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </div>
      </div>
    )
  }
}

export default BookListItem