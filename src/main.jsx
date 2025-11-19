import React from "react";   // ← AGREGAR ESTO
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./app.css";   // acá tenés tailwind importado

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App/>
  </StrictMode>
);
