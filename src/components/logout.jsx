import React from 'react'
import { auth } from '../firebase.js'

const LogOut = () => {
    const signOut = () => {
      auth.signOut()
    }
  return (
    <button onClick={signOut} className='logOut'>
        logout
    </button>
  )
}

export default LogOut