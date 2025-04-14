import React from 'react'

const MovieCard = ({movie}) => {
  return (

    <div className={`relative w-40 h-52 flex flex-col items-center justify-end rounded-lg shadow-lg  gap-2 overflow-hidden
    md:h-[22rem] md:w-[20rem] bg-cover bg-center`} style={{backgroundImage : `url(${movie.href})`}}>
      
      <div className=' w-full text-center p-1 pt-[9.8rem]  md:pt-[20rem] h-full  hover:backdrop-blur-xs md:hover:pt-[10rem]  transition-all duration-200 ease-in'>
        <p className='font-[-poppins] font-medium text-white px-2'>{movie.name}</p>
        <p className='text-right  absolute bottom-0 right-0 text-[#22222] text-sm '>{movie.releaseDate}</p>
      </div>
      <div className='absolute top-1 right-1  w-9 h-9 rounded-full  p-2  cursor-pointer backdrop-blur-xs '>
        💗
      </div>
    </div>
      )
    }


export default MovieCard
