import React, { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const movieArray = Array.isArray(movies) ? movies : [];
  const scrollContainer = useRef(null);

  const scrollLeft = () => {
    scrollContainer.current.scrollBy({
      left: -300, // Adjust the scroll distance as needed
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainer.current.scrollBy({
      left: 300, // Adjust the scroll distance as needed
      behavior: "smooth",
    });
  };

  console.log("Array:", movieArray);

  return (
    <div className="relative mb-20">
      <h1 className="text-white text-3xl py-3">{title}</h1>
      <div className="relative">
        {/* Scrollable container */}
        <div
          ref={scrollContainer}
          className="flex overflow-x-scroll no-scrollbar"
        >
          {movieArray.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              movieName={movie.title}
              movieRating={movie.vote_average}
            />
          ))}
        </div>
        {/* Buttons */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        >
          ◁
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        >
          ▷
        </button>
      </div>
    </div>
  );
};

export default MovieList;
