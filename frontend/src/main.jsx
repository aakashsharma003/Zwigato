import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
export const server =
  "https://3149-2401-4900-1c7b-4512-7194-2a13-3d5b-1653.ngrok-free.app/api";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
