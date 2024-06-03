import api from "./api";

export async function getLogin() {
  const { data } = await api.get("/usuarios");
  console.log("oi", data);
  return data;
}

export async function postLogin(body) {
  const { data } = await api.post("/login", body);
  return data;
}

export async function deleteLogin(id) {
  const { data } = await api.post(`/login/${id}`);
  return data;
}
export async function getCadastro() {
  const { data } = await api.get("/usuarios");
  return data;
}
export async function CreateCadastro(campos) {
  const { data } = await api.post("/usuarios", campos);
  return data;
}
