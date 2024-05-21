import React from "react";
import { NavLink } from "react-router-dom";

function MovieSection_header({Section_heading}) {
  // console.log(Section_heading)
  return (
    <>
      <div className=" mb-[-12px] pb-0 flex items-center justify-between">
        <h1 className="text-lg text-white/85 ps-11 "> {Section_heading} </h1>
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
