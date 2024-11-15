import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieID) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`,
        API_OPTIONS
      );

      // Check if the response is valid and has the `results` property
      const json = await response.json();

      if (!json.results || !Array.isArray(json.results)) {
        console.error("No videos found or invalid response structure", json);
        return;
      }

      // Filter by trailer
      const trailersData = json.results.filter(
        (video) => video.type === "Trailer"
      );

      const trailer = trailersData.length
        ? trailersData[trailersData.length - 1]
        : json.results[0];

      // Dispatch only the `key` (video ID) to the Redux store
      dispatch(addTrailerVideo(trailer));
    } catch (error) {
      console.error("Error fetching movie videos:", error);
    }
  };

  useEffect(() => {
    if (movieID) {
      getMovieVideos();
    }
  }, [movieID]);
};

export default useMovieTrailer;
