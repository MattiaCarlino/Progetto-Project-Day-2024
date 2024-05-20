import React from 'react'
import "../Footer/Footer.css"
import { Link } from 'react-router-dom';


export const Footer = () => {
  return (
    <footer class="footer">
    <div class="container">
        <div class="footer-content">
            <div class="footer-logo">
                <img src="https://img.freepik.com/premium-photo/cyber-digital-world-android-robot-pointing-finger-computer-coding-ai-chatbot-background_629685-1221.jpg" alt="Logo"></img>
            </div>
            <div class="footer-links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li> | </li>
                    <li><Link to="/About_us">Contatti</Link></li>
                </ul>
            </div>
            
        </div>
        <div class="footer-info">
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