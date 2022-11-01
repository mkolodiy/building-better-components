import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Example1, loader as example1Loader } from "./example1/Example1";
import { Sub1 as Example1Sub1 } from "./example1/Sub1";
import { Sub2 as Example1Sub2 } from "./example1/Sub2";
import { Sub3 as Example1Sub3 } from "./example1/Sub3";
import { Example2 } from "./example2/Example2";
import { Example3 } from "./example3/Example3";
import "./index.css";
import { Root, loader as rootLoader } from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: "example1",
        element: <Example1 />,
        loader: example1Loader,
        children: [
          {
            path: "sub1",
            element: <Example1Sub1 />,
          },
          {
            path: "sub2",
            element: <Example1Sub2 />,
          },
          {
            path: "sub3",
            element: <Example1Sub3 />,
          },
        ],
      },
      {
        path: "example2",
        element: <Example2 />,
      },
      {
        path: "example3",
        element: <Example3 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
