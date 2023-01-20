import './App.css';
import MainRoutes from "./MainRoutes";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from './contexts/AuthContextProvider';
// import PostsContextProvider from './contexts/PostsContextProvider';
import AnimeContextProveder from './contexts/AnimeContextProveder';


function App() {
  return (
    <>
    <AnimeContextProveder>
    {/* <PostsContextProvider> */}
    <AuthContextProvider>
    <BrowserRouter>
    <MainRoutes />
    </BrowserRouter>
    </AuthContextProvider>
    {/* </PostsContextProvider> */}
    </AnimeContextProveder>
    </>
  );
}

export default App;
