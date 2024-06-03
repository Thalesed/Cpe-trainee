import Header from "../header/Header";
import HeaderVoltar from "../header/HeaderCadastro";
import { Outlet } from "react-router-dom";
export default function AppLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
export const AppVoltar = () => {
  return (
    <div>
      <HeaderVoltar />
      <Outlet />
    </div>
  );
};
