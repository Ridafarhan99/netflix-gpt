import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

function MainContainer() {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);

  if (!movies || movies.length === 0) {
    return <div>No movies available.</div>; // Handle the case where there are no movies
  }

  const mainMovie = movies[0];

  // Ensure mainMovie has the necessary properties before destructuring
  const { original_title, overview, id } = mainMovie || {};

  return (
    <div>
      <VideoTitle
        title={original_title || "Unknown Title"}
        overview={overview || "No overview available."}
      />
      <VideoBackground movieID={id} />
    </div>
  );
}

export default MainContainer;
