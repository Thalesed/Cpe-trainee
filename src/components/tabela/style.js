import styled from "styled-components";

export const Grid = styled.div`
  max-width: 650px;
  width: 80%;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 280px) {
    width: 50%;
  }
`;

export const ButtonLogin = styled.button`
  background-color: transparent;
  border: 0.6px solid #555;
  color: white;
  cursor: pointer;
  max-width: 100px;
  min-height: 30px;
  left: 100%;
  margin: 0;
`;

export const TabelaBox = styled.div`
  width: 100%;
  max-width: 650px;
  margin: 50px auto;
  border-radius: 27px;
  min-height: 100px;
  border: 2px solid #000000;
  background-color: rgb(77, 71, 71);
  overflow: hidden;

  @media (max-width: 280px) {
    width: 50%;
  }
`;

export const Titulo = styled.div`
  color: black;
  background-color: gold;
  width: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  justify-content: space-between;
  padding: 0 20px;
  @media (max-width: 280px) {
    max-height: 50px;
  }
  h3 {
    width: 25%;
    margin-left: 0;
  }
`;
