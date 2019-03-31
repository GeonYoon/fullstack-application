import React from 'react';
import logo from './logo-sf-small.png'
import './css/header.css';


const Header = () => {
    return (
        <div className="title">
            <img className="logo" src={logo} />
            <span className="text">MESSAGE VIEWER</span>
        </div>          
    );
};

export default Header;