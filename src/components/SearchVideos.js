/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import VideoCard from "./VideoCard";
import { SEARCH_API, YOUTUBE_APIS_KEY } from "../utils/constants";

const SearchVideos = () => {
  const { searchQuery } = useParams();
  const [searchVideos, setSearchVideos] = useState([]);

  useEffect(() => {
    getSearchVideos();
  }, [searchQuery]);

  const getSearchVideos = async () => {
    const data = await fetch(
      `${SEARCH_API}${searchQuery}&key=${YOUTUBE_APIS_KEY}`
    );
    const json = await data.json();
    setSearchVideos(json?.items);
  };

  if (searchVideos?.length === 0) return <Shimmer />;

  return (
    <div className="flex flex-wrap">
      {searchVideos?.map((video) => (
        <Link
          to={`/watch/:${video?.snippet?.channelId}?v=` + video?.id?.videoId}
          key={video?.id?.videoId}
        >
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default SearchVideos;
