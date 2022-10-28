import Link from "next/link";
import React from "react";

export default function SocialHeader() {
  return (
    <div className="flex flex-col items-center">
      <div className=" flex flex-col items-center mt-32">
        <img
          src="https://earthlette.com.au/wp-content/uploads/2016/10/Jem-final-profile-pic-circle2.png"
          alt=""
          className="cursor-pointer rounded-full bg-white w-32"
        />
        <h1 className="p-2 font-semibold text-3xl">Alice Wonderland</h1>
      </div>
      <div>
        <h2 className="text-xl mb-10 font-light tracking-wider">
          @awonderland63
        </h2>
      </div>
      <div className="flex text-lg justify-between w-[600px] font-light  text-[#d6d6d6]">
        <div className="flex flex-col items-center">
          <p className="text-3xl font-semibold">265</p>
          <p>Followers</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-3xl font-semibold">125</p>
          <p>Following</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-3xl font-semibold">28</p>
          <p>Recommendations</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-3xl font-semibold">98</p>
          <p>Likes</p>
        </div>
      </div>
      <div className="mt-8 space-x-6">
        <Link href="/following">
          <button className="py-2 px-10 text-[#111] font-bold rounded-md bg-[#d6d6d6]">
            Friends
          </button>
        </Link>

        <button className="py-2 px-8 text-[#111] font-bold rounded-md bg-[#d6d6d6]">
          Edit Profile
        </button>
      </div>
    </div>
  );
}
