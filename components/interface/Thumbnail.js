import Image from "next/image";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { movieModalState, movieState } from "../../atoms/modalAtom";
import {
  HeartIcon,
  PlusCircleIcon,
  PlusIcon,
  ThumbUpIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { ThumbUpIcon as ThumbUpIconFilled } from "@heroicons/react/solid";

export default function Thumbnail({ result }) {
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
    <div className="cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 p-4">
      <Image
        onClick={() => {
          setCurrentMovie(result);
          setShowModal(true);
        }}
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
              ? Math.floor(result.popularity) + 1
              : Math.floor(result.popularity)}
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

            {liked ? result.vote_count + 1 : result.vote_count}
          </div>
          <PlusIcon className="h-5 " />
        </p>
      </div>
    </div>
  );
}
