// src/pages/Header.js

import React from 'react';
import '../styles/header.css';
import logo from '../assets/cpe_logo.svg';
import lampada from '../assets/lampada.svg';

const Header = () => {
  return (
    <header>
        <div className="image-container">
            <img src={lampada} className="App-logo-lampada" alt="lampada" />
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    </header>
  );
};

export default Header;
