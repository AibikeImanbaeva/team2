import './App.css';
import MainRoutes from "./MainRoutes";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from './contexts/AuthContextProvider';
import PostsContextProvider from './contexts/PostsContextProvider';
import FanficContextProvider from './contexts/FanficContextProvider';
import AnimeContextProveder from './contexts/AnimeContextProveder';
import NewsContextProvider from './contexts/NewsContextProvider';
import MangaContextProvider from './contexts/MangaContextProvider';





function App() {
  return (
    <>

      <AuthContextProvider>
                <PostsContextProvider>
        <NewsContextProvider>
          <MangaContextProvider>
            <FanficContextProvider>
              <AnimeContextProveder>


                  <BrowserRouter>
                    <MainRoutes />
                  </BrowserRouter>

              </AnimeContextProveder>
            </FanficContextProvider>
          </MangaContextProvider>
        </NewsContextProvider>
                </PostsContextProvider>

      </AuthContextProvider>



    </>
  );
}

export default App;
