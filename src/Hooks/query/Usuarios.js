import {useMutation, useQuery} from '@tanstack/react-query';
import {getUsuarios} from '../../services/endpoint'

export function useGetUsuarios({
    onSuccess = () => {},
    onError = (err) => console.log(err),
} = {}) { 
    return useQuery({
        queryKey: ['Usuarios'],
        queryFn: getUsuarios,
        onSuccess,
        onError,
    });
}