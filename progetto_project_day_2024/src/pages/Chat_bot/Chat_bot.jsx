import React, { useEffect, useState } from 'react';
import Side_bar from './Side_bar/Side_bar';
import './Chat_bot.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import fetchResponse from '../../api/api';
import list_prompt from '../../list_prompt.json'
import 'bootstrap'
import { Link } from 'react-router-dom';

const Chat_bot = () => {

  const[isLoged, setIsLoged] = useState(true)

  const selectPrompt = (id) =>{
    var prompt

    if (localStorage.getItem('singUp') == "true"){ // non funziona la verifica dell'accesso penso sempre con problemi al localStorage non ho ancora provato il Session alla fine
      if(id == 1){
        prompt = list_prompt[0].prompt
      }else if(id == 2){
        prompt = list_prompt[1].prompt
      }else if(id ==3){
        prompt = list_prompt[2].prompt
      }

      // questa è la parte in cui preso il prompt deve sostitutire gli elementi predefiniti con quelli inseriti dall'utente
      /*
      console.log(prompt)
      promptModified = prompt.replace("<classe inserita>", localStorage.getItem('classe')) // penso che non trovi il valore nel localStorage e quindi non setti nulla
      promptModified = prompt.replace("<scuola inserita>",localStorage.getItem('istituto'))
      console.log(promptModified) // solo per visualizzare da terminale
      */
      //fine parte che non funziona
      sendMessage(prompt)
    }else{
      setIsLoged(false)
    }
    
  }

  const formatMessage = (msg) => {
    let msgArray = msg.split("**");
    let temp = "";

    msgArray.forEach((words, index) => {
      let segment = (index % 2 === 0) ? words : `<b>${words}</b>`;
      temp += segment;
      if(segment.includes(':'))
        temp += "<br />";
    });

    return temp.split("*").join("<br />");
  }

  const firstChat = {
    id: 1,
    title: "Chat n. 1",
    messageHistory: [
      {
        role: "model",
        parts: [{text: "Ciao! Sono School Bot. Come posso aiutarti?"}]
      }
    ] 
  }

  const [currentChat, setCurrentChat] = useState(firstChat);
  const [chatList, setChatList] = useState([currentChat]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setChatList(prevChatList => {
      const newChatList = [currentChat, ...prevChatList.slice(1)];
      return newChatList;
    });
  }, [currentChat]);

  const apiCall = async (messageSent) => {
    let historyToSend = [];
    if(currentChat.messageHistory.length > 2) {
      historyToSend = currentChat.messageHistory.slice(1, -1);
    }
    const answer = await fetchResponse(historyToSend, messageSent);
    setCurrentChat(prevChat => ({
      ...prevChat,
      messageHistory: [
        ...prevChat.messageHistory,
        {
          role: "model",
          parts: [{ text: formatMessage(answer) }]
        }
      ]
    }));
  }

  const sendMessage = (messageSent) => {
    setCurrentChat(prevChat => ({
      ...prevChat,
      messageHistory: [
        ...prevChat.messageHistory,
        {
          role: "user",
          parts: [{ text: messageSent }]
        }
      ]
    }));
    setChatList(prevChatList => {
      return [currentChat, ...prevChatList.slice(1)];
    });
    setMessage("");
    apiCall(messageSent);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendMessage(message);
    }
  }

  return (
    <div className='main-chat-bot'>
      <Side_bar
      chatList={chatList} setChatList={setChatList}
      currentChat={currentChat} setCurrentChat={setCurrentChat}
      />
      <div className='chat-bot-stream'>
        <div className='response-parts'>
          <div className="messages">
            {
              currentChat.messageHistory.map((msg, index) => (
                <div key={index} className='msg'>
                  <h2>{msg.role === "model" ? "ChatBot" : "Utente"}</h2>
                  <p dangerouslySetInnerHTML={{ __html: formatMessage(msg.parts[0].text) }} />
                </div>
              ))
            }
          </div>
          {
            currentChat.messageHistory.length === 1 ?
            <div className='prompt-section'>
              <div className='prompt-options'>
                <div className="suggestion" >
                  <h2> Organizzami lo studio </h2>
                  <p id='sugg'>Organizza un piano di studi in base alle tue materie</p>
                  <button type="button" id="btn" class="btn btn-outline-primary"onClick={() => {selectPrompt(1)}}> Chiedi </button>
                </div>
                <div className="suggestion">
                  <h2> Opzioni orientamento </h2>
                  <p id='sugg'>Propone una serie di opzioni d'orientamento in uscita</p>
                  <button type="button" id="btn" class="btn btn-outline-primary"onClick={() => {selectPrompt(2)}}> Chiedi </button>
                </div>
                <div className="suggestion">
                  <h2> Collegamenti argomento </h2>
                  <p id='sugg'> Parte da un argomento e collega diverse materie</p>
                  <button type="button" id="btn" class="btn btn-outline-primary"onClick={() => {selectPrompt(3)}}> Chiedi </button>
                </div>

              </div>
              {
                isLoged ?
                null :
                <div className='alert-login'>
                  <div class="alert alert-danger" role="alert">
                    <h5 className='titolo-alert'> Alert, devi prima inserire i dati dell'account per usare le funzionalità</h5>
                    <Link to="/Homepage Account">
                      <button type="button" class="btn btn-danger">Danger</button>
                    </Link>
                  </div>
                </div> 
              }
            </div>
              
            : null
          }
          <div className="bottom-bar">
            <input className='text-field' type='text' placeholder='Scrivi qua il tuo messaggio...'
                onChange={(e) => setMessage(e.target.value)}
                value={message} onKeyDown={handleKeyDown}
              />
            <button className='start-button' onClick={() => {sendMessage(message)}}>
              <FontAwesomeIcon icon={faArrowUp} className='arrow' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat_bot;