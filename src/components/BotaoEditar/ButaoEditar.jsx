import React from 'react';
import { BotaoS} from './style';

const BotaoCadastro = ({text, handleClick}) => {
    return (
        <>
        
                <BotaoS onClick={handleClick}>
                    {text}
                </BotaoS> 
            
        </>
    );
}

export default BotaoCadastro;