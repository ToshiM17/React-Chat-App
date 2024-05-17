import React from 'react'
import { auth } from '../firebase.js'
import { Link } from 'react-router-dom'

const LogOut = () => {
    const signOut = () => {
      auth.signOut()
    }
  return (
    <Link to="/" onClick={signOut} className='logOut'>
        Logout
    </Link>
  )
}

export default LogOut