import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import { useContext } from "react";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { AuthContext } from "../contexts/AuthContext";
import { ProductsPage } from "../pages/ProductsPage";
import { ProductDetailPage } from "../pages/ProductDetailPage";
import { AboutUs } from "../pages/AboutUs";
import { NotFound } from "../pages/NotFound";

export const RoutesConfig = () => {
  const { auth } = useContext(AuthContext);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      loader: auth ? () => redirect("produtos") : () => redirect("login")
    },
    {
      path: "produtos",
      element: <ProductsPage />,
    },
      // children: [
      //   {
      //     path: "../produtos",
      //     element: <ProductsPage />
      //   },
        {
          path: "produtos/1",
          element: <ProductDetailPage />
        },
    //   ],
    // },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "quem-somos",
      element: <AboutUs />,
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]);

  return <RouterProvider router={appRouter} />;
};
