import React from 'react';

interface VideoPlayerProps {
  videoId: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId }) => {
  return (
    <div className="relative w-full pb-[56.25%] bg-black rounded-lg overflow-hidden">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0`}
        title="Video player"
        className="absolute top-0 left-0 w-full h-full"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;