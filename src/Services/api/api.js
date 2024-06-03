import axios from "axios";
import useAuthStore from "../../stores/auth";
const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}`;
console.log(BASE_URL);
const api = axios.create({ baseURL: BASE_URL });

api.interceptors.request.use(
  (requisicao) => {
    const { token } = useAuthStore.getState();

    if (!requisicao.headers.Authorization && token) {
      requisicao.headers.Authorization = `Bearer ${token}`;
    }
    return requisicao;
  },
  (erro) => Promise.reject(erro)
);

export default api;
