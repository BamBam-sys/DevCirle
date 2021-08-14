import React from 'react'
import Message from '../Message/Message'
import ScrollToBottom from 'react-scroll-to-bottom'
import style from '../styles/Messages.module.css'


function Messages ({ messages, name }) {
  return (
    <ScrollToBottom className={style.messages}>
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  )
}

export default Messages
