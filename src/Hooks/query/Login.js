import { useMutation, useQuery } from "@tanstack/react-query";
import { postLogin } from "../../Services/api/endpoints";

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
