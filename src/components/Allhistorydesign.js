import React from 'react'
import Avatar from './Avatar'
import Details from './Details'
import style from '../styles/Allhistorydesign.module.css'


const time = new Date().getTime()

function Allhistory(props) {
  return (
    <div>
      <div className={style.card}>
        <div className={style.top}>
          <Avatar img={props.img} />
        </div>
        <div className={style.bottom}>
          <Details name={props.name.toUpperCase()} />
          <Details title={props.title} />
        </div>
        <div>
          <p className={style.timepara}>{time}</p>
        </div>
      </div>
      <hr/>
    </div>
    
  )
}

export default Allhistory
