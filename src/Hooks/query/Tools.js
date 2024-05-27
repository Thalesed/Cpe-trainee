import { useMutation, useQuery } from "@tanstack/react-query";
import { getCadastro } from "../../services/endpoints";


export function useGetCadastro({
    onSuccess = () => {},
    onError = (err) => console.log(err), 
} = {})
{
   return useQuery ({
    queryKey:['Cadastro'],
    queryFn: getCadastro,
    onSuccess,
    onError,
   })
}
