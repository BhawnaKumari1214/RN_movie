import React from 'react'
import Navbar from './component/Header/Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <div className="h-screen w-full overflow-auto flex flex-col ">
        <div className=''>
          <Navbar />
        </div>
        <div className='flex-1'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout