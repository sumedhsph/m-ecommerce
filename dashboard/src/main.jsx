import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//import App from './App.jsx'
const App = lazy(() => import("./App.jsx"));
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/index.js";
import { Toaster } from "react-hot-toast";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense>
        <App />
        <Toaster
          toastOptions={{
            position: "top-right",
            style: {
              background: "#283046",
              color: "#ffffff",
            },
          }}
        />
      </Suspense>
    </Provider>
  </BrowserRouter>
);
