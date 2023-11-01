// Importando React:

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Importando as Páginas do Projeto:

import Inicial from "./pages/Inicial";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Formulario from "./pages/Formulario";
import Doacoes from "./pages/Doacoes";
import Sobre from "./pages/Sobre";

// Configurando as Rotas entre as Páginas (Router):

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicial />,
  },
  {
    path: "cadastro",
    element: <Cadastro/>,
  },
  {
    path: "login",
    element: <Login/>
  },
  {
    path: "home",
    element: <Home />
  },
  {
    path: "formulario",
    element: <Formulario/>
  },
  {
    path: "doacoes",
    element: <Doacoes/>
  },
  {
    path: "sobre",
    element: <Sobre />
  },
]);

// Abrindo "porta" de acesso para o Projeto:

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

