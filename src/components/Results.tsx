"use client"

import React from 'react'
import type { Movie } from '@/types/TMDB'

const Results = ({apiData}:{apiData: Movie[]}) => {
  return (

    <>
     <div>
      {apiData.map((movie)=>{

     return <div key={movie.id}>
        <h1>{movie.title}</h1>
      </div>
      

    })}
    </div>
    
    </>
   
  )
}

export default Results