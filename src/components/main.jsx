import React from 'react'
import SignIn from './signin';
import {Link} from 'react-router-dom';
import Chat from './chat';
import {auth} from '../firebase.js';
import {useAuthState} from 'react-firebase-hooks/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import SignInMessage from './SignInMessage.jsx';

const Main = () => {
    const [user] = useAuthState(auth);
  return (
    <div className="App">
      <div className='nav'>
        ChatApp
        {user ? <Link to="/settings" className='link'><FontAwesomeIcon icon={faGear} /></Link> : <SignIn />}
      </div>
      {user ? <Chat /> : <SignInMessage />}
    </div>
  )
}

export default Main