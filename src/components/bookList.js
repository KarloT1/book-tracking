import React, { Component } from 'react';
import BookListItem from './bookListItem';
import * as booksAPI from '../booksAPI';

class BookList extends Component {
constructor(props) {
  super(props)

  this.state = {
    books: []
  }
}
  componentDidMount() {
    booksAPI.getBooks().then(books => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <ul className="book-list">
        {this.state.books.map(book => (
          <li key={book.id}>
            <BookListItem 
              bookCover={book.cover}
              bookTitle={book.title}
              bookAuthor={book.author}
            />
          </li>
        ))}
      </ul>
    )
  }
}

export default BookList