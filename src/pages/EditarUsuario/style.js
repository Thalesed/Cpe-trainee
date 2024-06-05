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