import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import * as booksAPI from '../../booksAPI';

export class FavoriteListItem extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
    }

    this.removeFavorite = this.removeFavorite.bind(this);
  }

  removeFavorite() {
    const { bookId } = this.props;

    booksAPI.removeFavorite(bookId);

    this.props.removeFavorite(bookId);
  }

  render() {
    const { bookCover, bookTitle, bookAuthor } = this.props;
    return (
      <div className="favorite-list__item">
        <img src={bookCover} alt={`${bookTitle} cover.`} />
        <span className="favorite-list__title">{bookTitle}</span>
        <span className="favorite-list__author">{bookAuthor}</span>
        <div className="favorite-list__badge" onClick={this.removeFavorite}>
          <FontAwesomeIcon icon={faHeart} />
        </div>
      </div>
    )
  }
}

export default FavoriteListItem