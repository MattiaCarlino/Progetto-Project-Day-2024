import React, { useEffect, useState } from 'react';
import Side_bar from './Side_bar';
import './Chat_bot.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
//import fetchResponse from '../../api/api';

const Chat_bot = () => {

  const firstChat = {
    id: 1,
    title: "Chat n. 1",
    messageHistory: [
      {
        role: "model",
        parts: [{text: "Ciao! Sono School ChatBot. Come posso aiutarti?"}]
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

  const apiCall = async () => {
    //dovrebbe essere cosi:
    //let answer = await fetchResponse(currentChat.messageHistory);
    //ma la chiamata api è rotta per ora :(
    //quindi per ora risponde sempre "ok"
    let answer = "ok";
    setCurrentChat(prevChat => ({
      ...prevChat,
      messageHistory: [
        ...prevChat.messageHistory,
        {
          role: "model",
          parts: [{ text: answer }]
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
    apiCall();
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
                  <h2>{msg.role}</h2>
                    <p>{msg.parts[0].text}</p>
                </div>
              ))
            }
          </div>
          {
            currentChat.messageHistory.length === 1 ?
              <div className='prompt-options'>
                <div className="suggestion">
                  <h2>Consigliato A</h2>
                  <p>dettagli sul prompt...</p>
                </div>
                <div className="suggestion">
                  <h2>Consigliato B</h2>
                  <p>dettagli sul prompt...</p>
                </div>
                <div className="suggestion">
                  <h2>Consigliato C</h2>
                  <p>Devo aggiungere</p>
                </div>
                <div className="suggestion">
                  <h2>Consigliato D</h2>
                  <p>questa funzione..</p>
                </div>
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