import React from 'react';
import Room from "./Room";
import {getData} from "./ajaxReq";
import {NavLink} from "react-router-dom";

export default class Rooms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
        };
    }

    componentDidMount() {
        getData('http://localhost:6060/api/').then(rooms => this.setState({rooms: rooms.chats}));
    }

    render() {
        const {rooms} = this.state;
        return (
            <div className='rooms-container'>
                {rooms.map(room => <NavLink to={`/messages/${room.id}`}><Room key={room.id} {...room}/></NavLink>)}
            </div>
        );
    }
}