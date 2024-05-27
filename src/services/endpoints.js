import api from './api';

export async function getUsuarios(){
    const {data} = await api.get('/usuarios');
    return data;
}

export async function updateUsuario(id, usuarioAtualizado){
    const {data} = await api.put(`/usuarios/${id}`, usuarioAtualizado);
    return data;
}