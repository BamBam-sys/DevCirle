import React from 'react'
import closeIcon from '../../Icons/closeIcon.png'
import onlineIcon from '../../Icons/onlineIcon.png'
import style from '../styles/InfoBar.module.css'


function InfoBar ({ room }) {
  return (
    <div className={style.infoBar}>
      <div className={style.leftInnerContainer}>
        <img className={style.onlineIcon} src={onlineIcon} alt='online' />
        <h3>{room}</h3>
      </div>
      <div className={style.rightInnerContainer}>
        <a href='/'>
          <img className={style.closeIcon}src={closeIcon} alt='close' />
        </a>
      </div>
    </div>
  )
}

export default InfoBar
