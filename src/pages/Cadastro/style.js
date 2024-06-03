import styled from "styled-components";

export var alturaJanela = window.innerHeight;

export const InputStyle = styled.input`
    border: ${(props) => (props?.error ? '1px solid red' : '1px solid black')};
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

  @media (max-width: 300px) {
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

  @media (max-width: 300px) {
    height: 7px;
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: ${alturaJanela * 0.08}px;
  }
`;

export const TituloC = styled.div`
  margin-top: 20px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.7rem;
  color: gold;
  text-align: center;

  @media (max-width: 300px) {
    margin-top: 20px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.2rem;
    color: gold;
    text-align: center;
  }
`;

export const Botão = styled.button`
  height: 50px;
  width: 250px;
  color: black;
  background-color: gold;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 0px;
  border-radius: 17px;
  margin: auto;
  cursor: pointer;

  @media (max-width: 300px) {
    height: 35px;
    width: 120px;
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

export const Fundo = styled.image`
  margin-right: 0px;
  margin-top: 100%;
  opacity: 70%;
`;

export const Voltar = styled.button`
  height: 50px;
  width: 50px;
  background-color: gold;
  border-color: black;
  border-radius: 100%;
  display: flex;
  margin-right: 1px;
  margin-top: 0px;
  font-size: 2rem;
  //padding: auto;
`;
