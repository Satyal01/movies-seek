import {create } from "zustand";
import fetchData from "../components/movies.data";


const useStore = create((set)=>({
    moviesDataStore:[],
    isLoading: true,
    fetchMoviesData : ()=>{
        fetchData().then((data)=>{
            set({moviesDataStore : data, isLoading : false})
        }).catch( err => console.log(err))
    }
}));


export default useStore;