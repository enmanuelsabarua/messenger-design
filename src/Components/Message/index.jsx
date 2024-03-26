import './Message.css';

const Message = ({ message, messages }) => {

    return (
        <div className='message'>
            <div className="message-content">
                {message.reply_to_id && (
                    <div className="message-content-bg-color message-content-reply" onClick={() => document.getElementById(messages[message.reply_to_id - 1].id).scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    })}>
                        <p className='message-sender'>{messages[message.reply_to_id - 1].sender_name}</p>
                        <p className='message-text'>{messages[message.reply_to_id - 1].message_text}</p>
                    </div>
                )}
                <div id={message.id} className="message-content-bg-color message-normal">
                    <p className='message-sender'>{message.sender_name}</p>
                    <p className='message-text'>{message.message_text}</p>
                </div>
            </div>
            <p className='message-date'>{new Date(message.message_date).toLocaleString("en-US")}</p>
        </div>
    )
}

export default Message;