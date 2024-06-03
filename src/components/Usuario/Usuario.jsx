import { ContainerU, Dado, Dados, Nome, Valor } from "./styles";

export default function Usuario({ usuario }) {
  return (
    <ContainerU>
      <Nome>{usuario.nome}</Nome>
      <Dados>
        <Dado>
          Email: <Valor>{usuario.email}</Valor>
        </Dado>
        <Dado>
          Cargo: <Valor>{usuario.cargo}</Valor>
        </Dado>
        <Dado>
          Status: <Valor>{usuario.status}</Valor>
        </Dado>
      </Dados>
    </ContainerU>
  );
}
