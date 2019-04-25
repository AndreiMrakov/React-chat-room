import React, {Component} from 'react';
import {postData} from "./ajaxReq";

class PostMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    handleChange(e) {
        this.setState({message: e.target.value});
    }

    sendMessage(e) {
        e.preventDefault();
        let newMessage = {
            text: this.state.message,
            roomId: this.props.room,
            userId: 322,
        };
        postData(`http://localhost:6060/api/addmessage`, JSON.stringify(newMessage))
            .then(resp => {
                this.props.update(this.props.room);
                this.setState({message: ''});
            });
    }

    render() {
        return (
            <div className='post-msg-container'>
                <form className='post-msg-form' onSubmit={this.sendMessage}>
                    <input type="text" onChange={this.handleChange} value={this.state.message} placeholder="Write text..." />
                    <button className='send-btn'>Send</button>
                </form>
            </div>
        );
    }
}

export default PostMessage;