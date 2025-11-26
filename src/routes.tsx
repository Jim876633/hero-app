import { createBrowserRouter, Navigate } from "react-router-dom";
import HeroesLayout from "./pages/HeroesLayout";
import HeroProfilePage from "./pages/HeroProfilePage";

export const router = createBrowserRouter([
  {
    path: "/heroes",
    Component: HeroesLayout,
    children: [
      {
        index: true,
        Component: null,
      },
      {
        path: ":heroId",
        Component: HeroProfilePage,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/heroes" replace />,
  },
]);
