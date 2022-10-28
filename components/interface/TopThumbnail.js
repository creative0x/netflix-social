import React, { useState } from "react";
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
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { ThumbUpIcon as ThumbUpIconFilled } from "@heroicons/react/solid";

export default function TopThumbnail({ movie }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const [showModal, setShowModal] = useRecoilState(movieModalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  const [liked, setLiked] = useState(false);
  const [recommended, setRecommended] = useState(false);

  const handleLiked = () => {
    setLiked(!liked);
  };
  const handleRecommended = () => {
    setRecommended(!recommended);
  };

  return (
    <div className=" my-4 relative h-full min-w-full md:min-w-[270px] cursor-pointer transition duration-200 ease-out md:hover:scale-105 ">
      <Image
        onClick={() => {
          setCurrentMovie(movie);
          setShowModal(true);
        }}
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
            {recommended ? (
              <ThumbUpIconFilled
                onClick={handleRecommended}
                className="h-5 text-blue-500 transition duration-100 ease-in-out hover:scale-125"
              />
            ) : (
              <ThumbUpIcon
                onClick={handleRecommended}
                className="h-5 text-blue-500 transition duration-100 ease-in-out hover:scale-125"
              />
            )}

            {recommended
              ? Math.floor(movie.popularity) + 1
              : Math.floor(movie.popularity)}
          </div>
          <div className="flex">
            {liked ? (
              <HeartIconFilled
                onClick={handleLiked}
                className="h-5 text-[red] transition duration-100 ease-in-out hover:scale-125"
              />
            ) : (
              <HeartIcon
                onClick={handleLiked}
                className="h-5 text-[red] transition duration-100 ease-in-out hover:scale-125"
              />
            )}

            {liked ? movie.vote_count + 1 : movie.vote_count}
          </div>
          <PlusIcon className="h-5 transition duration-100 ease-in-out hover:scale-125 " />
        </p>
      </div>
    </div>
  );
}
