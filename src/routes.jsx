import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { AppLayout } from "./components";
import { Home, Cadastro, Login, EditarUsuario } from "./pages";
import Projetos from "./pages/Projetos/Projetos";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="cadastro" element={<Cadastro />} />
        <Route path="login" element={<Login />} />
        <Route path="editar" element={<EditarUsuario />} />
        <Route path="projetos" element={<Projetos />} />
      </Route>
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
