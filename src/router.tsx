import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Authentication } from "./pages/Authentication";

import { Home } from "./pages/Home";
import { Layout } from "./components/Layout";
import { Categories } from "./pages/Categories";
import { Category } from "./pages/Category";
import { SearchResults } from "./components/SearchResults";
import { Book } from "./pages/Book";
import { Backet } from "./pages/Backet";

export const router = createBrowserRouter([
  {
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/backet",
        element: <Backet />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/categories/:category",
        element: <Category />,
      },
      {
        path: "/categories/:category/:id",
        element: <Book />,
      },

      {
        path: "/search/:query",
        element: <SearchResults />,
      },

      {
        path: "/auth",
        element: <Authentication />,
        children: [
          {
            path: "signin",
            element: <SignIn />,
          },
          {
            path: "signup",
            element: <SignUp />,
          },
        ],
      },

      // {
      //   path: 'auth/activation/:uid/:token',
      //   element: <AuthActivation />,
      // },
    ],
  },
]);
