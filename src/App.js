import './App.css';
import MainRoutes from "./MainRoutes";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from './contexts/AuthContextProvider';
import PostsContextProvider from './contexts/PostsContextProvider';
import FanficContextProvider from './contexts/FanficContextProvider';
import AnimeContextProveder from './contexts/AnimeContextProveder';


function App() {
  return (
    <>
<AuthContextProvider>
  <FanficContextProvider>
  <AnimeContextProveder>
    <PostsContextProvider>

    <BrowserRouter>
    <MainRoutes />
    </BrowserRouter>
    
    </PostsContextProvider>
    </AnimeContextProveder>
  </FanficContextProvider>
</AuthContextProvider>

 

    </>
  );
}

export default App;
