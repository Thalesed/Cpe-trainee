import React from 'react';
import logo from './cpe_logo.svg';

import { HeaderStyle, Logo} from "./style";

const Header = () => {
  return (
    <HeaderStyle>
    <header>
      <Logo>
        <img src={logo} className="App-logo" alt="logo" />
      </Logo>
    </header>
    </HeaderStyle>
  );
};

export default Header;