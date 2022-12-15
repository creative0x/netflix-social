import React, { useEffect, useState } from "react";
import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";
import useAuth from "../../hooks/useAuth";
import { RiTv2Fill } from "react-icons/ri";
import { MdLocalMovies } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { RiUser5Fill } from "react-icons/ri";
import { HiMenuAlt3 } from "react-icons/hi";
import Image from "next/image";
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuIsClicked, setMenuIsClicked] = useState(false);
  const { logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      // if window is scrolled then set isScrolled to true
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // listen for the scroll and then send in handle scroll function
    window.addEventListener("scroll", handleScroll);

    return () => {
      // clean up the event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuClicked = () => {
    setIsScrolled(false);
  };

  return (
    // className={` ${isScrolled && "bg-black/20  z-[100]"}`}>  example of how to apply the function with styling
    // if scrolled change the background color of the header
    <div>
      <header
        className={`bg-black/80 fixed  ${isScrolled && "invisible"} ${
          menuIsClicked && "bg-black/80"
        }`}
      >
        <div className="w-[125px]">
          <Link href="/">
            <Image
              src="/netflixsocial.png"
              alt=""
              width={598}
              height={280}
              layout="responsive"
              className={`text-white cursor-pointer ${isScrolled && "hidden "}`}
            />
          </Link>
        </div>

        <div
          className={`cursor-pointer flex items-center space-x-2 transition duration-200 ease-in-out hover:scale-110 ${
            isScrolled && "hidden"
          }`}
        >
          <RiTv2Fill className="text-2xl" />
          <h1 className="text-xl hidden lg:flex ">TV Shows</h1>
        </div>
        <div
          className={`cursor-pointer flex items-center space-x-2 transition duration-200 ease-in-out hover:scale-110 ${
            isScrolled && "hidden"
          }`}
        >
          <MdLocalMovies className="text-2xl" />
          <h1 className="text-xl hidden lg:flex ">Movies</h1>
        </div>
        <div
          className={`cursor-pointer flex items-center space-x-2 transition duration-200 ease-in-out hover:scale-110 ${
            isScrolled && "hidden"
          }`}
        >
          <AiFillStar className="text-2xl" />
          <h1 className="text-xl hidden lg:flex ">New & Popular</h1>
        </div>
        <Link href="/profile">
          <div
            className={`cursor-pointer flex items-center space-x-2 transition duration-200 ease-in-out hover:scale-110 ${
              isScrolled && "hidden"
            }`}
          >
            <RiUser5Fill className="text-2xl" />
            <h1 className="text-xl hidden lg:flex ">Social Profile</h1>
          </div>
        </Link>
        <Link href="/account">
          <div
            className={`cursor-pointer flex items-center space-x-1 ${
              isScrolled && "hidden"
            }`}
          >
            <img
              src="https://earthlette.com.au/wp-content/uploads/2016/10/Jem-final-profile-pic-circle2.png"
              alt=""
              className="cursor-pointer  bg-white rounded-full w-12"
            />
          </div>
        </Link>
      </header>

      <div
        onClick={menuClicked}
        className={
          isScrolled
            ? "bg-[black]/80 z-50 border border-white fixed right-10 top-5 rounded-full p-5 cursor-pointer transition duration-200 ease-in-out hover:scale-110"
            : "hidden"
        }
      >
        <HiMenuAlt3 className="text-3xl text-[white] " />
      </div>
    </div>
  );
}
