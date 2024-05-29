import {useMutation, useQuery} from '@tanstack/react-query';
import {getUsuarios, updateUsuario} from '../../Services/endpoints'

import { QueryClient, useQueryClient } from 'react-query';

export function useGetUsuarios({
    onSuccess = () => {},
    onError = (err) => console.log(err),
} = {}) { 
    return useQuery({
        queryKey: ['usuarios'],
        queryFn: getUsuarios,
        onSuccess,
        onError,
    });
}

export function useUpdateUsuario({
    onSuccess = () => {},
    onError = (err) => console.log(err),
} = {}) {
    return useMutation({
        mutationFn: ({ id, usuarioAtualizado }) => updateUsuario(id, usuarioAtualizado),
        onSuccess,
        onError,
    });
}