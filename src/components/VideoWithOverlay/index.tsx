import { Fragment } from "react";

const VideoWithOverlay = () => {
  return (
    <Fragment>
      <video
        className="fixed left-0 top-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="/videos/mainPageVideo.mp4">
        Извините ваш браузер не поддерживает видео
      </video>
      <div className="fixed left-0 top-0 w-full h-full bg-black/65" />
    </Fragment>
  );
};

export default VideoWithOverlay;
