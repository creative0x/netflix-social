import Image from "next/image";
import React from "react";
import { useRecoilState } from "recoil";
import { movieModalState, movieState } from "../../atoms/modalAtom";
import {
  HeartIcon,
  PlusCircleIcon,
  PlusIcon,
  ThumbUpIcon,
} from "@heroicons/react/outline";

export default function Thumbnail({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const [showModal, setShowModal] = useRecoilState(movieModalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  return (
    <div
      className="cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 p-4"
      onClick={() => {
        setCurrentMovie(result);
        setShowModal(true);
      }}
    >
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
      <div className="">
        <p className="flex items-center py-2 text-sm justify-between ">
          {result.release_date || result.first_air_date}{" "}
          <div className="flex">
            <ThumbUpIcon className="h-5 text-blue-500" />{" "}
            {Math.floor(result.popularity)}
          </div>
          <div className="flex">
            <HeartIcon className="h-5 text-[red]" /> {result.vote_count}
          </div>
          <PlusIcon className="h-5 " />
        </p>
      </div>
    </div>
  );
}
