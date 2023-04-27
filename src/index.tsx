import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "./App";
import { BrowserRouter } from "react-router-dom";
import { Providers } from "./providers";
import { ToastContainer } from "react-toastify";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);
