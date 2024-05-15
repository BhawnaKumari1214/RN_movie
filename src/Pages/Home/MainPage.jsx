import React, { useEffect, useState } from "react";
import "./MainPage.css";
import { options } from "../../utils/Constants";
import { fetchData } from "../../utils/FetchData";
import AllMovie from "../All_movies/AllMovie";

function MainPage() {

  return (
    <div className="MainPage h-screen w-full bg-black/95 text-zinc-200 ">
      <AllMovie />
    </div>
  );
}

export default MainPage;
