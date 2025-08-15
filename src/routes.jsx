import { createBrowserRouter } from "react-router";
import MainLayout from "./layouts/MainLayout";
import SingleProduct from "./pages/SingleProduct";
import Home from "./pages/Home";
import Card from "./pages/Card";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "singleProduct/:id", element: <SingleProduct /> },
        { path: "card/:id", element: <Card /> },
      ],
    },
  ],
  {
    basename: "/little-store-site",
  }
);
