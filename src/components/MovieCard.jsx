import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="relative w-52 h-72 flex-shrink-0 mx-2 bg-gray-800 rounded-lg overflow-hidden cursor-pointer">
      {/* Hover Effect */}
      <div className="absolute inset-0 transition-transform transform duration-300 ease-in-out hover:scale-110">
        <img
          alt="Movie Card"
          src={IMG_CDN_URL + posterPath}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default MovieCard;
