import { useState } from 'react';
import './MessagesList.css';
import { useEffect } from 'react';
import axios from 'axios';
import Message from '../Message';

const MessagesList = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        axios
            .get('https://www.dev.readychatai.com/messages_json')
            .then(res => setMessages(res.data))
            .catch(error => setMessages(error));
    }, []);

    return (
        <div>
            {messages.map(message => <Message key={message.id} message={message} />)}
        </div>
    )
}

export default MessagesList;