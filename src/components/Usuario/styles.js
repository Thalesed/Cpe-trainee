import styled from "styled-components";

export const ContainerU = styled.div`
  height: 100%;
  width: 100%;
  justify-content: space-between;
  flex-direction: column;
  display: flex;
  align-items: baseline;
  @media (max-width: 280px) {
    width: 50%;
  }
`;
export const Dados = styled.div`
  height: 100%;
  width: auto;
  justify-content: space-between;
  gap: 5px;
  display: flex;
  align-items: center;
`;
export const Dado = styled.div`
  height: 100%;
  font-weight: 400;
  justify-content: space-between;
  gap: 5px;
  display: flex;
  align-items: center;
  width: auto;
  color: yellow;
`;
export const Dado2 = styled.div`
  height: 100%;
  font-weight: 400;
  justify-content: space-between;
  gap: 5px;
  display: flex;
  align-items: center;
  width: auto;
`;
export const ContainerL = styled.div`
  height: 100%;
  gap: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-direction: row;
`;
export const TempoEntrada = styled.div`
  color: yellow;
  margin-right: 150px;
  border-radius: 30px; /* Borda arredondada */
  border: 1px solid yellow; /* Adiciona uma borda */
  height: 100%;
  justify-content: space-between;
  gap: 5px;
  display: flex;
  align-items: center;
  width: auto;
  padding-left: 10px;
  padding-right: 10px;
`;
export const TempoLogado = styled.div`
  color: yellow;
  border-radius: 30px; /* Borda arredondada */
  border: 1px solid yellow; /* Adiciona uma borda */
  height: 100%;
  justify-content: space-between;
  gap: 5px;
  display: flex;
  align-items: center;
  width: auto;
  padding-left: 10px;
  padding-right: 10px;
`;
export const ContainerT = styled.div`
  height: 100%;
  justify-content: space-between;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const ContainerD = styled.div`
  display: flex;
  gap: 1rem;
`;
export const Nome = styled.div`
  height: 100%;
  font-weight: 500;
  justify-content: space-between;
  width: auto;
  display: flex;
  align-items: center;
`;
export const Valor = styled.div`
  height: 100%;
  color: yellow;
  font-weight: 400;
  justify-content: space-between;

  display: flex;
  align-items: center;
  width: auto;
`;
export const Valor2 = styled.div`
  height: 100%;
  font-weight: 400;
  justify-content: space-between;

  display: flex;
  align-items: center;
  width: auto;
`;
