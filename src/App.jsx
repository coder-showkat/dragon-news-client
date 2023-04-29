import React from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import AuthLayout from "./layouts/AuthLayout";
import Main from "./layouts/Main";
import NewsLayout from "./layouts/NewsLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import News from "./pages/News";
import Register from "./pages/Register";
import PrivateRoute from "./privateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0" replace={true} />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },

  {
    path: "/category/:id",
    element: <Main />,
    children: [
      {
        path: "/category/:id",
        element: <Home />,
        loader: ({ params }) =>
          fetch(`http://localhost:4001/api/categories/${params.id}`),
      },
    ],
  },

  {
    path: "/news/:id",
    element: (
      <PrivateRoute>
        <NewsLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/news/:id",
        element: <News />,
        loader: ({ params }) =>
          fetch(`http://localhost:4001/api/news/${params.id}`),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
