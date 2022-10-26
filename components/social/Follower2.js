import Image from "next/image";
import React from "react";
import Row from "../interface/Row";

export default function Follower({ documentaries }) {
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="https://www.pngkey.com/png/full/934-9343148_2p2a2179-circle-girl.png"
            alt=""
            className="cursor-pointer rounded w-20"
          />
          <h2 className="text-3xl">Samantha Jenkins</h2>
        </div>
        <p className="text-gray-400">View full profile</p>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl -mb-10 mt-5 ml-10">Recently Viewed</h3>
        <Row title="Recently Viewed" topResults={documentaries} />
      </div>
    </div>
  );
}
