import { useMutation, useQuery } from "@tanstack/react-query";
import { getUsuarios } from "../../Services/api/endpoints";

export function useGetUsuarios({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ["usuarios"], //f5
    queryFn: getUsuarios, //função endpoint
    onSuccess,
    onError,
  });
}
