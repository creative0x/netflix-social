import React from "react";
import Header from "../components/interface/Header";
import Follower1 from "../components/social/Follower1";
import Follower2 from "../components/social/Follower2";
import FollowingMenu from "../components/social/FollowingMenu";
import requests from "../utils/requests";

export default function Following({ romanceMovies, documentaries }) {
  return (
    <div>
      <Header />
      <section className="mt-28 mx-10">
        <FollowingMenu />
        <Follower1 romanceMovies={romanceMovies} />
        <Follower2 documentaries={documentaries} />
      </section>
    </div>
  );
}

export const getServerSideProps = async () => {
  const [
    romanceMovies,
    documentaries,

    // one await promise for all fetch requests
  ] = await Promise.all([
    fetch(requests.fetchRomanceMovies.url).then((res) => res.json()),
    fetch(requests.fetchDocumentaries.url).then((res) => res.json()),
  ]);

  return {
    props: {
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  };
};
