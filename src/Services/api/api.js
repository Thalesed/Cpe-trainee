import axios from "axios";

const BASE_URL = `$(import.meta.env.VITE_BACKEND_URL)`;

const api = axios.create({ baseURL: "http://localhost:8000" });

export default api;
