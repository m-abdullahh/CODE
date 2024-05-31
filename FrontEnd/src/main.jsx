import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CasesSearchPage from "./CasesSearchPage.jsx";
import CopyrightSearchPage from "./CopyrightSearchPage.jsx";
import TrademarkSearchPage from "./TrademarkSearchPage.jsx";
import { LoginForm } from "./LoginForm.jsx";
import { RegistrationForm } from "./RegistrationForm";
import SelectTypePage from "./SelectTypePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SelectTypePage />,
  },
  {
    path: "/cases",
    element: <CasesSearchPage />,
  },
  {
    path: "/copyright",
    element: <CopyrightSearchPage />,
  },
  {
    path: "/trademark",
    element: <TrademarkSearchPage />,
  },
  {
    path: "/SelectType",
    element: <SelectTypePage />,
  },
  {
    path: "/user/register",
    element: <RegistrationForm />,
  },
  {
    path: "/user/login",
    element: <LoginForm />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
