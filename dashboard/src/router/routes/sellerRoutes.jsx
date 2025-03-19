import { lazy } from "react";
const Home = lazy(() => import("../../views/Home1"));

export const sellerRoutes = [
  {
    path: "/",
    element: <Home />,
    ability: ["admin", "seller"],
  },
];
