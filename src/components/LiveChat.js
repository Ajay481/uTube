import React, { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { generateRandomMessages, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessages({
          name: generateRandomName(),
          messages: generateRandomMessages(20),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(
          addMessages({
            name: "Ajay",
            messages: liveMessage,
          })
        );
        setLiveMessage("");
      }}
    >
      <div className="border border-black w-96 p-2 m-0.5 h-[700px] rounded-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, i) => (
          <ChatMessages key={i} name={c.name} messages={c.messages} />
        ))}
      </div>
      <div className="border border-black p-2">
        <input
          className="w-72 px-2 border border-gray-400"
          type="text"
          value={liveMessage}
          placeholder="Type Message..."
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 bg-green-200 ml-4">Send</button>
      </div>
    </form>
  );
};

export default LiveChat;
