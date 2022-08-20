import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export class FavoriteListItem extends Component {
  render() {
    const { bookCover, bookTitle, bookAuthor } = this.props;
    return (
      <div className="favorite-list__item">
        <img src={bookCover} alt={`${bookTitle} cover.`} />
        <span className="favorite-list__title">{bookTitle}</span>
        <span className="favorite-list__author">{bookAuthor}</span>
        <div className="favorite-list__badge" onClick={this.addFavorite}>
          <FontAwesomeIcon icon={faHeart} />
        </div>
      </div>
    )
  }
}

export default FavoriteListItem