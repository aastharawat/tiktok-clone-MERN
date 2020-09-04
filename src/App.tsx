import React from "react";
//@ts-check
import "./App.css";
import Video from "./components/Video";
function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url="coverr-lake-and-mountains-1572182323912.mp4"
          channel="@aastha"
          description="EPIC MERN STACK"
          song="coverr-lake-and-mountains"
          likes={100}
          messages={20}
          shares={300}
        />
        <Video
          url="Easy-Morning.mp4"
          channel="@aastha"
          description="EPIC MERN STACK"
          song="Easy-Morning"
          likes={100}
          messages={20}
          shares={300}
        />
        <Video
          url="Hway.mp4"
          channel="@aastha"
          description="EPIC MERN STACK"
          song="Hway LA"
          likes={100}
          messages={20}
          shares={300}
        />
        <Video
          url="coverr-lake-and-mountains-1572182323912.mp4"
          channel="@aastha"
          description="EPIC MERN STACK"
          song="coverr-lake-and-mountains"
          likes={100}
          messages={20}
          shares={300}
        />
      </div>
    </div>
  );
}

export default App;
