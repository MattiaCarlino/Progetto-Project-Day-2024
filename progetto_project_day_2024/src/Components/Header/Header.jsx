import React from 'react'
import {Link} from 'react-router-dom'
import { MdAccountCircle } from "react-icons/md";
import '../Header/Header.css'

export const Header = () => {
  return (
    <header id='Header'>
      <div className='wrapper'>
        <nav className='nav-bar'>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/About_us">ABOUT US</Link></li>
            <li id='bordi'><Link to= "/Homepage Account"> SIGN UP <MdAccountCircle /> </Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
