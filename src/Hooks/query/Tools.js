import { useMutation, useQuery } from "@tanstack/react-query";
import { getCadastro } from "../../services/api/endpoints";

export function useGetCadastro({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ["Cadastro"],
    queryFn: getCadastro,
    onSuccess,
    onError,
  });
}

export function useCreateCadastro({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    queryKey: ["createCadastro"],
    MutationFn: useCreateCadastro,
    onSuccess,
    onError,
  });
}
