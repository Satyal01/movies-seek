import React from 'react'
import { Link } from 'react-router'

const MovieCard = ({ movie }) => {
  return (
    <Link to={"/"+movie.id} state={{thisMovieData : movie}}>
    <div className={`relative w-40 h-52  rounded-lg shadow-lg  overflow-hidden border-1 border-gray-800 
    md:h-[341px] md:w-[227px] `}>
      <img className='w-full h-52 md:h-[341px] hover:scale-125 transition-scale duration-300 ease-out' src={movie.primaryImage} alt={movie.primaryTitle} />
    </div>
    </Link>

  )
}


export default MovieCard
