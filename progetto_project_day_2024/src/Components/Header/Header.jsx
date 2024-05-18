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
                <img id="archimede" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM0KDoo9-wMbHa_4gFCaAEcTctmoX-2eu8bDxfZdG0jQ&s"></img>
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
