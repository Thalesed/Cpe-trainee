import styled from "styled-components";

export const ContainerU = styled.div`
  height: 100%;
  width: 100%;
  justify-content: space-between;
  flex-direction: column;
  display: flex;
  align-items: baseline;
  gap: 5px;
  padding: 5px;
  grid-template-columns: repeat(3, 1fr); /* Cria 3 colunas de largura igual */
`;
export const Dados = styled.div`
  height: 100%;
  width: auto;
  grid-template-columns: repeat(3, 1fr); /* Cria 3 colunas de largura igual */
  justify-content: space-between;
  gap: 20px;
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
  grid-template-columns: repeat(3, 1fr); /* Cria 3 colunas de largura igual */
  justify-content: space-between;
  gap: 5px;
  display: flex;
  align-items: center;
  width: auto;
`;
export const TempoEntrada = styled.div`
  height: 100%;
  justify-content: space-between;
  gap: 5px;
  display: flex;
  align-items: center;
  width: auto;
`;
export const TempoLogado = styled.div`
  height: 100%;
  justify-content: space-between;
  gap: 5px;
  display: flex;
  align-items: center;
  width: auto;
`;
export const ContainerT = styled.div`
  height: 100%;
  justify-content: space-between;
  display: flex;
  align-items: center;
  width: 100%;
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
