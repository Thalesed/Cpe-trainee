import styled from "styled-components"

export var alturaJanela = window.innerHeight;

export const BotaoS = styled.button`
    height: 50px;
    width: 250px;
    color: black;
    background-color: gold;
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 0px;
    border-radius: 17px;
    margin: 5px 7px;

    @media (max-width: 300px){
        height: 8vh;
        width: 25vh;
        color: black;
        background-color: gold;
        font-size: 0.8rem;
        font-weight: bold;
        text-transform: uppercase;
        margin-top: 0px;
        border-radius: 17px;
        margin: auto;
    }

`;



