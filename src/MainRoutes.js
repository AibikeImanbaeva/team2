import React from 'react';
import { Routes, Route } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";
import HomePage from "./pages/HomePage"
import LoginPage from './pages/LoginPage';
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
            id:1
        },
        {
            link: "/register",
            element: <RegistrationPage />,
            id:2
        },
        {
          link: "/login",
          element: <LoginPage />,
          id:10
      },    {
        link: "/News",
        element: <NewsPage />,
        id:3
    },
    {
      link: "/manga",
      element: <MangaPage />,
      id:4
  },
  {
    link: "/fanfic",
    element: <FanficPage />,
    id:5
},
{
  link: "/friends",
  element: <FriendsPage />,
  id:6
},
{
  link: "/chat",
  element: <ChatPage />,
  id:7
},
{
  link: "/anime",
  element: <AnimePage />,
  id:8
},
{
  link: "/profile",
  element: <ProfilePage />,
  id:9
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
  )
}

export default MainRoutes