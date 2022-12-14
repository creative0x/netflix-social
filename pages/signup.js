import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import Link from "next/link";

export default function Login() {
  const [login, setLogin] = useState(false);
  const { signIn, signUp } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    await signUp(email, password);
  };

  return (
    <div className="bg-black md:bg-black relative flex justify-center items-center h-screen w-screen flex-col md:items-center md:justify-center md:bg-transparent caret-transparent ">
      <Head>
        <title>Netflix-signup</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-center flex flex-col items-center"
      >
        <div className="w-[250px]">
          <Image
            src="/netflixsocial.png"
            alt=""
            width={598}
            height={280}
            className=""
          />
        </div>

        <h3 className="font-[500] mt-10 md:text-2xl md:mt-12">Welcome!</h3>
        <h4 className="text-lg font-light mb-10">
          Please enter email and a password below to create account.
        </h4>
        <label>
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent border border-white/80 rounded-full py-1.5 px-8 text-sm md:text-lg"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className="p-1 text-[13px] font-light text-[red]">
              Please enter a valid email.
            </p>
          )}
        </label>
        <label>
          <input
            type="password"
            placeholder="Password"
            className="bg-transparent border border-white/80 rounded-full py-1.5 px-8 text-sm mt-4 md:text-lg md:mt-4"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="p-1 text-[13px] font-light text-[red]">
              Your password must contain between 4 and 60 characters.
            </p>
          )}
        </label>

        <button
          onClick={() => setLogin(true)}
          className="bg-white text-black px-[85px] md:px-[110px] py-1 mt-8 text-sm  md:mt-12 font-[500] rounded-full md:text-lg"
        >
          Sign up
        </button>
        <p className="font-light mt-4 md:text-lg">I forgot my password</p>

        <Link href="/login">
          <p className="font-medium text-lg mt-10">
            Already have an account?{" "}
            <span className="underline cursor-pointer">Sign in!</span>
          </p>
        </Link>

        {/* <Link href="/login">
          <button
            type="submit"
            className="bg-[#E6020C] px-[85px] py-1 mt-16 text-sm font-[500] rounded-full md:text-lg md:px-[105px] md:mb-24"
          >
            Sign in
          </button>
        </Link> */}
      </form>
    </div>
  );
}
