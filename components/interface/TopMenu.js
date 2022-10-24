import React, { useState } from "react";
import { BiTrendingUp } from "react-icons/bi";
import { GoFlame } from "react-icons/go";
import { VscDiffAdded } from "react-icons/vsc";
import { SiNetflix } from "react-icons/si";
import requests from "../../utils/requestsTop";
import { useRouter } from "next/router";

export default function TopMenu() {
  const [trendingBtn, setTrendingBtn] = useState(false);
  const [popularBtn, setPopularBtn] = useState(false);
  const [addedBtn, setAddedBtn] = useState(false);
  const [originalsBtn, setOriginalsBtn] = useState(false);

  const router = useRouter();

  const trendingHandleClick = () => {
    setPopularBtn(false);
    setAddedBtn(false);
    setOriginalsBtn(false);
    setTrendingBtn(true);
    // router.push(`/?genre=fetchTrending`); use push state so page doesn't refresh after router push. Applied to all buttons in menu
    window.history.pushState(null, "Trending", "/?genre=fetchTrending");
  };
  const popularHandleClick = () => {
    setPopularBtn(true);
    setAddedBtn(false);
    setOriginalsBtn(false);
    setTrendingBtn(false);
    // router.push(`/?genre=fetchTopRated`);
    window.history.pushState(null, "Most Popular", "/?genre=fetchTopRated");
  };
  const addedHandleclick = () => {
    setPopularBtn(false);
    setAddedBtn(true);
    setOriginalsBtn(false);
    setTrendingBtn(false);
    // router.push(`/?genre=fetchLatest`);
    window.history.pushState(null, "Recently Added", "/?genre=fetchLatest");
  };
  const originalsHandleclick = () => {
    setPopularBtn(false);
    setAddedBtn(false);
    setOriginalsBtn(true);
    setTrendingBtn(false);
    // router.push(`/?genre=fetchNetflixOriginals`);
    window.history.pushState(
      null,
      "Originals",
      "/?genre=fetchNetflixOriginals"
    );
  };

  return (
    <div className="mt-10">
      <ul className="flex justify-between  border-y border-gray-500  text-lg cursor-pointer hover:font-medium text-center ">
        <li
          className=" flex items-center  justify-center w-full  hover:bg-[red] py-4 gap-x-2"
          style={{
            backgroundColor: trendingBtn ? "red" : "",
            fontWeight: trendingBtn ? "500" : "",
          }}
          onClick={trendingHandleClick}
        >
          {requests.fetchTrending.title}
          <BiTrendingUp className="text-4xl" />
        </li>
        <li
          className=" flex items-center  justify-center w-full  hover:bg-[red] py-4 gap-x-2"
          style={{
            backgroundColor: popularBtn ? "red" : "",
            fontWeight: popularBtn ? "500" : "",
          }}
          onClick={popularHandleClick}
        >
          {requests.fetchTopRated.title}
          <GoFlame className="text-3xl" />
        </li>
        <li
          className=" flex items-center  justify-center w-full  hover:bg-[red] py-4 gap-x-2"
          style={{
            backgroundColor: addedBtn ? "red" : "",
            fontWeight: addedBtn ? "500" : "",
          }}
          onClick={addedHandleclick}
        >
          {requests.fetchLatest.title} <VscDiffAdded className="text-3xl" />
        </li>
        <li
          className=" flex items-center  justify-center w-full  hover:bg-[red] py-4 gap-x-2"
          style={{
            backgroundColor: originalsBtn ? "red" : "",
            fontWeight: originalsBtn ? "500" : "",
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
