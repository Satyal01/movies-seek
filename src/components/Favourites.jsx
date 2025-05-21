import React, { useState, useEffect } from 'react'
import MovieCard from './MovieCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Favourites = () => {
  const [favMovies, setFavMovies] = useState([]);
  // const favMovies = JSON.parse(localStorage.getItem("FavMovies")) || []
  
  useEffect(()=>{
    const storedMovies = JSON.parse(localStorage.getItem("FavMovies")) || [];
    setFavMovies(storedMovies);

  },[])


  function hanldeRFavClick(e){
    toast.success("Removed from Favourites",{position:'bottom-right',});
    const updatedFavMovies = favMovies.filter((movie)=>{
      return movie.id!==e.target.closest("div[id]").id;
    })
    setFavMovies(updatedFavMovies)
    localStorage.setItem("FavMovies",JSON.stringify(updatedFavMovies));
    
  }
  if(favMovies.length===0){
    return (
      <div className='h-screen bg-black grid place-content-center'>
        <h1 className='text-3xl text-violet-500' >No Favourites yet..</h1>
      </div>
    )
  }
  return (
    <div className='min-h-screen bg-black p-4 '>
      <div  className="md:min-h-full md:min-w-full justify-center items-center flex pt-6 gap-1 md:gap-14 
      flex-row flex-wrap md:items-start md:justify-start  ">
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
