import React from "react";
import Head from "next/head";
import Image from "next/image";
import { FaUserAlt } from "react-icons/fa";
import { useRouter } from "next/router";
import Link from "next/link";

export default function login() {
  return (
    <div className="relative flex justify-center h-screen w-screen flex-col md:items-center md:justify-center md:bg-transparent caret-transparent">
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="/../public/bg.jpg"
        layout="fill"
        className="-z-10 absolute top-0 left-0"
        objectFit="cover"
        alt=""
      />
      <div className="absolute top-0 w-full flex items-center justify-between py-6 px-10 md:py-10 md:px-20">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/330px-Netflix_2015_N_logo.svg.png"
          width={40}
          height={125}
          alt=""
          className=""
        />
        <div className="flex items-center space-x-4 cursor-pointer transition duration-100 transform hover:scale-105">
          <p className="font-[500]">Sign in</p>
          <FaUserAlt className="text-red-600" />
        </div>
      </div>

      <div className="text-center space-y-10 px-10 text-[#d6d6d6]">
        <h1 className="font-bold text-5xl md:text-6xl md:tracking-widest">
          NETFLIX & CHILL?
        </h1>
        <p className="text-xl md:text-2xl">
          No, seriously. Watch anywhere and cancel anytime.
        </p>
        <Link href="/signup">
          <button className="bg-[#E6020C] px-8 py-4 font-bold cursor-pointer transition duration-100 transform hover:scale-105">
            Sign Up Today!
          </button>
        </Link>
      </div>
    </div>
  );
}