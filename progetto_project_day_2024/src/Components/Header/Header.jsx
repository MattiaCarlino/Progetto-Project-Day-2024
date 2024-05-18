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
          <li></li>
          <li></li>
            <li><Link to="/">HOME</Link></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li><a href="https://www.isarchimede.edu.it/" target='_blank'>
                <img id="archimede" src="data:image/png;base64,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"></img>
                </a></li>
            <li>
            <a href="https://vitejs.dev/" target='_blank'>
                <img id="react" src="https://inspector.dev/wp-content/uploads/2023/01/vite-hot-module-reload-laravel-homestead-cover.jpg"></img>
            </a>   

            </li>
            <li>
            <a href="https://it.legacy.reactjs.org/" target='_blank'>
                <img id="react" src="https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg"></img>
            </a>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li><Link to="/About_us">ABOUT US</Link></li>
            <li id='bordi'><Link to= "/Homepage Account"> SIGN UP <MdAccountCircle /> </Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
