import {create } from "zustand";
import fetchData from "../components/movies.data";


const useStore = create((set)=>({
    moviesDataStore:[],
    isLoading: true,
    ToManyReqError : false,
    fetchMoviesData : ()=>{
        fetchData().then((data)=>{
            // console.log('moviesdata',data);
            if(data?.message){
                set({moviesDataStore:[], isLoading:false, ToManyReqError : true})
            }else{
                set({moviesDataStore : data, isLoading : false, ToManyReqError : false})
            }
        }).catch( err => console.log("error", err))
    }
}));


export default useStore;    