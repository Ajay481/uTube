import React from "react";

const VideoDescription = ({ info }) => {

  return (
    <div className=" bg-gray-100 shadow-sm p-2">
      <p className=" text-2xl">{info[0]?.snippet?.localized?.title}</p>
      <div className="flex w-[900px] justify-between">
        <button className="bg-gray-200 rounded-full p-2">
          {info[0]?.snippet?.channelTitle}
        </button>
        <button className="bg-gray-300 rounded-full p-2">
          {info[0]?.statistics?.likeCount} Likes
        </button>
        <button className="bg-gray-300 rounded-full p-2">
          {info[0]?.statistics?.viewCount} views
        </button>
      </div>
    </div>
  );
};

export default VideoDescription;
