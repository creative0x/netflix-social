import Image from "next/image";
import React from "react";

export default function Thumbnail({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 p-5">
      <Image
        layout="responsive"
        src={
          `${BASE_URL}${result.backdrop_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        height={1080}
        width={1920}
        alt=""
      />
    </div>
  );
}
