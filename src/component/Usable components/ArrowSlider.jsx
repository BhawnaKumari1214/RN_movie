import React from 'react'

function ArrowSlider() {
  return (
    <div>
      ArrowSlider
      <button
          className={`btnPrev flex items-center justify-start w-[5%] left-0 ${isBeginning ? "opacity-0" : ""} `}
          onClick={handlePrev}
          >
          {/* <MdChevronLeft /> */}
          <GoChevronLeft />
        </button>
        <button
          className={`btnNext flex items-center justify-end w-[5%] right-0 ${isEnd ? "opacity-0" : ""}  `}
          onClick={handleNext}
          >
          <GoChevronRight />
        </button>
    </div>
  )
  
}

// const [windowWidth, setWindowWidth] = useState(window.innerWidth);
// const [scrollPosition, setScrollPosition] = useState(0);
// const [scrollAmount, setScrollAmount] = useState("");
// const [isBeginning, setIsBeginning] = useState(true);
// const [isEnd, setIsEnd] = useState(false);
// const sliderRef = useRef(null);

// const [MovieList, setMovieList] = useState([]);
// const allMoiveList = MovieList.results || [];

// const handlePrev = () => {
//   const container = sliderRef.current;
//   container.scrollLeft -= scrollAmount; // Scroll left by the specified amount
// };

// const handleNext = () => {
//   const container = sliderRef.current;
//   container.scrollLeft += scrollAmount; // Scroll right by the specified amount
// };

// useEffect(() => {
//   function handleResize() {
//     setWindowWidth(window.innerWidth);
//   }

//   window.addEventListener("resize", handleResize);
//   return () => window.removeEventListener("resize", handleResize);
// });

// useEffect(() => {
//   const container = sliderRef.current;
//   if (container) {
//     const handleScroll = () => {
//       setScrollPosition(container.scrollLeft);
//       setIsBeginning(container.scrollLeft === 0);
//       setIsEnd(
//         container.scrollLeft + container.clientWidth >= container.scrollWidth
//       );

//       // console.log(` clientWidth : ${container.clientWidth} ---  scrollLeft : ${container.scrollLeft} ---  scrollWidth : ${container.scrollWidth}  `)
//     };

//     container.addEventListener("scroll", handleScroll);
//     return () => container.removeEventListener("scroll", handleScroll);
//   }
// }, []);

// useEffect(() => {
//   const newScrollkAmount = sliderRef.current
//     ? Math.floor(sliderRef.current.clientWidth * 0.9)
//     : 200;
//   setScrollAmount(newScrollkAmount);
// }, [windowWidth]);
export default ArrowSlider