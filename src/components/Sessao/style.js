import styled from "styled-components";

export const ContainerU = styled.div`
  height: 100%;
  width: 100%;
  justify-content: space-between;
  flex-direction: column;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  align-items: baseline;
  @media (max-width: 280px) {
    width: 50%;
  }
`;

export const ContainerD = styled.div`
  float: left;
  
`;

export const ContainerL = styled.div`
  float: center;
  
`;

export const ContainerT = styled.div`

`;

export const ContainerS = styled.div`
  display: flex;
  img{
    max-width: 20px;
    margin-left: 30%;
    cursor: pointer;
  }
`;


export const Tempo = styled.div`
  color: yellow;
  border-radius: 30px; /* Borda arredondada */
  border: 1px solid yellow; /* Adiciona uma borda */
  height: 100%;
  justify-content: space-between;
  gap: 5px;
  display: flex;
  align-items: center;
  min-width: 0px;
  width: 27%;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
`;

export const Nome = styled.div`
  height: 100%;
  font-weight: 500;
  justify-content: space-between;
  width: auto;
  display: flex;
  align-items: center;
  margin: 5px auto;
`;

export const Valor = styled.div`
  height: 100%;
  font-weight: 400;
  justify-content: space-between;

  display: flex;
  align-items: center;
  width: auto;
`;