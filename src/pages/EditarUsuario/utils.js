import { useGetUsuarios } from '../../Hooks/query/Usuarios';

export function getUsuarioId(usuarios, nome) {
    const usuario = usuarios.find(user => user.nome === nome);
    return usuario ? usuario._id : null;
}