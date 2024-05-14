import React from 'react';
import {
    RouterProvider,
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    Outlet,
    Navigate,
  } from "react-router-dom";

import Home from './pages/Home';
import Cadastro from './pages/Cadastro/Cadastro';

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="cadastro" element={<Cadastro />} />
      </Route>
    )
  );

export default function Routes() {
    return <RouterProvider router={router} />;
  }
