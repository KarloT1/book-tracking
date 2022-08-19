import React, { Component} from 'react';
import './app.css';
import BookList from './components/bookList';
import { Route, Link, Routes } from 'react-router-dom';
import FavoritesList from './components/favoritesList';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="main">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link">Home</Link></li>
            <li><Link to={'/favorites'} className="nav-link">Favorites</Link></li>
          </ul>
          <div className="main__content">
            <Routes>
              <Route exact path='/' element={<BookList />} />
              <Route path='/favorites' element={<FavoritesList />} />
            </Routes>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
