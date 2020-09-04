import React, { useRef, useState, MutableRefObject } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

const Video = (props: any) => {
  const videoRef = useRef() as MutableRefObject<HTMLVideoElement>;
  const [playing, setPlaying] = useState(false);
  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video_head">
      <video
        onClick={handleVideoPress}
        className="video__player"
        loop
        ref={videoRef}
      >
        <source src={props.url} type="video/mp4" />
      </video>
      {!playing && (
        <img
          className="playVideo"
          alt=""
          src="play-button-512.png"
          onClick={handleVideoPress}
        ></img>
      )}
      <VideoFooter
        channel={props.channel}
        description={props.description}
        song={props.song}
      />
      <VideoSidebar
        likes={props.likes}
        messages={props.messages}
        shares={props.shares}
      />
    </div>
  );
};

export default Video;
