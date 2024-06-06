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
export const Div2 = styled.tr`
  display: flex;
  flex-direction: row;
  height: 40px;
  width: 280px;
  justify-content: space-between;
  align-items: center;
  margin: ${alturaJanela * 0.05}px;
  margin-left: 20px;
  font-size: 1.2rem;
  @media (max-width: 350px) {
    max-width: 200px;
    font-size: 1rem;
  }
`;
export const ConfirmaPopup = styled.div`
  position: fixed;
  width: 300px;
  height: 200px;
  background-color: white;
  color: black;
  border: 5px solid white;
  border-radius: 18px;
  display: ${(props) => (props.aberto ? "block" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 350px) {
    width: 250px;
    height: 180px;
  }
`;

export const PopupItem = styled.div`
  height: 25px, auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MensagemPrincipal = styled.h1`
  text-shadow: black;
  margin-top: 20px;
  font-size: 1.25rem;

  @media (max-width: 350px) {
    font-size: 1rem;
  }
`;

export const Mensagem = styled.p`
  margin-top: 20px;
  font-size: 1rem;
  text-align: center;

  @media (max-width: 350px) {
    font-size: 1rem;
  }
`;
export const BotaoConfirma = styled.button`
  height: 30px;
  width: 150px;
  color: gold;
  background-color: white;
  font-size: 1rem;
  text-transform: uppercase;
  margin: 10px;
  border-color: gold;
  border: 5px, bold;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    color: white;
    border-color: white;
    background-color: gold;
    font-weight: bold;
  }

  @media (max-width: 350px) {
    width: 75px;
    height: 25px;
    font-size: 0.7rem;
  }
`;

export const InputsStyle = styled.div`
  height: auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  margin-right: 10%;
`;

export const InputPopup = styled.input`
  height: 20px;
  line-height: 70px;
  display: flex;
  border: solid, 1px;
  border-color: black;
  border-radius: 5px;
  font-weight: bold;
  font-size: 0.75rem;
  text-align: initial;
  text-align: left;
  padding-left: 5px;

  @media (max-width: 350px) {
  }
`;

export const EditaPopup = styled.div`
  position: fixed;
  width: 300px;
  height: 340px;
  background-color: white;
  color: black;
  border: 5px solid white;
  border-radius: 18px;
  display: ${(props) => (props.aberto ? "block" : "none")};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 350px) {
    width: 250px;
    height: 300px;
  }
`;

export const MensagemInput = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  display: flex;
  margin-top: 20px;
  font-size: 1rem;
  background-color: white;

  @media (max-width: 350px) {
    font-size: 1rem;
    margin-top: 20px;
  }
`;
