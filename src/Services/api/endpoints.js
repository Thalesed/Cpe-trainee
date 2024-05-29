import api from "./api";

export async function getUsuarios() {
  const { data } = await api.get("/usuarios");
  return data;
}

export async function postLogin(body) {
  const { data } = await api.post("/login", body);
  return data;
}
