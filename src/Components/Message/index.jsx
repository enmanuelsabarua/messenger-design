import './Message.css';

const Message = ({ message }) => {
    return (
        <div>
            <p>{message.message_text}</p>
        </div>
    )
}

export default Message;