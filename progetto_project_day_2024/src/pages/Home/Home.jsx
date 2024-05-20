import React from 'react'
import '../Home/Home.css'
import { Link } from 'react-router-dom';
import 'animate.css'

export const Home = () => {
  return (
    <home id="home">
    
    <div id='scroll-container'>
        <div id='scroll-content'>
          <div id="image-with-text"> 

            <img src='https://www.isarchimede.edu.it/wp-content/uploads/2023/10/archimeme.jpg'></img>
            <div id="text-overlay">Gli studenti dell' <br></br>ITIS Archimede di Treviglio <br></br>presentano . . .</div>
            
            
            </div>

            <div id='image'>
              <img src='https://www.teknoring.com/wp-content/uploads/2019/03/intelligenza-artificiale.jpg'
              ></img>
            </div>
                </div>


              <Link to='/Chat_bot' >
                  <button id='bottone'> Inizia a Chattare! </button>
                </Link> 
                
              
              </div>

        
      
    
    </home>
  )
}

export default Home;

