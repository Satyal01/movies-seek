import React from 'react'
import { NavLink, Outlet } from 'react-router'


const NavBar = () => {
  
    return (
    <>
    <div className='bg-black  flex justify-between px-5 items-center h-16 text-violet-500  drop-shadow-md drop-shadow-gray-800'>
      <div>
        <NavLink to={"/"} >Movie App</NavLink>
      </div>
      <div className="flex gap-10 ">
        <div> <NavLink to={"/"}>Home</NavLink></div>
        <div><NavLink to={"/favourites"}>Favourites</NavLink></div>    
      </div>
    </div>
    <Outlet />
      
    </>
  )
}

export default NavBar
