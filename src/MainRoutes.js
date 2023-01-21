import React from "react";
import { Routes, Route } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import FanficPage from "./pages/FanficPage";
import FanficMainPage from "./pages/UserPage";
import FanficChapterCreate from "./components/FanficChapters/FanficChapterCreate";
import FanficChapter from "./components/FanficChapters/FanficChapter";

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
      link: "/fanfic",
      element: <FanficMainPage />,
      id: 4,
    },
    {
      link: "/fanficpage/:id",
      element: <FanficPage />,
      id: 5,
    },
    {
      link: "/fanficpage/:id/create-fanfic",
      element: <FanficChapterCreate />,
      id: 6,
    },
    {
      link: "/fanfic/chapter/:chName",
      element: <FanficChapter />,
      id: 7,
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
