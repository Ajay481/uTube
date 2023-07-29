import React from "react";

const ChatMessages = ({ name, messages }) => {
  return (
    <div className="flex p-2 shadow-md">
      <img
        className="h-6 cursor-pointer"
        alt="user"
        src="https://www.seekpng.com/png/detail/41-410093_circled-user-icon-user-profile-icon-png.png"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{messages}</span>
    </div>
  );
};

export default ChatMessages;
