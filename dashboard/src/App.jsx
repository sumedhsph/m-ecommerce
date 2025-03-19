import React, { useEffect } from "react"; // No need for useState if initializing once
import Router from "./router/Router";
import publicRoutes from "./router/routes/publicRoutes";
import { getRoutes } from "./router/routes";

function App() {
  const allRoutes = [...publicRoutes, getRoutes()]; // Combine at render

  return <Router allRoutes={allRoutes} />;
}

export default App;