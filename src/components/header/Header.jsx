import React from 'react';
import logo from './cpe_logo.svg';

import { HeaderStyle} from "./style";

const Header = () => {
  return (
    <HeaderStyle>
    <header>
        <img className="cpe-logo" src={logo} alt="logo" />
    </header>
    </HeaderStyle>
  );
};

export default Header;