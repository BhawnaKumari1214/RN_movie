import React, { useEffect, useState } from 'react'
import './AllMovie.css'

import { fetchData } from '../../utils/FetchData';
import { NavLink } from 'react-router-dom';
import SimpleImgCard from '../../component/SimpleImgCard/SimpleImgCard';


function AllMovie() {
    const [MovieList, setMovieList] = useState([]);

  const allMoiveList = MovieList.results  || [] ;
  console.log(allMoiveList)

  useEffect(() => {
     fetchData("/discover/movie", setMovieList);
  }, []);

  return (
    <div className='capitalize  h-full w-full px-8 bg-emerald-5 overflow-hidde'>

        <div className='flex items-center justify-between'>
            <h1> all movies </h1>
            <NavLink to={'#'}>
                <span className=' text-xs text-sky-400 hover:text-sky-500  hover:underline '> see more </span>
            </NavLink>
        </div>

        <div className='flex items-center gap-4 flex-nowrap overflow-auto w-full h-44  '>
          {
            allMoiveList.map(item => {
              return(
                <SimpleImgCard />
              )
            })
          }
        </div>

    </div>
  )
}

export default AllMovie