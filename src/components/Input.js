import React from 'react'
import style from '../styles/Input.module.css'


function Input ({ message, setMessage, sendMessage }) {
  return (
    <form className={style.form}>
      <input
        className={style.input}
        type='text'
        placeholder='Type a message...'
        value={message}
        // onChange={(event) => setMessage(event.target.value)}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null}
      />
      <button className={style.sendButton} onClick={(event) => sendMessage(event)}>
        Send
      </button>
    </form>
  )
}

export default Input
