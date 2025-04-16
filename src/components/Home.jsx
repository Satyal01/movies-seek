import React, {useState, useEffect} from 'react'
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";
import moviesData from "./movies.data"
import ftechData from './movies.data';

const Home = () => {
    const [search, setSerach] = useState("");
    const [isLoading, setLoading] = useState(true);
    const [moviesData, setMoviesData] = useState([]);

    useEffect(()=>{
      ftechData().then((data)=>{
        console.log(typeof data);
        setMoviesData(data);
        setLoading(false);
      }).catch(err => console.log(err));
    },[]);

    function handleSearch(){
  
    }
    
    if(isLoading){
      return (
        <div className="min-h-screen min-w-full bg-[#222222] flex items-center justify-center">
          <h1 className="text-white text-2xl">Loading...</h1>
        </div>
      ) 
    }

    if(moviesData.length===0){
      return (
        <div className="min-h-screen min-w-full bg-[#222222] flex items-center justify-center">
          <h1 className="text-white text-2xl">No Movies Found</h1>
        </div>
      )
    }
   
    
    return (
      <div className="md:h-screen">
      <SearchBar setSearch={setSerach} value={search}/>
  
      <div  className="min-h-full min-w-full bg-[#222222] flex  items-center justify-center pt-6 gap-4 md:gap-10 
      md:flex-row flex-wrap md:items-start md:justify-start md:px-10 ">
        
        {
          moviesData.map((movie)=>{
            return (
              movie.primaryTitle.toLowerCase().includes(search.toLowerCase()) && 
              <MovieCard key={movie.id} movie={movie} />
            )
          })
        }
      </div>
      </div>
    )
    
}

export default Home
