import Image from "next/image";
import React from "react";
import Row from "../interface/Row";

export default function Follower({ romanceMovies }) {
  return (
    <div className="mt-16">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="https://www.eclipsegroup.co.uk/wp-content/uploads/2020/03/Round-Profile-Picture-768x768-1.png"
            alt=""
            className="cursor-pointer rounded w-20"
          />
          <h2 className="text-3xl">Johnny Jones</h2>
        </div>
        <p className="text-gray-400">View full profile</p>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl -mb-10 mt-5 ml-10">Recently Viewed</h3>
        <Row title="Recently Viewed" topResults={romanceMovies} />
      </div>
    </div>
  );
}
