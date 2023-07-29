import React from "react";
import { Link } from "react-router-dom";

const SideBarCard = ({ alt, src, searchQuery }) => {
  return (
    <div>
      <li className="hover:bg-gray-100 cursor-pointer py-2 rounded-lg">
        <Link to={`/search/:${searchQuery}`} className="flex">
          <img className="h-6 w-6 mr-8 ml-2 rounded-full" alt={alt} src={src} />
          {searchQuery}
        </Link>
      </li>
    </div>
  );
};

export default SideBarCard;
