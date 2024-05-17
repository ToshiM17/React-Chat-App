import React, {useState} from 'react';
import {auth, db} from '../firebase'
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import PopUpBox from './PopUpBox';

const SendMessage = ({scroll}) => {
    const [input, setInput] = useState('');
    const sendMessage = async (e) => {
        e.preventDefault()
        if (input === '') {
            open('Please enter a valid message');
            return
        }
        const {uid, displayName} = auth.currentUser
        await addDoc(collection(db, 'messages'), {
            text: input,
            name: displayName,
            uid,
            timestamp: serverTimestamp()
        })
        setInput('')
        scroll.current.scrollIntoView({behavior: 'smooth'})
      }
    const [popUp, setPopUp] = useState(null);
    const open = (message) => {
        setPopUp(<PopUpBox message={message} close={close} />);
    };
    const close = () => {
        setPopUp(null);
    };

  return (
    <form onSubmit={sendMessage}>
        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Message' />
        <button type="submit"><FontAwesomeIcon icon={faPaperPlane} /></button>
        {popUp}
    </form>
  )
}

export default SendMessage