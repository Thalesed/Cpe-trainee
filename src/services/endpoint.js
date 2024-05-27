import api from './api';

export async function getUsuarios(){
    const {data} = await api.get('/usuarios');
    return data;
}