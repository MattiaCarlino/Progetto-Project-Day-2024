import React from 'react'

export const Chat_bot = () => {
  return (
    <div className='main-chat-bot'>
      <div className='side-bar'>
        qua ci va in ordine:
          - link al componente della homepage account
          - tastino a lato per creare una nuova chat
          - elenco chat avute con il chat bot, ovviamente salvate in locale
          solo per la sessione corrente 
      </div>
      <div className='chat-bot-stream'>
        <div className='response-parts'>
          <div className='prompts_options'>

          </div>
          <div className='text-field'>

          </div>
          <div className='start-button'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat_bot;