import React from 'react'
import MovieSection_main from '../Movie_Section/MovieSection_main'

export default function All_movieSection() {
  const Calling_movie_section_data = [
    {
      Section_heading : 'now playing',
      Section_Url : '/movie/now_playing',
      page        : '10' ,
      cardType  : 'normal'
    },
    {
      Section_heading : 'popular',
      Section_Url : '/movie/popular',
      page        : '2' ,
      cardType  : 'normal'
    },
    {
      Section_heading : 'upcoming',
      Section_Url : '/movie/upcoming',
      page        : '1' ,
      cardType  : 'normal'
    },
    {
      Section_heading : 'All movies',
      Section_Url : '/discover/movie',
      page        : '2' ,
      cardType  : 'short'
    },
    {
      Section_heading : 'top rated',
      Section_Url : '/movie/top_rated',
      page        : '1' ,
      cardType  : 'normal'
    },
  
    // {
    //   Section_heading : '',
    //   Section_Url : '',
    //   page        : '' ,
    // },
  ]

  return (
    <>
      {
        Calling_movie_section_data.map(item => {
      return  <MovieSection_main Section_heading={item.Section_heading} Section_Url={item.Section_Url} page={item.page} cardType={item.cardType}  />
        })
      }
      <br />
    </>
  )
}
