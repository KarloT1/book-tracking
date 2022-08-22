import React, { Component} from 'react';
import './app.css';
import BookList from './components/books/bookList';
import { Route, Routes } from 'react-router-dom';
import FavoritesList from './components/favorites/favoriteList';
import Navbar from './components/navbar';
import AddBook from './components/addBook/addBook';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="main">
          <Navbar />
          <div className="main__content">
            <Routes>
              <Route exact path='/' element={<BookList />} />
              <Route path='/favorites' element={<FavoritesList />} />
              <Route path='/add-book' element={<AddBook />} />
            </Routes>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
