import { useContext, useEffect, useState } from "react";
import ChatBox from "../../components/ChatBox/ChatBox";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import "./Chats.css";
import { AppContext } from "../../context/AppContext";

const Chats = () => {
  const { chatsData, userData } = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (chatsData && userData) {
      setLoading(false);
    }
  }, [chatsData, userData]);

  return (
    <div className="chat">
      {loading ? (
        <p className="loading">Loading . . .</p>
      ) : (
        <div className="chat-container">
          <LeftSidebar />
          <ChatBox />
          <RightSidebar />
        </div>
      )}
    </div>
  );
};

export default Chats;
