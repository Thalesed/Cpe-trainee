import styled from "styled-components";

export var alturaJanela = window.innerHeight;

export const Estrutura = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Titulo = styled.h1`
  margin-top: 30px;
  display: flex;
  align-items: center;
  font-size: 2rem;
  color: gold;
  text-transform: uppercase;
  @media (max-width: 350px) {
    font-size: 1.5rem;
  }
`;
export const Input = styled.input`
  height: 40px;
  width: 75%;
  display: flex;
  align-items: center;
  border: solid, 3px;
  border-color: white;
  border-radius: 27px;
  padding-left: 20px;
  font-weight: bold;
  font-size: 1rem;
  background-color: transparent;
  color: white;

  @media (max-width: 350px) {
    width: 75%;
  }
`;
export const Div1 = styled.div`
  //background-color: gray;
  max-width: 500px;
  display: flex;
  flex-direction: row;
  height: 40px;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 30px;

  @media (max-width: 350px) {
    max-width: 250px;
  }
`;
export const Div2 = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  width: 280px;
  justify-content: space-between;
  align-items: center;
  margin: ${alturaJanela * 0.05}px;
  margin-left: 20px;
  font-size: 1.5rem;
  @media (max-width: 350px) {
    max-width: 200px;
  }
`;
export const Div3 = styled.div``;
