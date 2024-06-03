import { useMutation, useQuery } from "@tanstack/react-query";
import { getLogin } from "../../services/api/endpoints";

export function useGetUsuarios({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ["usuarios"], //f5
    queryFn: getLogin,
    onError,
  });
}
