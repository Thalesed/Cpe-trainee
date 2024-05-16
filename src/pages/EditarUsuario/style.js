import styled from "styled-components"

export var alturaJanela = window.innerHeight;

export const InputBox = styled.div`
    height: 230px;
    max-width: 400px;
    background-color: rgba(66, 67, 68, 0.562);
    display: flex; 
    flex-direction: column;
    align-items: center; 
    justify-content: center; 
    margin: auto; 
    border-radius: 27px;
    border: 2px solid #000000;

    @media (max-width: 300px){
        height: 7px;
        width: 100%;
        display: flex;
        align-items: center;
        margin-top: ${alturaJanela * 0.08}px;
    }
`;

export const DivBotao = styled.div`
    height: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${alturaJanela * 0.08}px;

    @media (max-width: 300px){
        height: 7px;
        width: 100%;
        display: flex;
        align-items: center;
        margin-top: ${alturaJanela * 0.08}px;

    }
`;