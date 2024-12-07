import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy } from "react";
const Home = lazy(() => import("./pages/Home"));
const Auth = lazy(() => import("./pages/auth/Auth"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/chat/:chatId" element={<Chat />} />
        <Route path="/groups" element={<Groups />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
