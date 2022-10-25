import React from "react";
import { useRecoilValue } from "recoil";
import { movieState } from "../../atoms/modalAtom";
import useAuth from "../../hooks/useAuth";
import useLikedList from "../../hooks/useLikedList";
import Row from "../interface/Row";

export default function Liked() {
  const { user } = useAuth();
  const movie = useRecoilValue(movieState);
  const likedList = useLikedList(user?.uid);
  return (
    <div className="">
      <h1 className="font-medium text-3xl ml-12 -mb-10 ">Liked</h1>
      {likedList.length > 0 && (
        <Row title="Watch Later" topResults={likedList} />
      )}
    </div>
  );
}
