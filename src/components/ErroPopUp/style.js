import styled from "styled-components"

export var alturaJanela = window.innerHeight;

export const ErrorPopup = styled.div`
  position: fixed;
  width: 300px;
  height: 200px;
  background-color: black;
  color: gold;
  border: 5px solid gold;
  border-radius: 18px;
  display: ${(props) => (props.aberto ? "block" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 350px) {
    width: 200px;
    height: 180px;
  }
`;

export const PopupItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ErroMensagem = styled.p`
  margin-top: 20px;
  font-size: 1.25rem;

  @media (max-width: 350px) {
    font-size: 1rem;
  }
`;

export const ButtonErro = styled.button`
  height: 40px;
  width: 150px;
  color: black;
  background-color: gold;
  font-size: 1rem;
  margin: 10px;
  border-radius: 17px;

  @media (max-width: 350px) {
    width: 75px;
    height: 30px;
    font-size: 0.8rem;
  }
`;