"use client"

import React from 'react'
import type { Movie } from '@/types/TMDB'
import Card from './Card'

const Results = ({apiData}:{apiData: Movie[]}) => {
  return (

    <>
     <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4 w-full'>
      {apiData.map((movie)=>{

     return <Card key={movie.id} movie={movie}/>
      

    })}
    </div>
    
    </>
   
  )
}

export default Results