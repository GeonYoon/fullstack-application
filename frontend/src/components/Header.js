import React from 'react';
import logo from '../assets/logo-sf-small.png'
import './css/header.css';

const Header = () => {
    return (
        <div className="title">
            <img className="logo" src={logo} alt="Not Found" />
            <span className="text">MESSAGE VIEWER</span>
        </div>          
    );
};

export default Header;