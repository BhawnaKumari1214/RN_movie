import React from "react";
import { NavLink } from "react-router-dom";

function MovieSection_header() {
  return (
    <>
      <div className=" flex items-center justify-between">
        <h1 className="text-lg text-white/85 "> all movies </h1>
        <NavLink to={"#"}>
          <span className="pe-4 text-xs text-sky-400/80 hover:text-sky-500  hover:underline ">
            {" "}
            see more{" "}
          </span>
        </NavLink>
      </div>
    </>
  );
}

export default MovieSection_header;
