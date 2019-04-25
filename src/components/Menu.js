import React from 'react';
import {NavLink} from "react-router-dom";

const Menu = (props) => {
    return (
        <div className='nav-container'>
            <NavLink exact className='nav-item' to='/'>Profile</NavLink>
            <NavLink className='nav-item' to='/news/'>News</NavLink>
            <NavLink className='nav-item' to='/messages/'>Messages</NavLink>
            <NavLink className='nav-item' to='/gallery/'>Gallery</NavLink>
        </div>
    );
};

export default Menu;