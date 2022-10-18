import React from "react";
import Thumbnail from "./Thumbnail";

export default function Movies({ results }) {
  return (
    <div className=" my-10 sm:grid md:grid-cols-2 xl:grid-cols-5 m-5">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
}
