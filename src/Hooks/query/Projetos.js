import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getProjetos,
  deleteProjetos,
  postProjetos,
} from "../../Services/api/endpoints";

export function useGetProjetos({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ["projetos"],
    queryFn: getProjetos,
    onSuccess,
    onError,
  });
}

export function useDeleteProjetos({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: deleteProjetos,
    onSuccess,
    onError,
  });
}

export function usePostProjetos({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: postProjetos,
    onSuccess,
    onError,
  });
}
