import {
    ContainerU,
    Nome,
    Valor,
    ContainerL,
    Tempo,
    ContainerT,
    ContainerS,
    ContainerD,
  } from "./style";
import react, {useEffect, useState} from 'react';

import { useDeleteSessao } from '../../Hooks/query/Sessoes';
import { useGetUsuarios } from '../../Hooks/query/Usuarios';

import ExitSvg from './exit.svg';
import { QueryClient } from "react-query";

import { useNavigate } from "react-router-dom";

import ErroPopUp from "../../components/ErroPopUp/ErroPopUp";

export default function Sessao({ sessao }) {
    const navigate = useNavigate();
    const [erroMensagem, setErroMensagem] = useState(false);

    const queryClient = new QueryClient();
    const {data : usuarios} = useGetUsuarios({
        onError: (err) => {
          console.log(err);
        },
      });

    const { mutate: deletarSessao } = useDeleteSessao({
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["sessoes"],
          });
          setErroMensagem(false);
          window.location.reload();
        },
        onError: (err) => {
          console.log(err);
          setErroMensagem("Não autorizado");
        },
      });

    function encerrarSessao(){
        console.log(usuarios);
        deletarSessao(sessao.id_usuario._id);
        
    }

    const extractTime = (isoString) => {
        const date = new Date(isoString);
        const hours = date.getUTCHours().toString().padStart(2, '0'); 
        const minutes = date.getUTCMinutes().toString().padStart(2, '0'); 

        return `${hours}:${minutes}`;
    };

    const calcularIntervalo = (start, end) => {
        const startDate = new Date(start);
        const endDate = new Date(end);
        
        const diffMs = endDate - startDate;
        
        const diffHrs = Math.floor(diffMs / 3600000); 
        const diffMins = Math.floor((diffMs % 3600000) / 60000); 

        if(diffHrs.toString().length < 2 && diffMins.toString().length < 2){
            return `0${diffHrs}:0${diffMins}`;
        }else if(diffHrs.toString().length < 2){
            return `0${diffHrs}:${diffMins}`;
        }else if(diffMins.toString().length < 2){
            return `${diffHrs}:0${diffMins}`;
        }
        
        return `${diffHrs}:${diffMins}`;
    };

    const [currentTime, setCurrentTime] = useState(new Date().toISOString());

    useEffect( () => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date().toISOString());
        }, 5000);
        return () => clearInterval(intervalId); 
    }, []);

    return (
        <>
        <ContainerU>
            <ContainerD>
                <Nome>{sessao.id_usuario.nome}</Nome>
            </ContainerD>
            <ContainerL>
                <Valor>{sessao.id_projeto.nome}</Valor>
            </ContainerL>
            <ContainerT>
                <Tempo>{extractTime(sessao.createdAt)}</Tempo>
            </ContainerT>
            <ContainerS>
                <Tempo>{calcularIntervalo(sessao.createdAt, currentTime)}</Tempo>
                <img src={ExitSvg} onClick={encerrarSessao}></img>
            </ContainerS>
        </ContainerU>
        <ErroPopUp erroMsg={erroMensagem} hide={() => {setErroMensagem(false);}} />
        </>
    );
}