import React, { useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router'


function GenreElement({value}){
    return (
        <div className="w-auto h-6 md:h-7 border-1 rounded-xl text-center px-2 md:px-3 border-violet-500">
            <p>{value}</p>
        </div>
    )
}





const MoviePage = () => {
    const [isFav, setIsFav]  = useState(false);
    const location = useLocation();
    const thisMovieData = location.state.thisMovieData;
    
    useEffect(()=>{
        let  favMovies = JSON.parse(localStorage.getItem("FavMovies")) || [];
        favMovies.filter((movie)=>{
            return movie.id===thisMovieData.id;
        }).length!==0 && setIsFav(true) 
    })
    
    let link = thisMovieData.trailer;
    if(link){
        let first = link.substring(0,24).concat("embed/")
        let second = link.substring(32);
        link = first.concat(second); 
    }
    function hanldeFavClick(){
        let favMovies = JSON.parse(localStorage.getItem("FavMovies")) || [];
        if(isFav){
            console.log('if')
            const newFavMovies = favMovies.filter((moive)=>{
                return moive.id!==thisMovieData.id;
            })
            localStorage.setItem("FavMovies", JSON.stringify(newFavMovies))
            setIsFav(!isFav)
        }else{
            console.log("else")
            favMovies.push(thisMovieData); 
            localStorage.setItem("FavMovies" , JSON.stringify(favMovies));
            alert("save to Favourites Movies");
            setIsFav(!isFav) 
        }
        
    }
    
    

  return (
    <div className="bg-black h-auto flex gap-4 flex-col md:flex-row justify-around p-5 text-white">
        <div className=' md:h-[42rem] md:max-w-7xl  text-center    md:p-5 md:sticky top-10'>
            <img className='inline-block max-w-54 md:max-w-6xl md:h-9/10 rounded-lg' src={thisMovieData.primaryImage} alt={thisMovieData.primaryTitle} />
        </div>
        <div className='bg--200 font-(--poppins) pl-2  md:h-full  md:p-5 md:pt-20 flex flex-col  gap-6'>
            <div className='movieName relative ' >
            <div onClick={hanldeFavClick} className=' absolute right-5 top-2 w-10 h-10 cursor-pointer text-medium p-2 border-1 border-violet-500 rounded-full text-white'>
                { 
                    !isFav ? "🔖" : "❌"   
                }       
                </div>
                <p className='text-2xl md:text-5xl  font-medium'>{thisMovieData.primaryTitle} <span className='text-[#5d5b5b] text-xs '>{thisMovieData.releaseDate.substring(0,4)}</span> </p>
                {thisMovieData.isAdult && <div className='h-6 rounded-lg w-8 inline-block md:mr-2 bg-white text-sm font-medium  text-black text-center mt-2'>18+</div>}
                {thisMovieData.averageRating && <p className='text-slate-400 pt-1 inline-block text-lg '>⭐<span className='text-white'>{thisMovieData.averageRating} </span>/10</p>}
            </div>
            <div className='description' >
                {/* <p className='text-medium font-bold text-[#4a4949]'>description:</p> */}
                <p className='mb-1'><span className='mr-2 text-[#5d5b5b]'>type:</span>{thisMovieData.type}</p>
                <p className='text-medium md:text-lg'>{thisMovieData.description}</p>
                <div className='h-10 w-full flex flex-wrap  gap-3 mt-2' >
                    {
                        thisMovieData.genres.map((value, i)=>{
                            return (
                                <GenreElement key={i} value={value} />
                            )
                        })
                    }
                </div>
                    
            {
                thisMovieData?.trailer && 
                <div className='trailer w-[300px] h-[200px] mt-4   md:w-auto  md:h-[514px] '>
                        <iframe width="100%" height="100%" src={link} title={thisMovieData.primaryTitle + "| Official Trailer"} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            }
            <div className='' >
                <p className='mt-5 mr-3  text-[#5d5b5b] inline-block'>External Links :</p>
                
                {thisMovieData?.externalLinks ?
                    thisMovieData.externalLinks.map((link, index)=>{
                        return (
                            <a key={index} href={link} target="_blank" className='m-1 text-violet-500  text-sm hover:text-white '>Link {index+1}</a>
                        )
                    })
                    :
                    <p className='text-[#5d5b5b] inline-block'>no links available right now </p>
                }
            </div>
            </div>
            
            
        </div>
    </div>
  )
}

export default MoviePage
