import React, {useState} from 'react';
import {auth, db} from '../firebase'
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'

const SendMessage = ({scroll}) => {
    const [input, setInput] = useState('');
    const sendMessage = async (e) => {
        e.preventDefault()
        if (input === '') {
            alert('Please enter a valid message')
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

  return (
    <form onSubmit={sendMessage}>
        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Message' />
        <button type="submit"><FontAwesomeIcon icon={faPaperPlane} /></button>
    </form>
  )
}

export default SendMessage