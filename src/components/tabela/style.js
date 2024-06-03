import styled from "styled-components";

export const Grid = styled.div`
  max-width:600px;
  width: 80%;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ButtonLogin = styled.button`
  background-color: transparent;
  border: 0.6px solid #555;
  color: white;
  cursor: pointer;
  max-width: 100px;
  min-height: 30px;
  left:100%;
  margin: 0;
`;

export const TabelaBox = styled.div`
  width: 100%; 
  max-width: 600px; 
  margin: 50px auto;
  border-radius: 27px;
  min-height: 100px;
  border: 2px solid #000000;
  background-color: rgb(77, 71, 71);
  overflow: hidden;
  
  @media (max-width: 768px) {
    width: 90%; 
  }

  .titulo {
    color: black;
    background-color: gold;
    width: auto;
    display: flex;
    justify-content: space-between;
    padding: 0 20px; 
  }
  @media (max-width: 768px) {
    .titulo {
        max-height: 50px;
    } 
  }


  .titulo h3 {
    margin-left: 0;
  }
`;


