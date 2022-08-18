import React, { Component} from 'react';
import './app.css';
import BookList from './components/bookList';
import SearchField from './components/searchField';

class App extends Component {
  render() {
    return (
      <div className="main">
        <SearchField />
        <BookList />
      </div>
    );
  }
}

export default App;
