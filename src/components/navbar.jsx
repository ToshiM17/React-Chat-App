import React from 'react'
import {auth} from '../firebase.js'
import {useAuthState} from 'react-firebase-hooks/auth'
import SignIn from './signin.jsx'
import Logout from './logout.jsx'

const Navbar = () => {
  const [user] = useAuthState(auth)
  return (
    <div className='nav'>
      ChatApp
      {user ? <Logout /> : <SignIn />}
    </div>
  )
}

export default Navbar