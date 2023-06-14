import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import { useContext } from "react";
import { Login } from "../pages/Login";
import { AuthContext } from "../contexts/AuthContext";
import { Products } from "../pages/Products";
import { ProductDetail } from "../pages/ProductDetail";
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
      element: <Products />,
    },
      // children: [
      //   {
      //     path: "../produtos",
      //     element: <ProductsPage />
      //   },
        {
          path: "produtos/1",
          element: <ProductDetail />
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
