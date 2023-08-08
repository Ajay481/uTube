/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams, useParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import VideoDescription from "./VideoDescription";
import {
  COMMENT,
  VIDEO_DESCRIPTION,
  YOUTUBE_APIS_KEY,
} from "../utils/constants";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const { channelId } = useParams();
  const channel = channelId?.replace(":", "");
  const [comment, setComment] = useState([]);
  const [fullVideo, setFullvideo] = useState([]);

  useEffect(() => {
    dispatch(closeMenu());
    fetchComment();
    fetchFullVideo();
  }, []);

  const fetchComment = async () => {
    const data = await fetch(`${COMMENT}${channel}&key=${YOUTUBE_APIS_KEY}`);
    const json = await data.json();
    setComment(json?.items);
  };

  const fetchFullVideo = async () => {
    const data = await fetch(
      `${VIDEO_DESCRIPTION}${searchParams.get("v")}&key=${YOUTUBE_APIS_KEY}`
    );
    const json = await data.json();
    setFullvideo(json?.items);
  };
  return (
    <div className="m-2 pl-10">
      <div className="flex">
        <iframe
          width="1400"
          height="700"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <LiveChat />
      </div>
      <VideoDescription info={fullVideo} />
      <h1 className="text-2xl font-bold mt-8">Comments: </h1>
      {comment?.map((com) => (
        <CommentsContainer key={com?.id} detail={com} />
      ))}
    </div>
  );
};

export default WatchPage;
