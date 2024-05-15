import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import SearchBar from '../rightNav/SearchBar'
import { FaUser } from 'react-icons/fa'
import UserProfile from '../rightNav/UserProfile'

function Navbar() {
  
  return (
    <div className='capitalize z-50 navbar fixed top-0 w-full py-3 px-[4%] lg:px-[5%] flex items-center justify-between text-zinc-100 ' >
      <div className="flex-1 left inline-flex  gap-[6%] items-center ">

        <NavLink to="/" as={'div'}>
          <button className="logo text-xl ">
            <span className=' bg-gradient-to-br from-blue-400 to-emerald-600 text-2xl font-bold text-center px-3 py-1 rounded  text-zinc-100'> RN</span> movie 
          </button>
        </NavLink>

        <ul className="flex-1 navlinks hidden md:gap-3  lg:gap-5 xl:gap-10 items-center md:inline-flex ">
          <li>
            <NavLink  to="/"> home </NavLink>
          </li>
          <li>
            <NavLink to="#"> all </NavLink>
          </li>
          <li>
            <NavLink to="#"> TV shows </NavLink>
          </li>
          <li>
            <NavLink to=""> movies </NavLink>
          </li>
          <li>
            <NavLink to=""> popular </NavLink>
          </li>
        </ul>

      </div>
      <div className="relative right flex gap-3 items-center ">
        <SearchBar />
        <UserProfile />
      </div>
    </div>
  )
}

export default Navbar