import './Message.css';

const Message = ({ message }) => {
    return (
        <div className='message'>
            <div className="message-content">
                <p className='message-sender'>{message.sender_name}</p>
                <p className='message-text'>{message.message_text}</p>
            </div>
            <p className='message-date'>{new Date(message.message_date).toLocaleString("en-US")}</p>
        </div>
    )
}

export default Message;