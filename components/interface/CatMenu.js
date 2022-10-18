import { useRouter } from "next/router";
import React from "react";
import requests from "../../utils/requests";

export default function CatMenu() {
  const router = useRouter();

  return (
    <div className="relative">
      <div className="flex px-3 sm:px-6 text-base whitespace-nowrap space-x-8 sm:space-x-8 overflow-x-scroll scrollbar-hide pt-20 py-3">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={(e) => {
              e.preventDefault();
              router.push(`/?genre=${key}`);
            }}
            className="drop-shadow-md rounded-full px-8 py-2 glass border cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 active:border-red-500 "
          >
            {title}
          </h2>
        ))}
      </div>
    </div>
  );
}
