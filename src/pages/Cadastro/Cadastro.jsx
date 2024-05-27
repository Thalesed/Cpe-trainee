import React from "react"
import Input from "../../components/Input/Input"
import TituloCadastro from "../../components/titulo/titulo"
import BotaoCadastro from "../../components/botão/botãoCadastro"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BotaoVoltarCadastro from "../../components/botão/botaoVoltar"
//import FundoCadastro from "../../components/fundo/fundoCadastro"
import api from "../../services/api";
import { useGetCadastro } from "../../Hooks/query/Tools";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validator } from "./utils";

export default function Cadastro () {
    const {data: cadastro } = useGetCadastro({
        onError: (err) => {
            console.log(err);
        }
    })
    const { handleSubmit, register, formState: {errors}, } = useForm({resolver: zodResolver(validator)}) = async (e) => { 
        e.preventDefault();
        console.log({email, senha, nome, cargo, status});
     };
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const {status, setStatus} = useState("");
    const navigate = useNavigate();
    
     
    return(
        <>
        <TituloCadastro tituloStr="cadastrar"/>
        <form onSubmit={handleSubmit}>
           

          
                   
        <Input {...register('email')} error={!!errors?.email?.message} x="Email" type="email" name="email" id= "email" required onChange={(e) => setEmail(e.target.value)}/>
        {errors?.email?.message && <p>{errors?.email?.message}</p>}
        <Input {...register('senha')} error={!!errors?.senha?.message} x="Senha" type="password" name="senha" id="senha" required onChange={(e) => setSenha(e.target.value)}/>
        {errors?.senha?.message && <p>{errors?.senha?.message}</p>}
        <Input {...register('nome')} error={!!errors?.nome?.message}x="Nome" type="text" name="nome" id="nome" required onChange={(e) => setNome(e.target.value)}/>
        {errors?.nome?.message && <p>{errors?.nome?.message}</p>}
        <Input {...register('cargo')}error={!!errors?.cargo?.message} x="Cargo" type="text" name="cargo" id="cargo" required onChange={(e) => setCargo(e.target.value)}/>
        {errors?.cargo?.message && <p>{errors?.cargo?.message}</p>}
        <Input {...register('status')}error={!!errors?.status?.message} x="Status" type="text" name="status" id="status"required onChange={(e) => setStatus(e.target.value)}/>
        {errors?.status?.message && <p>{errors?.status?.message}</p>}
        <BotaoCadastro type="submit"/>
       </form>
        </>
    )
   
}
