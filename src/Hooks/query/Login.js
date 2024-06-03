import { useMutation, useQuery } from "@tanstack/react-query";
import { postLogin, deleteLogin, getLogin } from "../../services/api/endpoints";

export function useGetLogin({ onError = (err) => console.log(err) } = {}) {
  return useQuery({
    queryKey: ["login"],
    queryFn: getLogin,
    onSuccess,
    onError,
  });
}

export function usePostLogin({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: postLogin,
    onSuccess,
    onError,
  });
}

export function useDeleteLogin({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: deleteLogin,
    onSuccess,
    onError,
  });
}
