import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import {jwtDecode} from 'jwt-decode'

const useAuth = create(
  persist(
    (set) => ({
      token: null,
      usuario: null,
      setToken: (token) => {
        const { usuario } = jwtDecode(token);

        set({ token: token, usuario: usuario });
      },
      setUsuario: (usuario) => set({ usuario: usuario }),
      cleatAuth: () => set({ token: null, usuario: null }),

    }),
    {
      name: 'auth', // name of the item in the storage (must be unique)
    },
  ),
)

export default useAuth;