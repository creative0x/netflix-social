import { useRouter } from "next/router";
import React from "react";
import requests from "../../utils/requests";

export default function CatMenu() {
  const router = useRouter();

  return (
    <div className="relative flex items-center justify-center flex-col border-y border-gray-500 mt-10">
      <div className="flex px-3 sm:px-6  whitespace-nowrap space-x-8 sm:space-x-8 overflow-x-scroll scrollbar-hide py-3">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={(e) => {
              e.preventDefault();
              router.push(`/?genre=${key}`);
            }}
            className="drop-shadow-md rounded-full px-8 py-2 text-xl cursor-pointer transition duration-100 transform hover:scale-110 hover:text-white"
          >
            {title}
          </h2>
        ))}
      </div>
    </div>
  );
}
