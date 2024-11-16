import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

function VideoBackground({ movieID }) {
  const trailerVideo = useSelector((store) => store.movie?.trailerVideo);

  useMovieTrailer(movieID);

  return (
    <div className="z-20">
      {trailerVideo?.key ? (
        <iframe
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      ) : (
        <p>Loading trailer...</p>
      )}
    </div>
  );
}

export default VideoBackground;
