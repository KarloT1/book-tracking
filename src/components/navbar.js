import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <ul className="navbar">
        <li className="navbar__item hover-underline-animation">
          <Link to={'/'}>Home</Link>
        </li>
        <li className="navbar__item hover-underline-animation">
          <Link to={'/favorites'}>Favorites</Link>
        </li>
      </ul>
    )
  }
}

export default Navbar