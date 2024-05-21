import React from "react";

import { FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

function RatingStars({ rating }) {
    
  const FullColoredStars = Math.floor(rating / 2 );
  const HalfColoredStars = rating % 2 >= 1 ? 1 :  0 ;
  const emptyStars = 5 - FullColoredStars - HalfColoredStars ;
  // console.log(FullColoredStars , HalfColoredStars , emptyStars )

  return (
    <>
      {[...Array(FullColoredStars)].map((_, index) => (
        <FaStar key={`full-${index}`} className=" text-yellow-500" />
      ))}
      {HalfColoredStars === 1 && (
        <FaStarHalfAlt key={`half-(index)`} className="text-yellow-500" />
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={`full-${index}`} className=" text-gray-500" />
      ))}
    </>
  );
}

export default RatingStars;
