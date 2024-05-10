import React from 'react'
import Navbar from './navbar';
import Chat from './chat';
import {auth} from '../firebase.js';
import {useAuthState} from 'react-firebase-hooks/auth';

const Main = () => {
    const [user] = useAuthState(auth);
  return (
    <div className="App">
      <Navbar />
      {user ? <Chat /> : null}
    </div>
  )
}

export default Main