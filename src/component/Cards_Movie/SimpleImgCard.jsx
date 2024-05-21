import React, { useEffect, useState } from "react";
import RatingStars from "../RatingStars/RatingStars";
import { FaPlus, FaRegCirclePlay } from "react-icons/fa6";
import { options, videoParams } from "../../utils/Constants";
import { fetchVideo } from "../../utils/FetchData";
import _ from "lodash";
import { formatDate } from "../../utils/Date&Runtime";
import { FaDotCircle } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";

function SimpleImgCard({ movie, index }) {
  // console.log(movie);
  const [videoKey, setVideoKey] = useState("");
  const [allGenres, setAllGenres] = useState([]);

  const {
    title,
    id: movieId,
    overview,
    original_language: lang,
    backdrop_path: background,
    poster_path: poster,
    genre_ids: genres,
    vote_average: rating,
    release_date,
  } = movie;

  const ReleaseDate = new Date(release_date).getFullYear();

  useEffect(() => {
    fetch("https://api.themoviedb.org/3//genre/movie/list", options)
      .then((res) => res.json())
      .then((res) => setAllGenres(res.genres))
      .catch((e) => console.log(e));
  }, []);

  const movieGenre = allGenres
    .filter((gen) => genres.includes(gen.id))
    .map((g) => g.name);
  // console.log(movieGenre)

  return (
    <>
      <div
        id="movieCard"
        className=" relative my-6 mi-h-[280px] min-w-[190px] h-[280px] w-[190px] hover:scale-x-105 hover:scale-y-105 hover:z-20   rounded-lg hover:rounded-xl hover:z- transition-all overflow-hidde duration-700  "
      >
        <div className="relative h-full w-full rounded-lg overflow-hidden hover:opacity-0 opacity-100 transition-all duration-300 ">
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster}`}
            alt=""
            className="size-full object-cover object-center rounded-md  "
          />
          <div className="absolute top-0 left-0 h-full w-full bg-black/45"></div>
        </div>

        <div className="absolute top-0 left-0 h-full w-full hover:top-[-10px] hover:left-[-15px] hover:h-[300px] hover:w-[220px] rounded-lg transition-all duration-500 ease-linear opacity-0 hover:opacity-100 overflow-hidden ">
            <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt="" className="h-[75%] w-full object-cover object-bottom " />
            <div className="absolute top-0 left-0 h-full w-full bg-black/40"></div>

            <div className="absolute rounded-lg overflow-hidden h-full top-[40%] bg-gradient-to-b from-zinc-950/15 from-[1.5%] via-zinc-950/90 via-[12%] to-50% to-zinc-950 backdrop-blur-[0.5px] pt-4  space-y-3 animation-fade  ">
              <div className="flex items-center justify-between gap-1 px-2 pt-4 pb-2
               ">
                <button className="text-[14px] tracking-wide flex-1 text-center bg-zinc-200/95 text-black font-semibold py-2 rounded-md hover:ring-2 ring-blue-300   shadow-white transition-all duration-300 "> watch trailer </button>
                <button className=" text-[12px] text-zinc-300 bg-zinc-800 py-3 px-3 rounded-md hover:text-white "> <FaPlus /> </button>
              </div>

              <ul className=" md:list-dis px-4 pt-0 flex items-center justify-between text-[13px]  font-semibold text-white/90 font-sans ">
                <li className=" flex items-center gap-1 ">
                  <span> {ReleaseDate} </span>
                </li>
                <li className=" flex items-center gap-1 ">
                  <GoDotFill className="text-[9px] mt-[3px] text-zinc-300/95 " />
                  <span> {movieGenre[0]} </span>
                </li>
                <li className=" flex items-center gap-1 ">
                  <GoDotFill className="text-[9px] mt-[3px] text-zinc-300/95 " />
                  <span> hindi </span>
                </li>
              </ul>

              <div className="px-4 space-y-1">
                <p className="text-[11px] text-zinc-300/90 font-thin tracking-widest line-clamp-3  "> {overview} </p>
              </div>

            </div>
        </div>

        {/* after hover card          hover:scale-x-[1.23] hover:scale-y-[1.14]  */}
        {/* <div  className={` absolute top-[-5px] left-[-10px] opacity-0 hover:opacity-100 w-full h-[290px] hover:h-[300px] hover:w-[220px] scale-105  hover:left-[-15px] transition-all delay-500 duration-500 text-white/95  overflow-hidden rounded-lg ease-linear animation-fad `} >

          <div className="relative h-full w-full ">
            <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt="" className="h-[75%] w-full object-cover object-bottom " />
            <div className="absolute top-0 left-0 h-full w-full bg-black/40"></div>

            <div className="absolute h-full top-[36%] bg-gradient-to-b from-zinc-950/15 from-[1.5%] via-zinc-950/90 via-[12%] to-50% to-zinc-950 backdrop-blur-[0.5px] pt-7 ">
              <div className="flex items-center justify-between gap-1 px-2 pt-4 pb-4 ">
                <button className="text-[14px] tracking-wide flex-1 text-center bg-zinc-200/95 text-black font-semibold py-2 rounded-md hover:ring-2 ring-blue-300   shadow-white transition-all duration-300 "> watch trailer </button>
                <button className=" text-[12px] text-zinc-300 bg-zinc-800 py-3 px-3 rounded-md hover:text-white "> <FaPlus /> </button>
              </div>

              <ul className=" md:list-dis px-4 pt-0 flex items-center justify-between text-[13px]  font-semibold pb-2 text-white/90 font-sans ">
                <li className=" flex items-center gap-1 ">=
                  <span> {ReleaseDate} </span>
                </li>
                <li className=" flex items-center gap-1 ">
                  <GoDotFill className="text-[9px] mt-[3px] text-zinc-300/95 " />
                  <span> {movieGenre[0]} </span>
                </li>
                <li className=" flex items-center gap-1 ">
                  <GoDotFill className="text-[9px] mt-[3px] text-zinc-300/95 " />
                  <span> hindi </span>
                </li>
              </ul>

              <div className="px-4 space-y-1">
                <p className="text-[11px] font-thin tracking-widest line-clamp-3  "> {overview} </p>
              </div>

            </div>

          </div>
        </div> */}
        {/* end after hover card */}
      </div>
    </>
  );
}

export default SimpleImgCard;
