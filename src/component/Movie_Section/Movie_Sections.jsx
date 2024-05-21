import React, { useEffect, useState } from "react";
import { fetchData, fetchVideo } from "../../utils/FetchData";
import SimpleImgCard from "../Cards_Movie/SimpleImgCard";
import Short_Card from "../Cards_Movie/Short_Card";

function Movie_Sections({ Section_heading, fetch_URl, page }) {
  const [movieList, setMovieList] = useState([]);
  const allMoiveList = movieList.results || [];

  useEffect(() => {
    // fetchData("/movie/now_playing", setMovieList);
    fetchData(fetch_URl, page, setMovieList);
  }, []);

  return (
    <>
      <div className={`w-full h-full ps-10  flex ${Section_heading == 'All movies' ? 'gap-[4px] ' : 'gap-2' } `}>
        { allMoiveList.map((item, index) => {
          return (
            <>
              {
                Section_heading === "All movies" 
                ? <Short_Card key={item.id} index={item.id} movie={item} />
                : <SimpleImgCard key={item.id} index={item.id} movie={item} />
              } 
            </>
          )
        })}
      </div>
    </>
  );
}

export default Movie_Sections;
