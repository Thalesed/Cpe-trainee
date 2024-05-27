import { useGetUsuarios } from '../../Hooks/query/Tools';

export function getUsuarioId(usuarios, nome) {
    const usuario = usuarios.find(user => user.nome === nome);
    return usuario ? usuario._id : null;
}