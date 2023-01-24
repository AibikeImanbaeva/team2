import React from "react";
import { Routes, Route } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import FanficMainPage from "./pages/UserPage";
import FanficChapterCreate from "./components/FanficChapters/FanficChapterCreate";
import FanficChapter from "./components/FanficChapters/FanficChapter";
import NewsPage from './pages/NewsPage';
import MangaPage from './pages/MangaPage';
import FanficPage from './pages/FanficPage';
import FriendsPage from './pages/FriendsPage';
import ChatPage from './pages/ChatPage';
import AnimePage from './pages/AnimePage';
import ProfilePage from './pages/ProfilePage';
import AdminPage from './pages/AdminPage';
import MangaDetail from "./components/MangaPage__Components/MangaDetail";
import MangaRead from "./components/MangaPage__Components/MangaRead";

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
    {
      link: "/News",
      element: <NewsPage />,
      id: 8
    },
    {
      link: "/manga",
      element: <MangaPage />,
      id: 9
    },
    {
      link: "/manga/:id",
      element: <MangaDetail />,
      id: 10
    },
    {
      link: "/friends",
      element: <FriendsPage />,
      id: 11
    },
    {
      link: "/chat",
      element: <ChatPage />,
      id: 12
    },
    {
      link: "/anime",
      element: <AnimePage />,
      id: 13
    },
    {
      link: "/profile",
      element: <ProfilePage />,
      id: 14
    },
    {
      link: "/admin",
      element: <AdminPage />,
      id: 15
    },
    {
      link: "/manga/:id/:chapter/:page",
      element: <MangaRead />,
      id: 16
    },
  ]

  return (
    <Routes>
      {ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
