import React, { Component} from 'react';
import './app.css';
import BookList from './components/bookList';
import SearchField from './components/searchField';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      value: ""
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({ value })
  }
  render() {
    return (
      <div className="main">
        <SearchField handleChange={this.handleChange} />
        <BookList value={this.state.value} />
      </div>
    );
  }
}

export default App;
