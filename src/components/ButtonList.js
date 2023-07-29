import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const List = [
    "Trending",
    "Comedy",
    "Thrillers",
    "Pop Music",
    "Cooking",
    "Cars",
    "Gadgets",
    "Gaming",
    "Music",
    "Cricket",
    "Live",
    "Football",
    "Kabaddi",
  ];

  return (
    <div className="flex">
      <button className="p-2 m-3 bg-black rounded-lg shadow-lg text-white cursor-pointer">All</button>
      {List.map((title, index) => (
        <Button key={index} searchQuery={title} />
      ))}
    </div>
  );
};

export default ButtonList;
