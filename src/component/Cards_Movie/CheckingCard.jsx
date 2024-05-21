import React, { useEffect, useState } from "react";
import "./CheckingCard.css";
import { options } from "../../utils/Constants";
import { fetchVideo } from "../../utils/FetchData";

export default function CheckingCard() {
  const [videoKey , setVideoKey] = useState('')

  const videoParams = 'autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&enablejsapi=1&origin=http://yourdomain.com&start=40';
  const videoKey1 = 'B1cgzlnS7Ks'

  useEffect(() => {
    const fetchVideo = async () => {

      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/1058694/videos?language=en-US',
          options
        );
        const data = await response.json();
        const videoClipData = data.results[1] ;
        setVideoKey(videoClipData.key)
        // console.log(videoClipData)
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    };

    fetchVideo();
  }, []);

  //  console.log(video)
  return (
    <>
      <div className="w-full h-[320px] flex gap-6">
      <iframe
        width="300"
        height="250"
        src={`https://www.youtube.com/embed/${videoKey}?${videoParams}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      </div>
    </>
  );
}
