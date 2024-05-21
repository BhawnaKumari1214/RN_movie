import React from 'react'

export default function Short_Card( {movie, index} ) {
    const { title , id, overview , original_language : lang , backdrop_path : background , poster_path : poster  } = movie ;

    return (
      <>
      {/* min-h-[200px] h-[135px] */}
          <div className='movieCard relative min-w-[230px]  max-h-[287px] overflow-hidden hover: rounded-b-md '>
            <div id="movieCard_img" className='w-full h-[135px]'>
                <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt="" className='size-full object-cover object-center rounded-md border-1  ' />
            </div>  
            <div id='Div_cardDescription' className=' transition-all duration-700 delay-1000 bg-transparent ease-out pb-3 pt-2 px-3 text-white rounded-b-lg  '>
                <h1 className='pb-[1.5px]'> {title} </h1>
                <p id='cardDescription' className=' text-white/85  line-clamp-2 text-[13px] '> {overview} </p>
            </div>
          </div>
      </>
    )
}
