import styled from "styled-components";

export const Titulo = styled.header`
    background-color: rgba(37, 35, 35);
    height: 12%;
    display: flex;
    align-items: center;
    text-align: left;
    font-size: 1.2em;
    text{
        margin-left: 10px;
    }

    
`;

export const Rodape = styled.footer`
    width: 100%;
    background-color: rgba(37, 35, 35);
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: right;
    justify-content: right;
    padding-top: 3px;
`;
export const YButton = styled.button`
    border:none;
    background-color: gold;
    color: black;
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3px;
    cursor: pointer;
`;

export const TButton = styled.button`
    border: 0.5px solid gray;
    background-color: transparent;
    color: white;
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3px;
    cursor: pointer;
`;


export const Grid = styled.div`
    display: none;
    max-width: 512px;
    max-height: 600px;
    min-height: 440px;
    min-width: 80px;
    width: 60%;
    height: 95%;
    text-align: left;
    float: center;
    position: fixed;
    top: 1%;
    left: 30vw;
    align-items: center;

    background-color: rgba(25, 25, 25);

    @media (max-width: 600px) {
        font-size: 0.7em;
        left:0px;
        margin: 15px;
        width: 90vw;

        button{
            width: 30%;
            height: 30%;
        }
        textarea{
            height: 60%;
            font-size: 1.2em;
        }
        select{
            height: 80%;
            font-size: 1em;
        }
    }
`

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

