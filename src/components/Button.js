import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ searchQuery }) => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="p-2 m-3 bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 cursor-pointer"
        onClick={() => navigate(`/search/:${searchQuery}`)}
      >
        {searchQuery}
      </button>
    </div>
  );
};

export default Button;
