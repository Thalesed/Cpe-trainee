import { useMutation, useQuery } from "@tanstack/react-query";
import { getUsuarios } from "../../Services/api/endpoints";

export function useGetUsuarios({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ["usuarios"],
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
