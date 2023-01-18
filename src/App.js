import './App.css';
import MainRoutes from "./MainRoutes";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from './contexts/AuthContextProvider';
import PostsContextProvider from './contexts/PostsContextProvider';
import FanficContextProvider from './contexts/FanficContextProvider';

function App() {
  return (
    <>
    <FanficContextProvider>
    <PostsContextProvider>

<AuthContextProvider>

<BrowserRouter>
<MainRoutes />
</BrowserRouter>
</AuthContextProvider>
</PostsContextProvider>
    </FanficContextProvider>
    
    </>
  );
}

export default App;
