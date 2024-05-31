import styled from "styled-components";

export var alturaJanela = window.innerHeight;

//email e senha estilizado
export const Input = styled.input`
  height: 40px;
  justify-content: space-between;
  width: 100%;
  display: flex;
  align-items: center;
  border: solid;
  border-radius: 27px;
  margin: 0 auto;
  padding-left: 20px;
  font-weight: bold;
  font-size: 1rem;

  @media (max-width: 280px) {
    height: 30px;
    font-size: 0.7rem;
  }
`;

//Título Login
export const TituloL = styled.div`
  margin-top: 20px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.5rem;
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
//Botão Entrar
export const Button = styled.button`
  height: 50px;
  width: 200px;
  color: black;
  background-color: gold;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 0px;
  border-radius: 17px;
  margin: auto;

  @media (max-width: 400px) {
    height: 35px;
    width: 120px;
    font-size: 0.8rem;
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

export const divt = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;

//NÃO TEM CONTA? FAÇA AQUI...
export const Container = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-self: center;
  width: 70%;
  text-align: center;
  padding: 0 20px;
  opacity: ${(props) => (props.ErroLogin ? "40%" : "100%")};

  > form {
    min-height: 40vh;
    width: 80%;
    gap: 20px;
    display: flex;
    flex-direction: column;
    padding-top: 80px;

    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: 280px) {
    padding: 0 10px;
  }
`;
export const HighlightLink = styled.span`
  color: yellow; /* Destaca a palavra "aqui" em amarelo */
  cursor: pointer; /* Muda o cursor para indicar que é clicável */
  text-decoration: none; /* Remove o sublinhado padrão */

  &:hover {
    text-decoration: underline; /* Adiciona sublinhado ao passar o mouse */
  }
`;
export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 80px;
`;
export const Carregando = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px;
  color: gold;
`;

export const Campo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;
  width: 80%;
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
