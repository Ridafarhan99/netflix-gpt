import React from "react";

function VideoTitle({ title, overview }) {
  return (
    <div className="pt-72 px-10">
      <h1 className="text-5xl">{title}</h1>
      <p className="w-1/4 mt-10 text">{overview}</p>
      <div className="mt-6">
        <button className="p-4 px-10 text-xl bg-gray-700 text-white rounded-lg">
          ▶ Play
        </button>
        <button className="mx-4 p-4 px-10 text-xl bg-gray-700 text-white rounded-lg">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
