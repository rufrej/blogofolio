import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Authentication } from "./pages/Authentication";
import { Home } from "./pages/Home";
import { Layout } from "./components/Layout";
import { SearchResults } from "./components/SearchResults";
import { Posts } from "./pages/Posts";
import { Profile } from "./pages/Profile";
import { PostsAll } from "./pages/PostsAll";
import { MyPosts } from "./pages/MyPosts";

export const router = createBrowserRouter([
  {
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/posts",
        element: <Posts />,
        children: [
          {
            path: "all/:currentPage",
            element: <PostsAll />,
          },

          {
            path: "myposts/:currentPage",
            element: <MyPosts />,
          },
        ],
      },
      {
        path: "/profile",
        element: <Profile />,
      },

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
    ],
  },
]);
