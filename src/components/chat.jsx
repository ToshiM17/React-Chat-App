import React, {useState, useEffect, useRef} from 'react'
import Message from './message'
import SendMessage from './SendMessage'
import {db} from '../firebase'
import {query, collection, orderBy, onSnapshot} from 'firebase/firestore'

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const scroll = useRef();

    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('timestamp'))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const messages = [];
            querySnapshot.forEach((doc) => {
                messages.push({...doc.data(), id: doc.id})
            });
            setMessages(messages)
        })
        return () => unsubscribe()
    }, [])
    useEffect(() => {
        scroll.current.scrollIntoView({behavior: 'smooth'})
    }, [messages])

  return (
    <>
        <main>
            {messages && messages.map((message) => (
                <Message key={message.id} message={message} />
            ))}
            <span ref={scroll}></span>
        </main>
        <SendMessage scroll={scroll} />
    </>
  )
}

export default Chat
