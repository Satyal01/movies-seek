import React, {useState, useEffect} from 'react'
import MoviesList from "./MoviesList";
import SearchBar from './SearchBar';
import HomeSkeletonLoading from './HomeSkeletonLoading';
import {SkeletonTheme} from "react-loading-skeleton";44
import NotFound from "./NotFound"
import useStore from '../zustandStore/store';

const Home = () => {

    const {moviesDataStore, isLoading, fetchMoviesData } = useStore();
    const [search, setSearch] = useState("");
    // const [isLoading, setLoading] = useState(true);

    useEffect(()=>{
      if(moviesDataStore.length===0){
        fetchMoviesData()
      }
    },[]);
    function handleSearch(){

    }
    
    
    // if(moviesData.length===0){
    //   return (
    //     <div className="min-h-screen min-w-full bg-[#222222] flex items-center justify-center">
    //       <h1 className="text-white text-2xl">No Movies Found</h1>
    //     </div>
    //   )
    // }
   
    
    return(
      <div className="md:min-h-screen bg-black">
        <SearchBar setSearch={setSearch} value={search} handleSearch={handleSearch} /> 
        <div  className="min-h-full min-w-full  flex  items-center justify-center pt-6 gap-4 md:gap-18 
      md:flex-row flex-wrap md:items-start md:justify-start md:px-10 ">
          { isLoading && <SkeletonTheme baseColor="#292828" highlightColor="#545252" >  <HomeSkeletonLoading cards={10} /></SkeletonTheme>}
          <MoviesList moviesData={moviesDataStore} searchQuery={search}/>
          { moviesDataStore.length===0 && isLoading===false ? <NotFound/>  : null }
        </div>
      </div>
    )
  
}


export default Home
