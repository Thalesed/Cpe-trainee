import api from "./api";

//Login
export async function getLogin() {
  const { data } = await api.get("/usuarios");
  return data;
}

export async function postLogin(body) {
  const { data } = await api.post("/login", body);
  return data;
}

export async function deleteLogin(id) {
  const { data } = await api.delete(`/login/${id}`);
  return data;
}

//Usuarios
export async function getUsuarios() {
  const { data } = await api.get("/usuarios");
  return data;
}

export async function updateUsuario(id, usuarioAtualizado) {
  const { data } = await api.put(`/usuarios/${id}`, usuarioAtualizado);
  return data;
}

//Projetos
export async function getProjetos() {
  const { data } = await api.get("/projeto");
  return data;
}

export async function deleteProjetos(id) {
  const { data } = await api.delete(`/projeto/${id}`);
  return data;
}

export async function postProjetos(body) {
  const { data } = await api.post("/projeto", body);
  return data;
}

export async function UpdateProjetos(id, body) {
  const { data } = await api.put(`/projeto/${id}`, body);
  return data;
}

//sessoes
export async function getSessoes() {
  const { data } = await api.get("/sessoes");
  return data;
}

export async function postSessao(body) {
  const { data } = await api.post(`/sessoes`, body);
  return data;
}
