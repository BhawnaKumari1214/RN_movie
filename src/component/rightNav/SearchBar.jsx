import React from 'react'
import { FaUser } from "react-icons/fa";
import { IoMdSearch } from 'react-icons/io';

function SearchBar() {
  return (
    <>
        <div className='searchbar h-8 w-[250px] flex items-center rounded-full overflow-hidden  text-zinc-800 ' >
            <input type="text" placeholder='search ...' className='px-4  h-full w-full flex-1 bg-transparent outline-none border-none  text-sm bg-zinc-50' />
            <div className='h-full w-10 flex items-center justify-center bg-blue-600'>
            <IoMdSearch className='h-6 text-lg text-white' />
            </div>
        </div>
    </>
  )
}

export default SearchBar