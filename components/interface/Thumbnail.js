import Image from "next/image";
import React from "react";

export default function Thumbnail({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 p-6">
      <Image
        layout="responsive"
        src={
          `${BASE_URL}${result.poster_path}` ||
          `${BASE_URL}${result.backdrop_path}`
        }
        height={3840}
        width={2592}
        alt=""
        className="rounded-sm md:rounded-lg"
      />
    </div>
  );
}
