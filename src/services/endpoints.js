import api from "./api";


export async function getCadastro (){
    const{data} = await api.get("/usuarios");
    return data;
}
export async function CreateCadastro (campos){
    const{data} = await api.post("/usuarios", campos);
    return data;
}