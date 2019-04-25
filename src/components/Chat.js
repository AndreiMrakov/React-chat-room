import React from 'react';
import {Link} from "react-router-dom";

function Chat (props) {
    return (
        <div className='msg-container' >
            <div className='chatroom-header'><Link to='/messages/' className='back-to-dialogs'>Back</Link></div>
            {props.messages.map((message, index) => <p className='chat-msg' key={index}>{message.text}</p>)}
        </div>
    );
}

export default Chat;