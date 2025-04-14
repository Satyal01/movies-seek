import React, {useState} from 'react'

const SearchBar = ({setSearch, handleSearch, value}) => {

  return (
    <div className='w-auto h-auto  text-center bg-[#222222] pt-4  '>
      <input type="text" value={value} className="text-[#585858] border-2 border-double  mr-2 h-10 rounded-lg p-1 md:w-1/4 md:p-2" placeholder='search movies...' onChange={(e)=>setSearch(e.target.value)} />
      <button className='w-20 h-10 rounded-lg text-bold text-white bg-red-300' onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchBar
