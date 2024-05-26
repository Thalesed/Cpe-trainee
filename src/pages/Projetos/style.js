import styled from "styled-components";
import { Table, Space } from "antd";

export const Estrutura = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const Titulo = styled.h1`
    display: flex;
    align-items: center;
    font-size: 2rem;
    color: gold;
    text-transform: uppercase;
    

`
export const Input = styled.input`
    height: 40px;
    //justify-content: space-between;
    //width: 80%;
    display: flex;
    align-items: center;
    border: solid, 3px;
    border-color: white;
    border-radius: 27px;
    //margin: 0 auto;
    padding-left: 20px;
    font-weight: bold;
    font-size: 1rem;
    background-color: transparent;
    color: white;
    
        @media (max-width: 280px){
            height: 30px;
            font-size: 0.7rem;
        }
`
export const Div1 = styled.div`
    display: flex;
    flex-direction: row;
    height: 40px;
    justify-content: space-between;
    align-items: center;
    margin: 30px;

`
export const StyledTable = styled(Table)`
    background-color: white;
`;
export const StyledSpace = styled(Space)`
    background-color: transparent;
    color: transparent;
`;