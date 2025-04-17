import React from 'react'
import { useLocation, useParams } from 'react-router'

const MoviePage = () => {
    const location = useLocation();
    const thisMovieData = location.state.thisMovieData;
    console.log(thisMovieData);
  return (
    <div className="bg-black h-auto flex justify-around p-5 text-white">
        <div className='md:h-[42rem] md:max-w-7xl   md:p-5 md:sticky top-10'>
            <img className='max-w-6xl h-9/10 rounded-lg' src={thisMovieData.primaryImage} alt={thisMovieData.primaryTitle} />
        </div>
        <div className='font-(--poppins)  md:h-full  md:p-5 md:pt-20 flex flex-col gap-6'>
            <div className='movieName' >
                <p className='text-5xl  font-medium'>{thisMovieData.primaryTitle}</p>
                {thisMovieData.isAdult && <div className='h-6 rounded-lg w-8 inline-block md:mr-2 bg-white text-sm font-medium  text-black text-center mt-2'>18+</div>}
                <p className='text-slate-400 pt-1 inline-block text-lg '>⭐<span className='text-white'>{thisMovieData.averageRating} </span>/10</p>
            </div>
            <div className='description' >
                {/* <p className='text-medium font-bold text-[#4a4949]'>description:</p> */}
                <p className='text-lg'>{thisMovieData.description}</p>
            </div>
            <div className='details'>
                <p></p>
            </div>
            
            
        </div>
    </div>
  )
}

export default MoviePage
