import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as TiIcons from 'react-icons/ti'
// import "./Join.css";

function Join () {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')

  return (
    <div>
      <div>
        <h3>Profile Page</h3>
        <h3>Join</h3>
        <div>
          <input
            placeholder='Name'
            className='join-input'
            type='text'
            required
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder='Room'
            className='join-input mt-20'
            type='text'
            required
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <TiIcons.TiMessages className='msg-icon' />
        </Link>
      </div>
    </div>
  )
}

export default Join
