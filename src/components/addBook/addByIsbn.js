import React, { Component } from 'react'
import * as booksAPI from '../../booksAPI'

class AddByIsbn extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      bookIsbn: "",
      title: "",
      author: "",
      cover: "",
      year: "",
      isFavorite: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit() {
    booksAPI.searchBookByIsbn(this.state.bookIsbn).then(data => {
      if (data.authors) {
        let authorLink = data.authors[0].key;
        booksAPI.searchAuthorByIsbn(authorLink).then(authorData => {
          this.setState({
            author: authorData.name,
            title: data.title,
            year: data.publish_date,
            cover: `https://covers.openlibrary.org/b/isbn/${this.state.bookIsbn}-M.jpg`,
            isFavorite: false
          }, () => {
            const bookData = {
              "title": this.state.title,
              "author": this.state.author,
              "year": this.state.year,
              "isFavorite": this.state.isFavorite,
              "cover": this.state.cover
            }

            this.props.addByIsbn(bookData)
          })
        })

      } else {
        let authorData = data.contributions[0]
        let authorName = authorData.split(",")
        let author = authorName[1].trim().concat(" ", authorName[0])
        this.setState({ 
          author: author,
          title: data.title,
          year: data.publish_date,
          cover: `https://covers.openlibrary.org/b/isbn/${this.state.bookIsbn}-M.jpg`,
          isFavorite: false
         }, () => {
          const bookData = {
            "title": this.state.title,
            "author": this.state.author,
            "year": this.state.year,
            "isFavorite": this.state.isFavorite,
            "cover": this.state.cover
          }

          this.props.addByIsbn(bookData)
        })
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <h3 className="add-book__title">Add Book by ISBN</h3>
        <h4 className="add-book__title">Enter a valid ISBN 10 or 13</h4>
        <form className="add-book__form">
          <div className="add-book__input-wrapper">
            <input 
              type="text" 
              id="bookIsbn" 
              onChange={this.handleChange} 
              placeholder=" " 
              name="bookIsbn"
              value={this.state.bookIsbn}
            />
            <label htmlFor="title">Book ISBN</label>
          </div>
        </form>
        <div 
          className="add-book__button add-book__button--isbn"
          onClick={this.handleSubmit}  
        >
          Find Book by ISBN
        </div>
      </React.Fragment>
    )
  }
}

export default AddByIsbn