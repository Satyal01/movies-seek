import React, {useState} from 'react'
import { Outlet } from 'react-router';
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";

const Home = () => {
    const [search, setSerach] = useState("");

    function handleSearch(){
  
    }
    let movies = [
      {
      id:1,
      href : "https://picsum.photos/id/237/200/300",
      name : "The Shawshank Redemption", 
      releaseDate : "1994",
      isFavourite : false
    },
    {
      id:2,
      href : "#",
      name : "the godfather",
      releaseDate : "1972",
      isFavourite : false
    },
    {
      id:3,
      href : "#",
      name : "the dark knight",
      releaseDate : "2008",
      isFavourite : false
    },
    {
      id:4,
      href : "#",
      name : "pulp fiction",  
      releaseDate : "1994",
      isFavourite : false
    },
    {
      id:5,
      href : "#",
      name : "the lord of the rings: the return of the king",
      releaseDate : "2003",
      isFavourite : false
    }
    ]
    return (
      <div className="md:h-screen">
      <SearchBar setSearch={setSerach} value={search}/>
  
      <div  className="min-h-full min-w-full bg-[#222222] flex  items-center justify-center pt-6 gap-4 md:gap-10 
      md:flex-row flex-wrap md:items-start md:justify-start md:px-10 ">
        {
          movies.map((movie)=>{
            return (
              movie.name.toLowerCase().includes(search.toLowerCase()) && 
              <MovieCard key={movie.id} movie={movie} />
            )
          })
        }
      </div>
      </div>
    )
    
}

export default Home
