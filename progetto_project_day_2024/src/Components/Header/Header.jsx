import React from 'react'
import {Link} from 'react-router-dom'

export const Header = () => {
  return (
    <div id='Header' className='wrapper'>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About_us">About_us</Link></li>
          </ul>
        </nav>
    </div>
  )
}

export default Header;
