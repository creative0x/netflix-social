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
    if (login) {
      await signIn(email, password);
    }
  };

  return (
    <div className="bg-black md:bg-black relative flex justify-center items-center h-screen w-screen flex-col md:items-center md:justify-center md:bg-transparent caret-transparent ">
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-center flex flex-col items-center"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
          width={150}
          height={200}
          className=""
        />
        <h3 className="font-[500] my-10 md:text-xl md:my-12">Sign in</h3>
        <label>
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent border border-[#E6020C]/60 rounded-full py-1.5 px-8 text-sm md:text-lg"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className="p-1 text-[13px] font-light ">
              Please enter a valid email.
            </p>
          )}
        </label>
        <label>
          <input
            type="password"
            placeholder="Password"
            className="bg-transparent border border-[#E6020C]/60 rounded-full py-1.5 px-8 text-sm mt-4 md:text-lg md:mt-4"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="p-1 text-[13px] font-light ">
              Your password must contain between 4 and 60 characters.
            </p>
          )}
        </label>

        <button
          onClick={() => setLogin(true)}
          className="bg-[#E6020C] px-[85px] md:px-[110px] py-1 mt-8 text-sm  md:mt-12 font-[500] rounded-full md:text-lg"
          type="submit"
        >
          Sign in
        </button>
        <p className="font-light mt-4 md:text-lg">I forgot my password</p>

        <Link href="/signup">
          <button
            onClick={() => setLogin(false)}
            className="bg-[#E6020C] px-[85px] py-1 mt-16 text-sm font-[500] rounded-full md:text-lg md:px-[105px] md:mb-24"
          >
            Sign up
          </button>
        </Link>
      </form>
    </div>
  );
}
