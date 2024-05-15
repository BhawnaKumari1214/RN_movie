import React, { useEffect, useState } from "react";
import { fetchData } from "../../utils/FetchData";
import SimpleImgCard from "../SimpleImgCard/SimpleImgCard";

function Movie_Sections() {
  const [movieList, setMovieList] = useState([]);
  const allMoiveList = movieList.results || [];

  useEffect(() => {
    fetchData("/movie/now_playing", setMovieList);
  }, []);

  return (
    <>
      <div className="w-full flex gap-2 ">
        {allMoiveList.map((item, index) => {
          return <SimpleImgCard key={item.id} index={index} movie={item} />;
        })}
      </div>
    </>
  );
}

export default Movie_Sections;
