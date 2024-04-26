import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// https://zwigato-jax0.onrender.com
// http://localhost:4000
export const server = "https://zwigato-jax0.onrender.com/api";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
