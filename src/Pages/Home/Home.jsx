import React, { useEffect, useState } from "react";
import "./Home.css";

import Carousel from "../../component/Carousel/Carousel";
import MovieSection_main from "../../component/Movie_Section/MovieSection_main";
import All_movieSection from "../../component/All_movieSection/All_movieSection";
import CheckingCard from "../../component/Cards_Movie/CheckingCard";
import { options } from "../../utils/Constants";

function Home() {
  const [MovieList, setMovieList] = useState([]);
  // const [genre , setGenre] = useState([])
  // const check = [16 , 10749 , 18]

  // useEffect(()=>{
  //   fetch('https://api.themoviedb.org/3//genre/movie/list', options)
  //   .then(res => res.json())
  //   // .then(res => document.write(JSON.stringify(res.genres)) )
  //   .then(res => setGenre(res.genres) )
  //   .catch(e => console.log(e))
  // },[])


  return (
    <>
      <div className="h-full w-full bg-black/90 ">
        <div className="h-full w-full ">
          <div className="">
            <Carousel />
          </div>

          <div className="h-fit w-full pt-8 xl:pt-12 ">
            <>
              {/* <CheckingCard /> */}
            </>
            <All_movieSection />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
