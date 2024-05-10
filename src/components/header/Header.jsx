import React from 'react';
import logo from './cpe_logo.svg';

import { HeaderStyle} from "./style";

const Header = () => {
  return (
    <HeaderStyle>
    <header>
        <img src={logo} className="App-logo" alt="logo" />
    </header>
    </HeaderStyle>
  );
};

export default Header;