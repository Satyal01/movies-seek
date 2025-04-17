import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const HomeSkeletonLoading = ({cards}) => {
  return (
      Array(cards).fill(0).map((_, index) => {
        return (

          <div className={`relative w-40 h-52 flex flex-col items-center  rounded-lg shadow-lg  gap-2 overflow-hidden
            md:h-[341px] md:w-[227px] bg-cover bg-center`} key={index}>

          <div className='w-full text-center   h-full '>
            <Skeleton height="100%" className='mb-0.5' />
          </div>
        </div>
        )

      })
    
    )

}

export default HomeSkeletonLoading
