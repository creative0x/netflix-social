import Head from "next/head";
import Image from "next/image";
import Login from "../components/social/Login";
import styles from "../styles/Home.module.css";
import { getProviders, getSession, useSession } from "next-auth/react";
import Header from "../components/interface/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        {/* banner */}
        <section>{/* Row */}</section>
      </main>
    </div>
  );
}
