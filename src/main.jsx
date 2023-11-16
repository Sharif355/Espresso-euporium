import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layout/MainLayout.jsx";
import Home from "./Home/Home.jsx";
import AddCoffee from "./AddCoffee/AddCoffee";
import UpdateCoffee from "./UpdateCoffee/UpdateCoffee";
import Showcoffee from "./ShowCoffee/Showcoffee";
import SignUp from "./SigUp/SignUp";
import SignIn from "./SignIn/SignIn";
import AuthProvider from "./Providers/AuthProvider";
import Users from "./Users/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            " https://espresso-euporium-server-djxbpvk4j-sharif355.vercel.app/coffees"
          ),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/editCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(
            ` https://espresso-euporium-server-djxbpvk4j-sharif355.vercel.app/coffees/${params.id}`
          ),
      },
      {
        path: "/viewCoffee/:id",
        element: <Showcoffee />,
        loader: ({ params }) =>
          fetch(
            ` https://espresso-euporium-server-djxbpvk4j-sharif355.vercel.app/coffees/${params.id}`
          ),
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () =>
          fetch(
            " https://espresso-euporium-server-djxbpvk4j-sharif355.vercel.app/user"
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
