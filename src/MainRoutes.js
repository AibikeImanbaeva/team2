import React from "react";
import { Routes, Route } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import FanficPage from "./pages/FanficPage";

const MainRoutes = () => {
  const ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/register",
      element: <RegistrationPage />,
      id: 2,
    },
    {
      link: "/login",
      element: <LoginPage />,
      id: 3,
    },
    {
      link: "/user",
      element: <UserPage />,
      id: 4,
    },
    {
      link: "/fanficpage",
      element: <FanficPage />,
      id: 5,
    },
  ];
  return (
    <Routes>
      {ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
