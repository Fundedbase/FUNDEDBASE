"use client";

import { useRef, useState, useEffect } from "react";

import Image from "next/image";

const VideoOrFallback = ({
  video_url,
  fallback_url,
  img_class,
  video_class,
}) => {
  const fallback = useRef(null);
  const video = useRef(null);

  const [isFallback, setIsFallback] = useState(true);

  useEffect(() => {
    window.onload = function () {
      video.current.classList.remove("hidden");
      video.current.load();

      video.current
        .play()
        .then(() => {
          // Hide fallback once video plays successfully
          setIsFallback(false);
        })
        .catch((error) => {
          console.warn("Autoplay blocked or failed:", error);
          // Keep fallback visible
        });

      // Watchdog: try replaying and hiding fallback
      // setInterval(() => {
      //   if (video.current.paused) {
      //     video.current
      //       .play()
      //       .then(() => {
      //         setIsFallback(false);
      //       })
      //       .catch(() => {});
      //   }
      // }, 2000);
    };
  }, []);

  return (
    <>
      {isFallback && (
        <Image
          ref={fallback}
          src={fallback_url}
          alt="Fallback Image"
          className={img_class}
        />
      )}
      <video
        ref={video}
        className={video_class}
        autoPlay
        muted
        loop
        playsInline
        loading="lazy"
        preload="none"
      >
        <source src={video_url} type="video/mp4" />
      </video>
    </>
  );
};

export default VideoOrFallback;
