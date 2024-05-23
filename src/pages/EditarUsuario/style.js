import styled from "styled-components"

export var alturaJanela = window.innerHeight;

export const InputBox = styled.div`
    color: gold;
    height: 180px;
    max-width: 500px;
    background-color: rgba(66, 67, 68, 0.562);
    display: flex; 
    flex-direction: column;
    align-items: center; 
    justify-content: center; 
    margin: 10px auto 70px; 
    border-radius: 9px;
    border: 2px solid #000000;

    @media (max-width: 300px){
        height: 3hv;
        width: 7hv;
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
