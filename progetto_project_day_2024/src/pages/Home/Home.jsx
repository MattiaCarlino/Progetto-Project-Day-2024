import React from 'react'
import '../Home/Home.css'
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <home id="home">
      <div id='div'>
        <img id="robot" src='https://i.pinimg.com/originals/35/c5/0a/35c50a9f3b1d5dcefec93b7ccbb57f90.jpg'
        ></img>
      

        <p id="descrizione"> 

          Qua ci sarà la descrizione ? Qualcosa di simile che spieghi in breve il tutto,
          oppure altro che comunque servirà ad impatto!!! Importante, impatto. Qualcosa che 
          trasmetta subito e in breve cosa ci sarà e cosa farà ? Boh, ma impatto.

        </p>

      </div>
  
      <Link to='/Chat_bot' >
        <button> Inizia a Chattare! </button>
      </Link> 
    
    </home>
  )
}

export default Home;
