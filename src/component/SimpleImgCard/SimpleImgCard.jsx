import React from 'react'

function SimpleImgCard( {movie, index} ) {
  // console.log(movie)
  const { title , id, overview , original_language : lang , backdrop_path : background , poster_path : poster  } = movie ;

  return (
    <>
        <div  className='movieCard relative min-h-[280px] min-w-[190px] h-[280px] '>
            {/* <h1 className='absolute top-2 left-3 bg-white px-1 font-semibold'> {index} </h1> */}
            <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt="" className='size-full object-cover object-center rounded-md border-1 pa-2 ' />
        </div>
    </>
  )
}

export default SimpleImgCard