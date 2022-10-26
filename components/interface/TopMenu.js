import React, { useState } from "react";
import { BiTrendingUp } from "react-icons/bi";
import { GoFlame } from "react-icons/go";
import { VscDiffAdded } from "react-icons/vsc";
import { SiNetflix } from "react-icons/si";
import requests from "../../utils/requestsTop";
import { useRouter } from "next/router";

export default function TopMenu() {
  const [trendingBtn, setTrendingBtn] = useState(true);
  const [popularBtn, setPopularBtn] = useState(false);
  const [addedBtn, setAddedBtn] = useState(false);
  const [originalsBtn, setOriginalsBtn] = useState(false);

  const router = useRouter();

  const trendingHandleClick = () => {
    setPopularBtn(false);
    setAddedBtn(false);
    setOriginalsBtn(false);
    setTrendingBtn(true);
    router.push(`/?top=fetchTrending`);
    // window.history.pushState(null, "Trending", "/?top=fetchTrending");
  };
  const popularHandleClick = () => {
    setPopularBtn(true);
    setAddedBtn(false);
    setOriginalsBtn(false);
    setTrendingBtn(false);
    router.push(`/?top=fetchTopRated`);
    // window.history.pushState(null, "Most Popular", "/?top=fetchTopRated");
  };
  const addedHandleclick = () => {
    setPopularBtn(false);
    setAddedBtn(true);
    setOriginalsBtn(false);
    setTrendingBtn(false);
    router.push(`/?top=fetchLatest`);
    // window.history.pushState(null, "Recently Added", "/?top=fetchLatest");
  };
  const originalsHandleclick = () => {
    setPopularBtn(false);
    setAddedBtn(false);
    setOriginalsBtn(true);
    setTrendingBtn(false);
    router.push(`/?top=fetchNetflixOriginals`);
    // window.history.pushState(null, "Originals", "/?top=fetchNetflixOriginals");
  };

  return (
    <div className="mt-10">
      <ul className="flex justify-between  border-y border-gray-500  text-xl   text-center ">
        <li
          className=" flex items-center  justify-center w-full text-[red]  duration-200 transform hover:scale-110 font-semibold py-4 gap-x-2 cursor-pointer"
          style={{
            color: trendingBtn ? "red" : "white",
          }}
          onClick={trendingHandleClick}
        >
          {requests.fetchTrending.title}
          <BiTrendingUp className="text-4xl" />
        </li>
        <li
          className=" flex items-center  justify-center w-full   duration-200 transform hover:scale-110 font-semibold  py-4 gap-x-2 cursor-pointer"
          style={{
            color: popularBtn ? "red" : "",
          }}
          onClick={popularHandleClick}
        >
          {requests.fetchTopRated.title}
          <GoFlame className="text-3xl" />
        </li>
        <li
          className=" flex items-center  justify-center w-full   duration-200 transform hover:scale-110 font-semibold  py-4 gap-x-2 cursor-pointer"
          style={{
            color: addedBtn ? "red" : "",
          }}
          onClick={addedHandleclick}
        >
          {requests.fetchLatest.title} <VscDiffAdded className="text-3xl" />
        </li>
        <li
          className=" flex items-center  justify-center w-full   duration-200 transform hover:scale-110  font-semibold  py-4 gap-x-2 cursor-pointer"
          style={{
            color: originalsBtn ? "red" : "",
          }}
          onClick={originalsHandleclick}
        >
          {requests.fetchNetflixOriginals.title}{" "}
          <SiNetflix className="text-3xl" />
        </li>
      </ul>
    </div>
  );
}
