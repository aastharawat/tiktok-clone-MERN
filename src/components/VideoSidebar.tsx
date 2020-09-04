import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const VideoSidebar = ({ likes, messages, shares }: any) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <FavoriteIcon
            onClick={() => {
              setLiked(false);
            }}
          />
        ) : (
          <FavoriteBorderIcon
            onClick={() => {
              setLiked(true);
            }}
          />
        )}
        <div>{likes}</div>
      </div>

      <div className="videoSidebar__button">
        <MessageIcon />
        <div>{messages}</div>
      </div>

      <div className="videoSidebar__button">
        <ShareIcon />
        <div>{shares}</div>
      </div>
    </div>
  );
};

export default VideoSidebar;
