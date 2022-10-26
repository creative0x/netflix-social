import { SearchIcon } from "@heroicons/react/solid";
import React from "react";

export default function FollowingMenu() {
  return (
    <div className="">
      <div className="flex space-x-20 text-2xl ">
        <h2 className="">Following Activity</h2>
        <h2 className="text-gray-400">Watch Together</h2>
      </div>
      <div className=" flex items-center mt-8 w-full justify-between">
        <div className="space-x-5">
          <button className="py-2 px-10 text-[#111] font-semibold rounded-sm bg-[#d6d6d6]">
            Follow
          </button>
          <button className="py-2 px-10 text-[#d9d9d9] font-semibold rounded-sm bg-[#1d1d1d] mr-auto ">
            Sort by
          </button>
        </div>

        <div className="bg-[#1d1d1d] w-[300px] h-10 flex rounded-sm">
          <div className=" ml-2 flex items-center space-x-3 text-gray-400">
            <SearchIcon className="  w-6 h-6 " />
            <p className="">Search</p>
          </div>
        </div>
      </div>
    </div>
  );
}
