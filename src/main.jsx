import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Scholars from "./pages/Scholars.jsx";
import Selection from "./pages/Selection.jsx";
import Donate from "./pages/Donate.jsx";

// HashRouter keeps the site host-agnostic: it works on any static host and
// even straight from the file system, with no server rewrite rules needed.
const router = createHashRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/scholars", element: <Scholars /> },
      { path: "/selection", element: <Selection /> },
      { path: "/donate", element: <Donate /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
