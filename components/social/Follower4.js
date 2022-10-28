import Image from "next/image";
import React from "react";
import Row from "../interface/Row";

export default function Follower({ horrorMovies }) {
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="https://www.baknoprofiles.com/index_files/beforeimage_354.png"
            alt=""
            className="cursor-pointer rounded-full bg-white w-20"
          />
          <h2 className="text-3xl">Stephanie Gonzalez</h2>
        </div>
        <p className="text-gray-400">View full profile</p>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl -mb-8 mt-5 ml-8">Recently Viewed</h3>
        <Row title="Recently Viewed" topResults={horrorMovies} />
      </div>
    </div>
  );
}
