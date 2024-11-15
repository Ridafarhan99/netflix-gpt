import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const movieArray = Array.isArray(movies) ? movies : [];

  return (
    <div>
      <h1 className="text-white text-3xl py-3 ">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movieArray.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
