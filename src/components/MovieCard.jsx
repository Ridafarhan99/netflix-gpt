import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, movieName, movieRating }) => {
  return (
    <div className="relative w-52 h-72 flex-shrink-0 mx-2 bg-gray-800 rounded-lg overflow-hidden cursor-pointer group">
      {/* Movie Image */}
      <div className="absolute inset-0 transition-transform transform duration-300 ease-in-out group-hover:scale-110">
        <img
          alt="Movie Card"
          src={IMG_CDN_URL + posterPath}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Overlay Content (Visible on Hover) */}
      <div className="absolute inset-0 flex flex-col justify-end items-center p-2 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-sm font-semibold text-white truncate">
          {movieName}
        </h3>
        <p className="text-xs font-light text-white">
          Rating: {movieRating.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
