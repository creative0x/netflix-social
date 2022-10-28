import React from "react";
import { useRecoilValue } from "recoil";
import { movieState } from "../../atoms/modalAtom";
import useAuth from "../../hooks/useAuth";
import useRecommendedList from "../../hooks/useRecommendedList";
import Row from "../interface/Row";

export default function Recommended() {
  const { user } = useAuth();
  const movie = useRecoilValue(movieState);
  const recommendedList = useRecommendedList(user?.uid);
  return (
    <div className="">
      <h1 className="font-medium text-2xl ml-8 -mb-4  ">Recommended</h1>
      {recommendedList.length > 0 && (
        <Row title="Watch Later" topResults={recommendedList} />
      )}
    </div>
  );
}
