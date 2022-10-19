import Head from "next/head";
import Image from "next/image";

import Header from "../components/interface/Header";
import Banner from "../components/interface/Banner";
import requests from "../utils/requests";
import Movies from "../components/interface/Movies";
import CatMenu from "../components/interface/CatMenu";
import useAuth from "../hooks/useAuth";
import { useRecoilValue } from "recoil";
import { movieModalState } from "../atoms/modalAtom";
import Modal from "../components/interface/Modal";
import Plans from "../components/interface/Plans";

export default function Home({ trendingNow, results }) {
  const { loading } = useAuth;
  const showModal = useRecoilValue(movieModalState);
  const subscription = false;

  // If user does not have a subscription show them the plans
  if (loading || subscription === null) return null;
  if (!subscription) return <Plans />;

  return (
    <div className="relative h-screen  bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative  pb-4  pt-[6rem]">
        <Banner trendingNow={trendingNow} />
        <section>
          <CatMenu />
          <Movies results={results} />
        </section>
      </main>
      {showModal && <Modal />}
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const genre = context.query.genre;
  const request = await fetch(
    requests[genre]?.url || requests.fetchTrending.url
  ).then((res) => res.json());

  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
    // one await promise for all fetch requests
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals.url).then((res) => res.json()),
    fetch(requests.fetchTrending.url).then((res) => res.json()),
    fetch(requests.fetchTopRated.url).then((res) => res.json()),
    fetch(requests.fetchActionMovies.url).then((res) => res.json()),
    fetch(requests.fetchComedyMovies.url).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies.url).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies.url).then((res) => res.json()),
    fetch(requests.fetchDocumentaries.url).then((res) => res.json()),
  ]);

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
      results: request.results,
    },
  };
};
