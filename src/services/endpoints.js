import api from "./api";


export async function getCadastro (){
    const{data} = await api.get("/cadastro");
    return data;
}