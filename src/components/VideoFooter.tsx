import React from "react";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import "./VideoFooter.css";
import Ticker from "react-ticker";
const VideoFooter = ({ channel, description, song }: any) => {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter_ticker">
          <MusicNoteIcon className="videoFooter_icon"></MusicNoteIcon>
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <div>{song}</div>
              </>
            )}
          </Ticker>
          <img
            className="videoFooter__record"
            alt=""
            src="compact-disc.webp"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default VideoFooter;
