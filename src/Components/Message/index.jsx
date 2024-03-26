import './Message.css';

const Message = ({ message, messages, selectedCategory, setSelectedCategory }) => {

    const manageReplyMessage = () => {
        if (selectedCategory !== messages[message.reply_to_id - 1].platform && selectedCategory !== 'all messages') {
            setSelectedCategory(messages[message.reply_to_id - 1].platform)
        }
        document.getElementById(messages[message.reply_to_id - 1].id).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }

    return (
        <div className='message'>
            <div>
                {message.reply_to_id && (
                    <div className={`message-content message-content-reply ${message.platform}`} onClick={manageReplyMessage}>
                        <p className='message-sender'>{messages[message.reply_to_id - 1].sender_name}</p>
                        <p className='message-text'>{messages[message.reply_to_id - 1].message_text}</p>
                        <p className='platform'>{messages[message.reply_to_id - 1].platform}</p>
                    </div>
                )}
                <div id={message.id} className={`message-content message-normal ${message.platform}`}>
                    <p className='message-sender'>{message.sender_name}</p>
                    <p className='message-text'>{message.message_text}</p>
                    <p className='platform'>{message.platform}</p>
                </div>
            </div>
            <p className='message-date'>{new Date(message.message_date).toLocaleString("en-US")}</p>
        </div >
    )
}

export default Message;