import React, { use, useState } from 'react'
import MovieCard from './MovieCard';

const Favourites = () => {
  const [refrese, setRefrese] = useState(false);
  const favMovies = JSON.parse(localStorage.getItem("FavMovies")) || []
  
  function hanldeRFavClick(e){
    const updatedFavMovies = favMovies.filter((movie)=>{
        return movie.id!==e.target.parentElement.id;
      })
    localStorage.setItem("FavMovies",JSON.stringify(updatedFavMovies));
    setRefrese(!refrese);
  }
  if(favMovies.length===0){
    return (
      <div className='h-screen bg-black grid place-content-center'>
        <h1 className='text-3xl text-violet-500' >No Favourites yet..</h1>
      </div>
    )
  }
  return (
    <div className='h-screen bg-black'>
      <div  className="min-h-full min-w-full  flex  items-center justify-center pt-6 gap-4 md:gap-18 
      md:flex-row flex-wrap md:items-start md:justify-start md:px-10 ">
          {favMovies.map((movie)=>{
            return (
            <div className='relative fav-card'key={movie.id} >
            <div >
              <MovieCard  movie={movie} />
              <div id={movie.id}  onClick={hanldeRFavClick} className='absolute right-0 top-0 w-10 h-10 cursor-pointer text-medium p-2 border-1 border-black rounded-full text-white'>
                <p>❌</p>
              </div>
            </div>
            </div>
            )
          })}
          
       </div>
    </div>
  )
}

export default Favourites
