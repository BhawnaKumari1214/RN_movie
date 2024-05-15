import React, { useEffect, useState } from "react";
import "./Home.css";

import Carousel from "../../component/Carousel/Carousel";
// import AllMovie_Section from "../../component/AllMovie_Section/AllMovie_Section";
import MovieSection_main from "../../component/AllMovie_Section/MovieSection_main";

function Home() {
  const [MovieList, setMovieList] = useState([]);

  return (
   <>
    <div className="h-full w-full">
       <div className="h-full w-full">
          <div className="">
              <Carousel />
          </div>

          <div className="h-fit w-full bg-black/80 ">
            {/* <AllMovie_Section /> */}
            <MovieSection_main />
            {/* <AllMovie_Section /> */}
            
          </div>

       </div>
    </div>
   </>
  );
}

export default Home;
