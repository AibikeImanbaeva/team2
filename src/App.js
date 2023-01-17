import './App.css';
import MainRoutes from "./MainRoutes";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from './contexts/AuthContextProvider';
import PostsContextProvider from './contexts/PostsContextProvider';

function App() {
  return (
    <>
    <PostsContextProvider>

    <AuthContextProvider>

    <BrowserRouter>
    <MainRoutes />
    </BrowserRouter>
    </AuthContextProvider>
    </PostsContextProvider>
    </>
  );
}

export default App;
