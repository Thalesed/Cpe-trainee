import { useMutation, useQuery } from "@tanstack/react-query";
import { getSessoes, postSessao } from "../../Services/api/endpoints";

export function useGetSessoes({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ["sessoes"],
    queryFn: getSessoes,
    onSuccess,
    onError,
  });
}

export function usePostSessao({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
      mutationFn: postSessao,
      onSuccess,
      onError,
  });
}