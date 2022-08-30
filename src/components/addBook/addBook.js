import React, { Component } from 'react'
import * as booksAPI from '../../booksAPI'

export class AddBook extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      author: "",
      cover: "",
      year: "",
      bookAdded: false,
      error: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit() {
    const body = JSON.stringify({
      "title": this.state.title,
      "author": this.state.author,
      "cover": this.state.cover,
      "year": this.state.year,
      "isFavorite": false
    })
    booksAPI.addBook(body).then(res => {
      if (res.ok) {
        this.setState({
          bookAdded: true
        }, () => {
          setTimeout(() => {
            this.setState({
              bookAdded: false
            })
          }, 3000);
        })
      } else {
        this.setState({
          error: true
        }, () => {
          setTimeout(() => {
            this.setState({
              error: false
            })
          }, 3000);
        })
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <h3 className="add-book__title">Add a New Book</h3>
        <form className="add-book__form">
          <div className="add-book__input-wrapper">
            <input 
              type="text" 
              id="title" 
              onChange={this.handleChange} 
              placeholder=" " 
              name="title"
              value={this.state.value}
            />
            <label htmlFor="title">Book Title</label>
          </div>
          <div className="add-book__input-wrapper">
            <input 
              type="text"
              id="author"
              onChange={this.handleChange}
              placeholder=" "
              name="author"
              value={this.state.value}
            />
            <label htmlFor="author">Book Author</label>
          </div>
          <div className="add-book__input-wrapper">
            <input 
              type="text"
              id="cover"
              onChange={this.handleChange}
              placeholder=" "
              name="cover"
              value={this.state.value}
            />
            <label htmlFor="cover">Book Cover</label>
          </div>
          <div className="add-book__input-wrapper">
            <input 
              type="text"
              id="year"
              onChange={this.handleChange}
              placeholder=" "
              name="year"
              value={this.state.value}
            />
            <label htmlFor="year">Book Year</label>
          </div>
        </form>
        <div 
          className="add-book__button"
          onClick={this.handleSubmit}  
        >
          Add Book
        </div>
        {
          this.state.bookAdded && (
            <div className="add-book__success">
              Your book was successfully added.
            </div>
          )
        }

        {
          this.state.error && (
            <div className="add-book__error">
              There was an error while adding a book.
            </div>
          )
        }
      </React.Fragment>
    )
  }
}

export default AddBook