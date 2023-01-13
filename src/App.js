import './App.css';
import MainRoutes from "./MainRoutes";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from './contexts/AuthContextProvider';

function App() {
  return (
    <>
    <AuthContextProvider>

    <BrowserRouter>
    <MainRoutes />
    </BrowserRouter>
    </AuthContextProvider>
    </>
  );
}

export default App;
