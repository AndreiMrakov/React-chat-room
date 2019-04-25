import React from 'react';
import Chat from "./Chat";
import PostMessage from "./PostMessage";
import {getData} from "./ajaxReq";

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            roomId: null,
        };
        this.getMessage = this.getMessage.bind(this);
    }

    getMessage(roomId) {
        getData(`http://localhost:6060/api/${roomId}/messages/`)
            .then(messages => {
                this.setState({messages: messages, roomId: roomId});
            })
    }

    componentDidMount() {
        this.getMessage(this.props.match.params.roomId);
    }

    render() {
        return (
            <div className='chat-container'>
                {
                    this.state.roomId &&
                    [<Chat messages={this.state.messages}/>, <PostMessage room={this.state.roomId} update={this.getMessage}/>]
                }
            </div>

        );
    }
}

export default Message;