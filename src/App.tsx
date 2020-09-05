import React, { useEffect, useState } from "react";
//@ts-check
import "./App.css";
import Video from "./components/Video";
import getPosts from "./components/fetch";
function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await getPosts;
      setVideos(response);
      console.log(videos);
    }
    fetchData();
  });
  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
