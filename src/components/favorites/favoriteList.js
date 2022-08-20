import React, { Component } from 'react';
import * as booksAPI from '../../booksAPI';
import FavoriteListItem from './favoriteListItem';

class FavoritesList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      favorites: []
    }
  }

  componentDidMount() {
    booksAPI.getFavorites().then(favorites => {
      this.setState({ favorites })
    })
  }

  render() {
    return (
      <React.Fragment>
        {/* <SearchField 
          handleChange={this.handleChange} 
        /> */}
        <ul className="favorite-list">
          {this.state.favorites.map(favorite => (
            <li key={favorite.id}>
              <FavoriteListItem 
                bookCover={favorite.cover}
                bookTitle={favorite.title}
                bookAuthor={favorite.author}
                bookYear={favorite.year}
              />
            </li>
          ))}
        </ul>
      </React.Fragment>
    )
  }
}

export default FavoritesList