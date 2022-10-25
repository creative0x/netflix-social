import React from "react";
import { useRecoilValue } from "recoil";
import { movieState } from "../../atoms/modalAtom";
import useAuth from "../../hooks/useAuth";
import useList from "../../hooks/useList";
import Row from "../interface/Row";

export default function WatchLater() {
  const { user } = useAuth();
  const movie = useRecoilValue(movieState);
  const watchLaterList = useList(user?.uid);
  return (
    <div className="mt-10">
      <h1 className="font-medium text-3xl ml-12 -mb-10 ">Watch Later</h1>
      {watchLaterList.length > 0 && (
        <Row title="Watch Later" topResults={watchLaterList} />
      )}
    </div>
  );
}
