import { Base_Url, options, videoParams } from "./Constants";


export const fetchData = ( url, page , setter ) => {
    fetch(`${Base_Url}/${url}?include_adult=false&language=en-US&page=${page}`, options)
      .then((res) => res.json() )
      .then((res) => {
        console.log(res)
        setter(res)
      })
      .catch((e) => console.log(e));
}


export const fetchVideo = async ( movie_Id , setter )=>{
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_Id}/videos?language=en-US`,
        options
      );
      const data = await response.json();
      const videoClipData = data.results[0] ;
      setter(videoClipData.key)

      // console.log(videoClipData)
    } catch (error) {
      console.error('Error fetching video:', error);
    }
  };

  // fetchVideo();
