import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./Cart";
import About from "./About";
import Home from "./Home";
import Error from "./Error";
import Product from "./Product";
import ShimmerUI from "./ShimmerUI";
import appStore from "./utlity/Store/store";
import { Provider } from "react-redux";
import Login from "./Login";
import Signup from "./Signup";
import Authwrapper from "./Authwrapper";

let Food = lazy(() => import("./Food"));

let Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Authwrapper>
        <App></App>
      </Authwrapper>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/product/:id",
        element: <Product></Product>,
      },
      {
        path: "/food",
        element: (
          <Suspense fallback={<ShimmerUI></ShimmerUI>}>
            <Food></Food>
          </Suspense>
        ),
      },
    ],
    errorElement: <Error></Error>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <RouterProvider router={Router}></RouterProvider>
  </Provider>
);
