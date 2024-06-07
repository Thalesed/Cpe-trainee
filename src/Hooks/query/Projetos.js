import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import {
  getProjetos,
  deleteProjetos,
  postProjetos,
  UpdateProjetos,
} from "../../Services/api/endpoints";

export function useGetProjetos({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ["projeto"],
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
    mutationFn: ({ body }) => postProjetos(body),
    onSuccess,
    onError,
  });
}

export function useUpdateProjetos({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: ({ id, body }) => UpdateProjetos(id, body),
    onSuccess,
    onError,
  });
}

