import React from 'react';
import { Link } from 'react-router-dom';
import { MdAccountCircle } from 'react-icons/md';
import './Side_bar.css';

const Side_bar = ({chatList, setChatList, currentChat, setCurrentChat}) => {

  const newChat = () => {
    const id = chatList.length + 1;
    const newChat = {
      id: id,
      title: "Chat n. " + id,
      messageHistory: [
        {
          role: "model",
          parts: [{text: "Ciao! Sono School ChatBot. Come posso aiutarti?"}]
        }
      ]
    };
    setCurrentChat(newChat);
    setChatList([newChat, ...chatList]);
  }

  const openChat = (selectedChat) => {
    setCurrentChat(selectedChat);
  };

  return (
    <div className="side-bar">

        <div className='icon-container'>
            <Link to='../Homepage Account'>
                <MdAccountCircle className='user-icon' />
            </Link>
        </div>
        
        <div className="new-chat">
            <button className='chat-button' onClick={newChat}> Nuova chat </button>
        </div>

        <div className="chat-list">
          {
            chatList.map(chat => (
              <div key={chat.id}>
                <button className='chat-button' onClick={() => openChat(chat)}>{chat.title}</button>
              </div>
            ))
          }
        </div>

    </div>
  )
}

export default Side_bar;