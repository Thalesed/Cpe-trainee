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
} from "./styles";

export default function Usuario({ usuario }) {
  return (
    <ContainerU>
      <ContainerL>
        <Nome>{usuario.nome}</Nome>{" "}
        <Dado2>
          {" "}
          Status: <Valor2>{usuario.status}</Valor2>
        </Dado2>
        <ContainerT>
          <TempoEntrada>Oi</TempoEntrada>
          <TempoLogado>5:40</TempoLogado>
        </ContainerT>
      </ContainerL>
      <Dados>
        <Dado>
          Cargo: <Valor>{usuario.cargo}</Valor>
        </Dado>
      </Dados>
    </ContainerU>
  );
}
