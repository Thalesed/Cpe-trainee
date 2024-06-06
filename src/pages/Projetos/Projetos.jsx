import React, { useState } from "react";
import {
  Titulo,
  Input,
  Estrutura,
  Div1,
  Div2,
  PopupItem,
  Mensagem,
  MensagemPrincipal,
  BotaoConfirma,
  ConfirmaPopup,
} from "./style";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import {
  useDeleteProjetos,
  useGetProjetos,
  useUpdateProjetos,
} from "../../Hooks/query/Projetos";
import { EditaProjeto } from "./EditaProjeto/editaProjeto";
import { CriaProjeto } from "./CriaProjeto/criaProjeto";

const Projetos = () => {
  const [busca, setBusca] = useState("");
  const [deleta, setDeleta] = useState(false);
  const [idDeleta, setIdDeleta] = useState(null);
  const [edita, setEdita] = useState(false);
  const [idEdita, setIdEdita] = useState(null);
  const [cria, setCria] = useState(false);

  const queryClient = useQueryClient();

  const { data: projetinho } = useGetProjetos({
    onError: (err) => {
      console.log(err);
    },
  });
  //console.log(projetinho);

  // Função para filtrar projetos
  function pesquisaTempoReal(busca) {
    return projetinho?.filter((projeto) => {
      return projeto.nome.toLowerCase().indexOf(busca.toLowerCase()) > -1; //verifica se tem o valor pesquisado na busca no campo do nome do projeto
    });
  }

  const { mutate: deletaProjeto } = useDeleteProjetos({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["projetos"],
      });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const atualizaBusca = (e) => {
    setBusca(e.target.value);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    projetinho(data);
    //console.log(data);
  };

  function ponte(id) {
    setIdEdita(id);
    setEdita(true);
  }

  return (
    <Estrutura>
      <Titulo>gerenciar projetos</Titulo>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Div1>
          <Input
            placeholder="Pesquisar"
            type="text"
            name="busca"
            id="busca"
            value={busca}
            onChange={atualizaBusca}
          />
          <IoAddCircleOutline
            type="submit"
            size={40}
            cursor="pointer"
            onClick={() => setCria(true)}
          />
        </Div1>
        <tbody style={{ overflow: "auto", maxHeight: "200px" }}>
          {pesquisaTempoReal(busca)?.map((projeto) => (
            //console.log(projeto._id),

            <Div2 key={projeto._id}>
              <td>{projeto?.nome}</td>
              <td>
                <FaRegEdit
                  style={{ marginRight: "10px" }}
                  cursor="pointer"
                  onClick={() => {
                    ponte(projeto?._id);
                  }}
                />
                <BsTrash
                  cursor="pointer"
                  onClick={function () {
                    setDeleta(true), setIdDeleta(projeto?._id);
                  }}
                />
              </td>
            </Div2>
          ))}
        </tbody>

        <ConfirmaPopup aberto={deleta}>
          <PopupItem style={{ marginTop: "0px", position: "relative" }}>
            <PopupItem>
              <IoIosClose
                size={35}
                style={{
                  display: "flex",
                  color: "gold",
                  position: "absolute",
                  top: "5px",
                  right: "5px",
                  cursor: "pointer",
                }}
                onClick={() => setDeleta(false)}
              />
            </PopupItem>
            <MensagemPrincipal>Excluir arquivo</MensagemPrincipal>
          </PopupItem>
          <PopupItem>
            <Mensagem>
              Tem certeza que você deseja excluir esse arquivo?
            </Mensagem>
          </PopupItem>
          <PopupItem>
            <BotaoConfirma
              onClick={function () {
                deletaProjeto(idDeleta);
                setDeleta(false);
              }}
            >
              excluir
            </BotaoConfirma>
          </PopupItem>
        </ConfirmaPopup>
      </form>
      <EditaProjeto id={idEdita} edita={edita} setEdita={setEdita} />
      <CriaProjeto cria={cria} setCria={setCria} />
    </Estrutura>
  );
};

export default Projetos;
