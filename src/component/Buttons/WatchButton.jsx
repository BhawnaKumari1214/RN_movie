import React from 'react'
import playBtn from '../../assets/images/play_icon.png'
import { FaRegCirclePlay } from "react-icons/fa6";

function WatchButton() {
  return (
    <>
        <button className=' flex justify-center items-center gap-2 text-white bg-blue-800 py-2 px-3 rounded-md font-extralight' >
            <FaRegCirclePlay className='text-2xl ' />
            <span> play now </span>
        </button>
    </>
  )
}

export default WatchButton