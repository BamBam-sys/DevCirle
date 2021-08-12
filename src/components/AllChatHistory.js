import React from 'react'
import { useEffect, useContext, useState, useParams } from 'react'
import { io } from 'socket.io-client'
import styles from '../styles/allChatHistory.module.css'
import { FaSearch } from 'react-icons/fa'
import getChatsAPI from '../api/getChatsAPI'
import Avatar from './Avatar'

const socket = io(`http://localhost:6000`)

export const AllChatHistory = () => {
  const [allChats, setAllChats] = useState([])
  const [isLoading, setLoading] = useState(false)
  var { userId } = useParams

  const fetchAllChats = async (data) => {
    //supply current logged in user here
    setLoading(true)
    let response = await getChatsAPI.get(`users/${userId}`) //await
    setAllChats(response.data.data.messages)
    setLoading(false)
    console.log(data)
  }

  const appendChat = async (data, userIsReceiver) => {
    const { senderId, receiverId } = data
    let chats = allChats.filter((item) => {
      if (userIsReceiver) {
        return item.id !== senderId
      } else {
        return item.id !== receiverId
      }
    })
    setAllChats([...chats, data])
    console.log('appendChat')
  }

  useEffect(() => {
    //fetch from allChats/db

    socket.on('connected', () => {
      //When user reconnects set state with chat history from DB
      fetchAllChats()
    })
    console.log('useEffect')

    socket.on('newMessage', (data) => {
      const userIsReceiver = true
      //add most recent message to state
      appendChat(data, userIsReceiver) //pass data here
      console.log('new message')
    })

    socket.on('sendMessage', (data) => {
      const userIsReceiver = false
      appendChat(data, userIsReceiver)
    })
  }, [allChats])

  return (
    <div className={styles.Container}>
      <h1 className={styles.icons}>
        <b>Chats</b>
      </h1>
      <form className={styles.example}>
        <input type='username' />
        <button type='submit'>
          <FaSearch />
        </button>
      </form>
      {[...allChats].reverse().map((item, index) => {
        return (
          <div key={index}>
            <div className={styles.row}>
              <img src={null} alt='paschal' className={styles.circle} />
              <div className={styles.pillow}>
                <h3>
                  <b>Al-ameen Sodiq</b>
                </h3>
                <h4>Full-Stack Developer</h4>
              </div>
              <h4 className={styles.bed}>11:30p.m</h4>
            </div>
            <div>{item.id}</div>
            {/* <Avatar id={userId}/>       Avatar component to be done */}
          </div>
        )
      })}
    </div>
  )
}
