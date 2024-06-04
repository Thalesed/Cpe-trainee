import {
  ContainerU,
  Dado,
  Dado2,
  Dados,
  Nome,
  Valor,
  Valor2,
  ContainerL,
  TempoLogado,
  TempoEntrada,
  ContainerT,
  ContainerD,
} from "./styles";

export default function Usuario({ usuario }) {
  return (
    <ContainerU>
      <ContainerL>
        <ContainerD>
          <Nome>{usuario.nome}</Nome>{" "}
          <Dado2>
            {" "}
            Projeto X <Valor2>{usuario.status}</Valor2>
          </Dado2>
        </ContainerD>
        <ContainerT>
          <TempoEntrada>22:00</TempoEntrada>
          <TempoLogado>5:40</TempoLogado>
        </ContainerT>
      </ContainerL>
      <Dados>
        <Dado>
          <Valor>{usuario.cargo}</Valor>
        </Dado>
      </Dados>
    </ContainerU>
  );
}
