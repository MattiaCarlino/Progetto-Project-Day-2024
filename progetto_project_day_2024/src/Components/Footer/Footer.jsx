import React from 'react'
import "../Footer/Footer.css"
import { Link } from 'react-router-dom';
import Logo from '../Header/prova logo.png'


export const Footer = () => {
  return (
    <footer className="footer">
    <div className="container">
        <div className="footer-content">
            <div className="footer-logo">
                <img src={Logo} alt="Logo"></img>
            </div>
            <div className="footer-links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li> | </li>
                    <li><Link to="/About_us">About</Link></li>
                </ul>
            </div>
            
        </div>
        <div className="footer-info">
            <p>© 2024 ITIS Archimede</p>
            <p>Indirizzo: Via Greggia, 52, 24047 Treviglio BG</p>
            <p>Email: ferri.davide.stu@isarchimede.it | barboni.luca.stu@isarchimede.it |   carlino.mattia.stu@isarchimede.it
            </p>
        </div>
    </div>
</footer>

  )
}

export default Footer;