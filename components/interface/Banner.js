import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaPlay, FaUserFriends } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { movieModalState, movieState } from "../../atoms/modalAtom";

export default function Banner({ trendingNow }) {
  const [movie, setMovie] = useState(null);
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const [showModal, setShowModal] = useRecoilState(movieModalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  //   use math random to generate a new movie based on the index of the trendingNow array
  useEffect(() => {
    setMovie(trendingNow[Math.floor(Math.random() * trendingNow.length)]);
  }, [trendingNow]);

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-[99.5vw]">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="ml-20 space-y-4">
        <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl text-shadow-md ">
          {movie?.title || movie?.name || movie?.orginal_name}
        </h1>
        <p className="max-w-xs text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
          {movie?.overview}
        </p>
      </div>

      <div className="flex space-x-6 ml-20">
        <button
          onClick={() => {
            setCurrentMovie(movie);
            setShowModal(true);
          }}
          className="bannerBtn bg-[#E20910] transition duration-100 transform hover:scale-105"
        >
          <FaPlay className="h-2 w-2 md:h-4 md:w-4" />
          Watch
        </button>
        <button className="bannerBtn bg-[#111] border border-gray-800 transition duration-100 transform hover:scale-105">
          <FaUserFriends className="h-2 w-2 md:h-4 md:w-4" /> Watch w/ Friends
        </button>
      </div>
    </div>
  );
}
