import Head from "next/head";
import Image from "next/image";
import { getProducts } from "@stripe/firestore-stripe-payments";
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
import payments from "../lib/stripe";
import useSubscription from "../hooks/useSubscription";
import TopMenu from "../components/interface/TopMenu";
import TopRequests from "../utils/requestsTop";
import Row from "../components/interface/Row";

export default function Home({ trendingNow, results, products, topResults }) {
  const { loading, user } = useAuth();
  const showModal = useRecoilValue(movieModalState);
  // sets the subscription
  const subscription = useSubscription(user);

  // If user does not have a subscription show them the plans
  if (loading || subscription === null) return null;
  if (!subscription) return <Plans products={products} />;

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
          <TopMenu />
          <Row topResults={topResults} />
          <CatMenu />
          <Movies results={results} />
        </section>
      </main>
      {showModal && <Modal />}
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const products = await getProducts(payments, {
    includePrices: true,
    activeOnly: true,
  })
    .then((res) => res)
    .catch((error) => console.log(error.message));

  const genre = context.query.genre;
  const top = context.query.top;

  const request = await fetch(
    requests[genre]?.url || requests.fetchActionMovies.url
  ).then((res) => res.json());

  const TopRequest = await fetch(
    TopRequests[top]?.url || TopRequests.fetchTrending.url
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
    fetch(TopRequests.fetchNetflixOriginals.url).then((res) => res.json()),
    fetch(TopRequests.fetchTrending.url).then((res) => res.json()),
    fetch(TopRequests.fetchTopRated.url).then((res) => res.json()),
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
      topResults: TopRequest.results,
      products,
    },
  };
};
