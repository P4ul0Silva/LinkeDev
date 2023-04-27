import React from "react";
import Global from "./styles/Global";
import RoutesApplication from "./routes/index";
import "react-toastify/dist/ReactToastify.css";

export function App() {
  return (
    <div className="App">
      <Global />
      <RoutesApplication />
    </div>
  );
}
