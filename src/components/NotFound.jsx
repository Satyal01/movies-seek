import React from 'react'
import useStore from '../zustandStore/store'


const NotFound = () => {
    const {ToManyReqError} = useStore();



    return (
        <div className="min-h-screen min-w-full   flex items-start justify-center ">
            {
                ToManyReqError===true ? <h1 className="text-white text-2xl text-center">No Movies Found <br /> To Many API Request  </h1>:<h1 className="text-white text-2xl">No Movies Found</h1>    
            }
            
        </div>
    )
}

export default NotFound
