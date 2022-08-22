import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <ul className="navbar">
        <li className="navbar__item">
          <Link to={'/'}>Home</Link>
        </li>
        <li className="navbar__item">
          <Link to={'/favorites'}>Favorites</Link>
        </li>
        <li className="navbar__item">
          <Link to={'/add-book'}>Add Book</Link>
        </li>
      </ul>
    )
  }
}

export default Navbar