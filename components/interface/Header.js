import React, { useEffect, useState } from "react";
import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";
import useAuth from "../../hooks/useAuth";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
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

  return (
    // if scrolled change the background color of the header
    <header className={`${isScrolled && " z-[100]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
          width={100}
          height={100}
        />
        {/* <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
          <Link href="/social">
            <li className="headerLink">*NEW* Social</li>
          </Link>
        </ul> */}
      </div>

      <div className="flex items-center space-x-4 text-sm">
        <SearchIcon className="text-white hidden sm:inline w-6 h-6 " />
        <BellIcon className="h-6 w-6 text-white" />
        <Link href="/account">
          <img
            src="https://occ-0-1190-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
            alt=""
            className="cursor-pointer rounded"
            onClick={logout}
          />
        </Link>
      </div>
    </header>
  );
}
