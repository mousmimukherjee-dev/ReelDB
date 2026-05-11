import React from 'react'

import type { MovieDetail } from '@/types/TMDB'
import Image from 'next/image'
import { error } from 'console'


interface MoviePageProps{

  params: Promise<{id:string}>
}


const MoviePage = async ({params}:MoviePageProps) => {

  const paramsQuery = await params

  const movieId = paramsQuery.id

    try{

      const res= await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}`)
      if(!res.ok){

        throw error
      }
      const data:MovieDetail = await res.json();
      
      const imagePath = data.backdrop_path || data.poster_path
      console.log("image path is :", imagePath)
     

      return(

        <div className='w-full'>
          <div className='flex p-4 md:pt-8 justify-center items-center gap-4 md:flex-row flex-col max-w-6xl mx-auto md:space-x-6'>
            <Image src={`https://image.tmdb.org/t/p/original${imagePath}`} alt="movieImage" width={500} height={300} style={{maxWidth:"100%",height:"100%"}} className='rounded-lg w-full max-w-lg'></Image>
            <div className='p-2'>
              <h2 className='text-lg mb-3 font-bold'>{data.title || data.name}</h2>
              <p className='text-lg mb-3'>{data.overview}</p>
              <p className='mb-3'>
               <span className='font-semibold mr-1'>Date Released:</span>{data.release_date || data.first_air_date}</p>
              <p className='mb-3'>
              <span className='font-semibold mr-1'>Date Released:</span>{data.vote_count}</p>
            </div>
          </div>
        </div>

       
      )


    }
    catch(error){

      console.log(error)
      throw error
    }
  
}

export default MoviePage