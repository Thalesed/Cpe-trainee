import {
    RouterProvider,
    createBrowserRouter,
    Route,
    createRoutesFromElements
} from "react-router-dom";
import { AppLayout } from "./components";
import {Home, Cadastro, Login} from "./pages"
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<AppLayout/>}>
             <Route index element={<Home/>}/>
             <Route path="cadastro" element={<Cadastro/>}/>
             <Route path="login" element={<Login/>}/> 
            </Route>
        </Route>
    )
)

export default function Routes () {
    return <RouterProvider router={router} />
}