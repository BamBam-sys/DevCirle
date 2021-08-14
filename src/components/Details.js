import React from 'react'
import style from '../styles/Details.module.css'

function Details(props) {
  return (
    <div>
      <p className={style.infoname}>{props.name}</p>
      <p className={style.infotitle}>{props.title}</p>
    </div>
  )
}

export default Details
