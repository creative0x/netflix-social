import React from "react";
import Image from "next/image";
import Header from "../components/interface/Header";
import SocialHeader from "../components/social/SocialHeader";
import WatchLater from "../components/social/WatchLater";
import Recommended from "../components/social/Recommended";
import Liked from "../components/social/Liked";
import Friends from "../components/social/Friends";

export default function profile() {
  return (
    <div>
      <Header />
      <SocialHeader />
      <Friends />
      <WatchLater />
      <Recommended />
      <Liked />
    </div>
  );
}
