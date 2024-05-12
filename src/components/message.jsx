import React from 'react'
import {auth} from '../firebase'

const message = ({message}) => {
    const messageClass = message.uid === auth.currentUser.uid ? 'sent' : 'received'
  return (
    <div className={`${messageClass} message`}>
        <p className='name'>{message.name}</p>
        <p className='text'>{message.text}</p>
    </div>
  )
}

export default message