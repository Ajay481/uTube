import React from "react";

const CommentsContainer = ({ detail }) => {
  const { authorDisplayName, textDisplay, authorProfileImageUrl } =
    detail?.snippet?.topLevelComment?.snippet;

  return (
    <div>
      <div className="flex bg-gray-100 p-2 rounded-lg shadow-sm">
        <img
          className="rounded-full h-12"
          alt="comments"
          src={authorProfileImageUrl}
        />
        <div className="ml-3">
          <p className="font-bold">{authorDisplayName}</p>
          <p>{textDisplay}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentsContainer;
