import { useState } from 'react';
import './MessagesList.css';
import { useEffect } from 'react';
import axios from 'axios';
import Message from '../Message';

const MessagesList = () => {
    const [messages, setMessages] = useState([]);
    const [filteredMessages, setFilteredMessages] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all messages');

    useEffect(() => {
        axios
            .get('http://www.app.readychatai.com/data')
            .then(res => { setMessages(res.data); setFilteredMessages(res.data); })
            .catch(error => setMessages(error));
    }, []);

    const platformObject = {}

    messages.map((message, index) => {
        platformObject[message.platform] = index;
    });

    const uniquePlatformArr = Object.keys(platformObject);

    const changeCategory = category => {
        console.log(messages);
        if (category === 'all messages') {
            setFilteredMessages(messages);
        } else {
            const newMessages = messages.filter(message => message.platform === category);
            setFilteredMessages(newMessages);
        }
        setSelectedCategory(category);
    }


    return (
        <div className='message-list'>
            <h1>Messages</h1>
            <nav className='navbar'>
                <a onClick={() => changeCategory('all messages')} className={selectedCategory === 'all messages' ? 'selected-category' : null}>All messages</a>
                {uniquePlatformArr.map(platform => <a key={platform} onClick={() => changeCategory(platform)} className={selectedCategory === platform ? 'selected-category' : null} >{platform}</a>)}
            </nav>
            {filteredMessages.map(message => <Message key={message.id} message={message} messages={messages} selectedCategory={selectedCategory} setSelectedCategory={changeCategory} />)}
        </div>
    )
}

export default MessagesList;