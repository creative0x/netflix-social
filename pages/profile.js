import React from "react";
import Image from "next/image";
import Header from "../components/interface/Header";
import SocialHeader from "../components/social/SocialHeader";
import WatchLater from "../components/social/WatchLater";

export default function profile() {
  return (
    <div>
      <Header />
      <SocialHeader />
      <WatchLater />
    </div>
  );
}
