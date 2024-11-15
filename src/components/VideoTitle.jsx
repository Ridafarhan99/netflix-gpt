import React from "react";

function VideoTitle({ title, overview }) {
  return (
    <div className="w-full aspect-video pt-[15%] px-6 md:px-28 absolute text-white bg-gradient-to-r from-black overflow-hidden z-10">
      <h1 className="text-5xl">{title}</h1>
      <p className="w-full md:w-1/4 mt-10">{overview}</p>
      <div className="mt-6">
        <button className="p-4 px-10 text-2xl hover:opacity-80 bg-white bg-opacity-50 text-black rounded-lg">
          ▶ Play
        </button>
        <button className="mx-4 p-4 px-10 text-2xl bg-gray-700 bg-opacity-50 text-white rounded-lg">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
