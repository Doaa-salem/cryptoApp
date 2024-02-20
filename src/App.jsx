import React from "react";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import { RootLayout } from "./component";
import {
  Cryptocurrencies,
  CryptoDetails,
  Exchanges,
  Homepage,
  News,
} from "./component/pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Homepage />,
        },
        {
          path: "/news",
          element: <News />,
        },
        {
          path: "/exchanges",
          element: <Exchanges />,
        },
        {
          path: "/coin/:coinId",
          element: <CryptoDetails />,
        },
        {
          path: "/cryptocurrencies",
          element: <Cryptocurrencies />,
        },
      ],
    },
  ]);

  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
