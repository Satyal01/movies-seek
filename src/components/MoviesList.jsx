import React from 'react'
import MovieCard from "./MovieCard";
import NoteFound from "./NotFound"

const MoviesList = ({moviesData, searchQuery}) => {
  
  if(searchQuery.length!==0){
    const filteredMovies = moviesData.filter((movie)=>{
      return movie.primaryTitle.toLowerCase().includes(searchQuery.toLowerCase())
    })
  
    if(filteredMovies.length===0){
      return <NoteFound/>
    }

    return (
      <>
      {
          filteredMovies.map((movie)=>{
              return (
                  <MovieCard key={movie.id} movie={movie} />
              )
          })
      }
      </>
    )
  }

  


  return (
    <>
    {
        moviesData.map((movie)=>{
            return (
                movie.primaryTitle.toLowerCase().includes(searchQuery.toLowerCase()) && 
                <MovieCard key={movie.id} movie={movie} />
            )
        })
    }
    </>
   
  )
}

export default MoviesList
