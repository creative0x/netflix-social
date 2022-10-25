import React from "react";

export default function SocialHeader() {
  return (
    <div className="flex flex-col items-center">
      <div className=" flex flex-col items-center mt-32">
        <img
          src="https://earthlette.com.au/wp-content/uploads/2016/10/Jem-final-profile-pic-circle2.png"
          alt=""
          className="cursor-pointer rounded w-32"
        />
        <h1 className="p-2 font-semibold text-3xl">Alice Wonderland</h1>
      </div>
      <div className="flex text-lg justify-between w-[500px] font-light p-5 text-[#d6d6d6]">
        <p>265 Followers</p>
        <p>125 Following</p>
        <p>28 Recommendations</p>
        <p>98 Likes</p>
      </div>
      <div className="space-x-6">
        <button className="py-2 px-8 text-[#111] font-bold rounded-md bg-[#d6d6d6]">
          Followers
        </button>
        <button className="py-2 px-8 text-[#111] font-bold rounded-md bg-[#d6d6d6]">
          Edit Profile
        </button>
      </div>
    </div>
  );
}
