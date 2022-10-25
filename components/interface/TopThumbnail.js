import React from "react";
import Image from "next/image";
import { Result } from "postcss";
import Movies from "./Movies";
import {
  HeartIcon,
  PlusCircleIcon,
  PlusIcon,
  ThumbUpIcon,
} from "@heroicons/react/outline";
import { useRecoilState } from "recoil";
import { movieModalState, movieState } from "../../atoms/modalAtom";

export default function TopThumbnail({ movie }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const [showModal, setShowModal] = useRecoilState(movieModalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  return (
    <div
      onClick={() => {
        setCurrentMovie(movie);
        setShowModal(true);
      }}
      className=" my-4 relative h-full min-w-[270px] cursor-pointer transition duration-200 ease-out md:hover:scale-105 "
    >
      <Image
        layout="responsive"
        src={
          `${BASE_URL}${movie.poster_path}` ||
          `${BASE_URL}${movie.backdrop_path}`
        }
        height={3840}
        width={2592}
        alt=""
        className="rounded-sm md:rounded-lg "
      />
      <div className="">
        <p className="flex items-center py-2 text-sm justify-between ">
          {movie.release_date || movie.first_air_date}{" "}
          <div className="flex">
            <ThumbUpIcon className="h-5 text-blue-500" />{" "}
            {Math.floor(movie.popularity)}
          </div>
          <div className="flex">
            <HeartIcon className="h-5 text-[red]" /> {movie.vote_count}
          </div>
          <PlusIcon className="h-5 " />
        </p>
      </div>
    </div>
  );
}
