import React, { Component } from 'react';
import BookListItem from './bookListItem';
import SearchField from '../searchField';
import * as booksAPI from '../../booksAPI';

class BookList extends Component {
constructor(props) {
  super(props)

  this.state = {
    books: [],
    value: ""
  }

  this.handleChange = this.handleChange.bind(this)
  this.fetchBooks = this.fetchBooks.bind(this)
}
  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks() {
    booksAPI.getBooks().then(books => {
      this.setState({ books })
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      booksAPI.searchBooks(this.state.value).then(books => {
        this.setState({ books })
      })
    }
  }

  handleChange(value) {
    this.setState({ value })
  }

  render() {
    return (
      <React.Fragment>
        <SearchField 
          handleChange={this.handleChange} 
        />
        <ul className="book-list">
          {this.state.books.map(book => (
            <li key={book.id}>
              <BookListItem 
                bookCover={book.cover}
                bookTitle={book.title}
                bookAuthor={book.author}
                bookYear={book.year}
                bookId={book.id}
                isFavorite={book.isFavorite}
                fetchBooks={this.fetchBooks}
              />
            </li>
          ))}
        </ul>
      </React.Fragment>
    )
  }
}

export default BookList