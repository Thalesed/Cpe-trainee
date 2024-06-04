import api from "./api";

export async function getLogin() {
  const { data } = await api.get("/usuarios");
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


export async function getUsuarios(){
  const {data} = await api.get('/usuarios');
  return data;
}

export async function updateUsuario(id, usuarioAtualizado){
  const {data} = await api.put(`/usuarios/${id}`, usuarioAtualizado);
  return data;
}
