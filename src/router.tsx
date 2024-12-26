import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Authentication } from "./pages/Authentication";

import { Home } from "./pages/Home";
import { Layout } from "./components/Layout";

import { SearchResults } from "./components/SearchResults";
import { Book } from "./pages/Book";
import { Cart } from "./pages/Cart";
import { Favourites } from "./pages/Favourites";
import { Profile } from "./pages/Profile";

export const router = createBrowserRouter([
  {
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/favourites",
        element: <Favourites />,
      },
      {
        path: "/books/:isbn",
        element: <Book />,
      },
      // {
      //   path: "/categories",
      //   element: <Categories />,
      // },
      // {
      //   path: "/categories/:category",
      //   element: <Category />,
      // },
      // {
      //   path: "/categories/:category/:id",
      //   element: <Book />,
      // },

      {
        path: "/search/:query/:currentPage",
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
