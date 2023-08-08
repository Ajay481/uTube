import React from "react";

const VideoCard = ({ info }) => {
  const { snippet } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img
        className="rounded-lg transition duration-500 ease-in-out hover:scale-110"
        alt="thumbnails"
        src={thumbnails?.medium?.url}
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li className="text-gray-500">{channelTitle}</li>
        {info?.statistics?.viewCount ? (
          <li className="text-gray-500">
            {info?.statistics?.viewCount < 1000000
              ? (info?.statistics?.viewCount / 1000).toFixed() + "K"
              : (info?.statistics?.viewCount / 1000000).toFixed(2) + "M"}{" "}
            views
          </li>
        ) : null}
      </ul>
    </div>
  );
};

export default VideoCard;
