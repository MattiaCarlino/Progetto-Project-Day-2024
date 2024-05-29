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
                <div id='descrizione'>

                  <text id='titolo'> School ChatBOT ! </text>

                  </div>
                  
                    <text id='spiegazione'>

                      <br></br>
                      School ChatBOT risponde a qualsiasi tuo dubbio, domanda e perplessità. <br></br>
                      Può organizzare il tuo studio, collegare 2 o più materie in base all'argomento, <br></br>
                      insomma, aiutarti fornendoti ciò di cui hai bisogno. <br></br>
                      <br></br>
                      Premi il tasto e guarda con i tuoi occhi <br></br>

                  </text>

                  
                
                <div id='posizioneBottone'>
                
                  <Link to='/Chat_bot' >
                    <button id='bottone'>
                      Inizia a chattare!
                    </button>
                  </Link> </div>
                  
                
                
                

            </div>


            
                </div>

                
              
              
                
              
              </div>

            
                
      
    
    </home>
  )
}

export default Home;

