import { useRouter } from "next/router";
import React, { useState } from "react";
import requests from "../../utils/requests";

export default function CatMenu() {
  const router = useRouter();
  const [catBtn, setCatBtn] = useState(false);

  return (
    <div className="relative flex   flex-col border-y border-gray-500 mt-10 overflow-x-scroll scrollbar-hide">
      <div className="flex px-3 sm:px-6  whitespace-nowrap sm:space-x-8 overflow-x-scroll scrollbar-hide py-3">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={(e) => {
              e.preventDefault();
              router.push(`/?genre=${key}`);
            }}
            className="drop-shadow-md rounded-full px-8 py-2 text-xl cursor-pointer transition duration-100 transform hover:scale-110 hover:text-white"
            style={{
              color: catBtn ? "red" : "white",
            }}
          >
            {title}
          </h2>
        ))}
      </div>
    </div>
  );
}
