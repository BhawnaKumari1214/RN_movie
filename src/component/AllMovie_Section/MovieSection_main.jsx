import React, { useEffect, useRef, useState } from 'react'
import MovieSection_header from './MovieSection_header'
import { fetchData } from '../../utils/FetchData';
import Movie_Sections from './Movie_Sections';
import PrevNextBtn from './PrevNextBtn';


function MovieSection_main() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollAmount, setScrollAmount] = useState("");
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const sliderRef = useRef(null);

  const [MovieList, setMovieList] = useState([]);
  const allMoiveList = MovieList.results || [];


    // useEffect(() => {
    // fetchData("/movie/now_playing", setMovieList);
    // }, []);
    
  const handlePrev = () => {
    const container = sliderRef.current;
    container.scrollLeft -= scrollAmount; 
  };

  const handleNext = () => {
    const container = sliderRef.current;
    container.scrollLeft += scrollAmount; 
  };

  useEffect(()=>{
    function handleResize(){
        setWindowWidth(window.innerWidth)
        console.log(windowWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  },[windowWidth])

  useEffect(()=>{
    const newScrollAmount = sliderRef.current ? Math.floor(sliderRef.current.clientWidth) : 0 ;
    setScrollAmount( newScrollAmount )
  },[windowWidth])

  useEffect(()=>{
    const container = sliderRef.current ;
    if(container){
        function handleScroll(){
           setScrollPosition(container.scrollLeft);
           setIsBeginning( container.scrollLeft === 0 ) 
           setIsEnd( container.scrollLeft + container.clientWidth >= container.scrollWidth )
        }

        container.addEventListener('scroll', handleScroll)
        return () => container.removeEventListener('scroll', handleScroll)
    }
  },[])


  return (
    <>
     <div
      id="AllMovieSection"
      className=" relative capitalize pt-5 pb-5 space-y-2 w-full ps-6 pe-2 bg-emerald-5 overflow-hidden "
    >
      <MovieSection_header />

      <div  className='relative h-fit w-full me-2 bg-blac '>
        <>
          <PrevNextBtn handleNext={handleNext} handlePrev={handlePrev} isBeginning={isBeginning} isEnd={isEnd} />
        </>

        <div ref={sliderRef} id='SliderSection' className='no-scrollbar scroll-smooth transition-scroll duration-300 ease-in-out flex gap-2 overflow-auto '>
           <Movie_Sections />
        </div>      
      </div>
        
    </div>
    </>
  )
}

export default MovieSection_main