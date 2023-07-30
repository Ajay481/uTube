import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_APIS, YOUTUBE_APIS_KEY } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
 
  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_APIS + YOUTUBE_APIS_KEY);
    const json = await data.json();
    setVideos(json?.items);
  };

  if (videos?.length === 0) return <Shimmer />;

  return (
    <div className="flex flex-wrap z-0">
      {videos?.map((video) => (
        <Link
          to={`/watch/:${video?.snippet?.channelId}?v=` + video?.id}
          key={video?.id}
        >
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
