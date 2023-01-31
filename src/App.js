import './App.css';
import MainRoutes from "./MainRoutes";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from './contexts/AuthContextProvider';
import PostsContextProvider from './contexts/PostsContextProvider';
import FanficContextProvider from './contexts/FanficContextProvider';
import AnimeContextProveder from './contexts/AnimeContextProveder';
import MangaContextProvider from './contexts/MangaContextProvider';
import BiocontextProvider from "./contexts/BiocontextProvider"


function App() {
  return (
    <>
      <AuthContextProvider>
        <MangaContextProvider>
          <FanficContextProvider>
            <AnimeContextProveder>
              <PostsContextProvider>
                <BiocontextProvider>

                <BrowserRouter>
                  <MainRoutes />
                </BrowserRouter>

                </BiocontextProvider>
              </PostsContextProvider>
            </AnimeContextProveder>
          </FanficContextProvider>
        </MangaContextProvider>
      </AuthContextProvider>



    </>
  );
}

export default App;
