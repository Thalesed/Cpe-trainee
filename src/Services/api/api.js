import axios from "axios";

import useAuthStore from "../../stores/auth";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const api = axios.create({ baseURL: BASE_URL });

api.interceptors.request.use(
  (req) => {
    const { token } = useAuthStore.getState();
    const { usuario } = useAuthStore.getState();
    const jwtToken = import.meta.env.VITE_JWT_TOKEN;

    if (!req.headers.Authorization && token) {
      req.headers.Authorization = `Bearer e3c801147e4109c5888facde13fb01acf00e35724cf0fd97068981ab347df39244b1aa9e029e74fc8c02759bb33f3cd4`;
    }
    if(usuario){
      req.headers.usuarioid = usuario._id;
    }
    return req;
  },
  (erro) => Promise.reject(erro)
);

export default api;

