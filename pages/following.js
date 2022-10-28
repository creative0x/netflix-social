import React from "react";
import Header from "../components/interface/Header";
import Follower1 from "../components/social/Follower1";
import Follower2 from "../components/social/Follower2";
import Follower3 from "../components/social/Follower3";
import Follower4 from "../components/social/Follower4";
import FollowingMenu from "../components/social/FollowingMenu";
import requests from "../utils/requests";

export default function Following({
  romanceMovies,
  documentaries,
  comedyMovies,
  horrorMovies,
}) {
  return (
    <div>
      <Header />
      <section className="mt-28 mx-10">
        <FollowingMenu />
        <Follower1 romanceMovies={romanceMovies} />
        <Follower2 documentaries={documentaries} />
        <Follower3 comedyMovies={comedyMovies} />
        <Follower4 horrorMovies={horrorMovies} />
      </section>
    </div>
  );
}

export const getServerSideProps = async () => {
  const [
    romanceMovies,
    documentaries,
    comedyMovies,
    horrorMovies,

    // one await promise for all fetch requests
  ] = await Promise.all([
    fetch(requests.fetchRomanceMovies.url).then((res) => res.json()),
    fetch(requests.fetchDocumentaries.url).then((res) => res.json()),
    fetch(requests.fetchComedyMovies.url).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies.url).then((res) => res.json()),
  ]);

  return {
    props: {
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
    },
  };
};
