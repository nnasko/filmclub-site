import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <video controls className="md:max-h-72 max-h-48">
        <source src="/videos/display.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
