import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Chats from "./pages/Chats/Chats";
import ProfleUpdate from "./pages/ProfileUpdate/ProfleUpdate";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chats />} />
        <Route path="/profile" element={<ProfleUpdate />} />
      </Routes>
    </>
  );
};

export default App;
