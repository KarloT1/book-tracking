import React, { Component } from 'react';
import * as booksAPI from '../../booksAPI';
import FavoriteListItem from './favoriteListItem';

class FavoritesList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      favorites: []
    }

    this.removeFavorite = this.removeFavorite.bind(this)
  }

  componentDidMount() {
    booksAPI.getFavorites().then(favorites => {
      this.setState({ favorites })
    })
  }

  removeFavorite(bookId) {
    this.state.favorites.forEach((favorite, index) => {
      let favorites = [...this.state.favorites];
      
      if (favorites[index].id === bookId) {
        favorites.splice(index, 1);

        this.setState({ favorites })
      }
    })
  }

  render() {
    const favoritesLength = this.state.favorites.length

    return (
      <React.Fragment>
        {/* <SearchField 
          handleChange={this.handleChange} 
        /> */}
        {
          !favoritesLength
          ? <div className="no-favorites">
              There are no books on your Favorites list. <br/>
              Add some on the Home page and you can view them here.
            </div>
          :  <ul className="favorite-list">
              {this.state.favorites.map(favorite => (
                <li key={favorite.id}>
                  <FavoriteListItem 
                    bookCover={favorite.cover}
                    bookTitle={favorite.title}
                    bookAuthor={favorite.author}
                    bookYear={favorite.year}
                    bookId={favorite.id}
                    removeFavorite={this.removeFavorite}
                    isFavorite={favorite.isFavorite}
                  />
                </li>
              ))}
            </ul>
        }
      </React.Fragment>
    )
  }
}

export default FavoritesList