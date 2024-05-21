import React from 'react'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'

export default function PrevNextBtn({handlePrev, handleNext, isBeginning
    ,isEnd , cardType }) {
      // console.log(cardType)
  return (
    <>
         <button
              className={`btnPrev absolute ${cardType === 'short' ? 'h-[135px]' : 'h-full' }  z-10 text-2xl text-white/80 hover:text-white transition-all duration-200 ease-linear bg-gradient-to-r from-black/75 from-16% via-black/25 to-transparent hover:from-black/95 hover:via-black/55 hover:to-transparent flex items-center justify-start w-[5%] left-0 ${
                isBeginning ? "opacity-0" : ""
              }  `}
              onClick={handlePrev}
            >
              <GoChevronLeft />
            </button>
            <button
              className={`btnNext absolute ${cardType === 'short' ? 'h-1/2' : 'h-full' }  z-10 text-2xl text-white/80 hover:text-white transition-all duration-200 ease-linear bg-gradient-to-l from-black/75 from-16% via-black/25 to-transparent hover:from-black/95 hover:via-black/55 hover:to-transparent  flex items-center justify-end w-[5%] right-0 ${
                isEnd ? "opacity-0" : ""
              }  `}
              onClick={handleNext}
            >
              <GoChevronRight />
            </button>
    </>
  )
}
