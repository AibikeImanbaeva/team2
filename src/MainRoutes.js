import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
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

const MainRoutes = () => {
  const ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    
    {
      link: "/fanfic",
      element: <FanficMainPage />,
      id: 2,
    },
    {
      link: "/fanficpage/:id",
      element: <FanficPage />,
      id: 3,
    },
    {
      link: "/fanficpage/:id/create-fanfic",
      element: <FanficChapterCreate />,
      id: 4,
    },
    {
      link: "/fanfic/chapter/:chName",
      element: <FanficChapter />,
      id: 5,
    },
         {
        link: "/News",
        element: <NewsPage />,
        id:6
    },
    {
      link: "/manga",
      element: <MangaPage />,
      id:7
  },
//   {
//     link: "/fanfic",
//     element: <FanficPage />,
//     id:10
// },
{
  link: "/friends",
  element: <FriendsPage />,
  id:8
},
{
  link: "/chat",
  element: <ChatPage />,
  id:9
},
{
  link: "/anime",
  element: <AnimePage />,
  id:10
},
{
  link: "/profile",
  element: <ProfilePage />,
  id:11
},
{
  link: "/admin",
  element: <AdminPage />,
  id:12
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
