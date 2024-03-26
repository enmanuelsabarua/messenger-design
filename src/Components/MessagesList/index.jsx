import { useState } from 'react';
import './MessagesList.css';
import { useEffect } from 'react';
import axios from 'axios';
import Message from '../Message';

const MessagesList = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        axios
            .get('http://www.app.readychatai.com/data')
            .then(res => setMessages(res.data))
            .catch(error => setMessages(error));
    }, []);

    return (
        <div className='message-list'>
            <h1>Messages</h1>
            {messages.map(message => <Message key={message.id} message={message} messages={messages} />)}
        </div>
    )
}

export default MessagesList;