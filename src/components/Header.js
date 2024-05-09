// src/components/Header.js

import React from 'react';
import '../styles/header.css';
import logo from '../assets/cpe_logo.svg';


const Header = () => {
  return (
    <header>
            <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
};

export default Header;
