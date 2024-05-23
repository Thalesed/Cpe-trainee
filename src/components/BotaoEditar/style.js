import styled from "styled-components"

export var alturaJanela = window.innerHeight;

export const BotaoS = styled.button`
    height: 50px;
    width: 250px;
    color: gold;
    background-color: black;
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 0px;
    border-radius: 17px;
    margin: 5px 7px;
    border-color: gold;
    transition: all 0.6s ease;
    cursor: pointer;

    &:hover{
        transform: scale(1.2);
        background-color: gold;
        color: black;
    }

    @media (max-width: 300px){
        height: 5vb;
        width: 17vh;
        font-size: 0.8rem;
        font-weight: bold;
        text-transform: uppercase;
        margin-top: 0px;
        border-radius: 17px;
        margin: auto 2px;
    }

`;




