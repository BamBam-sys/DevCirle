import React from 'react'
import style from '../styles/Message.module.css'

import Emoji from 'react-emoji'

function Message ({ message: { user, text }, name }) {
  let sentByCurrentUser = false

  const trimmedName = name.trim().toLowerCase()

  if (user === trimmedName) {
    sentByCurrentUser = true
  }

  const option1 = (
    <div className={style.messageContianer}>
      <p className={style.sentText}>{trimmedName}</p>
      <div className={style.messageBox}>
        <p className={style.messageText}>{Emoji.emojify(text)}</p>
      </div>
    </div>
  )

  const option2 = (
    <div className={style.messageContianerr}>
      <div className={style.messageBoxx}>
        <p className={style.messageTextt}>{Emoji.emojify(text)}</p>
      </div>
      <p className={style.sentTextt}>{user}</p>
    </div>
  )

  

  return sentByCurrentUser ? option1 : option2
}

export default Message
