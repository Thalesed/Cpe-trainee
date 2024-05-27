import axios from "axios";

//const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}`;
const BASE_URL = 'http://localhost:8000';
const api = axios.create({
    baseURL: BASE_URL,
});

export default api;