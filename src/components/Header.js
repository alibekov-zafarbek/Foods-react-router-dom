import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav>
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo">React shop</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="about">About</Link></li>
      </ul>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="contact">Contact</Link></li>
      </ul>
    </div>
  </nav>
  )
}
