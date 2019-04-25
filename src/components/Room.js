import React from 'react';
const Room = (props) => {
    return (
        <div className='room-container'>
            {props.name}
        </div>
    );
};

export default Room;