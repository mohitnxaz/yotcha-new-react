import React, { useState, useEffect } from "react";

interface VideoPlayerProps {
  files: File[];
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ files }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    setCurrentVideoIndex(0);
  }, [files]);

  if (files.length === 0) {
    return <div>No videos available</div>;
  }

  return (
    <div style={{ width: "100%", maxWidth: "640px", margin: "0 auto" }}>
      <video style={{ width: "100%" }} autoPlay>
        <source
          src={URL.createObjectURL(files[currentVideoIndex])}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
