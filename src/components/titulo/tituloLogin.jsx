import React from 'react';
import { TituloL } from '../../pages/Login/style';

const TituloLogin = ({tituloStr}) => {
    return (
        <>
        <TituloL>
            {tituloStr}
        </TituloL>
        
        </>
    );
}

export default TituloLogin;