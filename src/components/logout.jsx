import React from 'react'
import { auth } from '../firebase.js'

const LogOut = () => {
    const signOut = () => {
      auth.signOut()
    }
  return (
    <button onClick={signOut} className='logOut'>
        Logout
    </button>
  )
}

export default LogOut