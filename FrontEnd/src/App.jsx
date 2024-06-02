import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import CasesSearchPage from "./CasesSearchPage.jsx";
import CopyrightSearchPage from "./CopyrightSearchPage.jsx";
import TrademarkSearchPage from "./TrademarkSearchPage.jsx";
import { LoginForm } from "./LoginForm.jsx";
import { RegistrationForm } from "./RegistrationForm";
import SelectTypePage from "./SelectTypePage";
import { AuthContext } from "./context/AuthContext.jsx";
import { useContext } from "react";
import Home from "./Home.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/cases",
      element: <PrivateRoute element={<CasesSearchPage />} />,
    },
    {
      path: "/copyright",
      element: <PrivateRoute element={<CopyrightSearchPage />} />,
    },
    {
      path: "/trademark",
      element: <PrivateRoute element={<TrademarkSearchPage />} />,
    },
    {
      path: "/SelectType",
      element: <SelectTypePage />,
    },
    {
      path: "/signup",
      element: <PublicRoute element={<RegistrationForm />} />,
    },
    {
      path: "/login",
      element: <PublicRoute element={<LoginForm />} />,
    },
  ]);

  return <RouterProvider router={router} />;
}

const PrivateRoute = ({ element }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return element;
};

const PublicRoute = ({ element }) => {
  const { user } = useContext(AuthContext);

  if (user) {
    return <Navigate to="/" />;
  }

  return element;
};

export default App;
