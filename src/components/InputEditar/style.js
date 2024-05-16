import styled from "styled-components"

export var alturaJanela = window.innerHeight;

export const InputStyle = styled.input`
    height: 40px;
    width: 50%;
    display: flex;
    align-items: center;
    border: solid;
    border-radius: 27px;
    margin: 0 auto;
    padding-left: 20px;
    font-weight: bold;
    font-size: 1rem;
    
        @media (max-width: 300px){
            height: 30px;
            font-size: 0.7rem;
        }

`;

export const DivInput = styled.div`
    height: 10px;
    width: 100%;
    display: flex;
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