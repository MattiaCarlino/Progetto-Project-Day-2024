import React from 'react'
import {Link} from 'react-router-dom'
import { MdAccountCircle } from "react-icons/md";
import '../Header/Header.css'

export const Header = () => {
  return (
    <header id='Header'>
      <div className='wrapper'>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About_us">About_us</Link></li>
            <li><Link to= "/Homepage Account"> <MdAccountCircle /></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
